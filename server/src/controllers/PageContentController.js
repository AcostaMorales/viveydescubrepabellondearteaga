// controllers/PageContentController.js
import PageContent from '../models/PageContent.js';
import NavigationCard from '../models/navigationCard.js';
import { translateLocaleContent } from '../services/libreTranslateService.js';

const clamp = (n, min, max) => Math.max(min, Math.min(n, max));
const parseLocale = (s) => (typeof s === 'string' ? s.trim().toLowerCase() : null);

function selectLocale(doc, lang) {
  const target = parseLocale(lang);
  if (!target || target === doc.defaultLocale) {
    return { content: doc.content, localeUsed: doc.defaultLocale, fallback: false, meta: null };
  }
  const entry = doc.translations?.get?.(target);
  if (entry && entry.content) {
    return { content: entry.content, localeUsed: target, fallback: false, meta: entry };
  }
  return { content: doc.content, localeUsed: doc.defaultLocale, fallback: true, meta: entry || null };
}

const PageContentController = {
  /** ========= Público ========= */

  // GET /page-content/by-navigation?name=...&lang=es
  async getByNavigationName(req, res, next) {
    try {
      const { name, lang } = req.query;
      if (!name) return res.status(400).json({ message: "Query param 'name' is required" });

      const nav = await NavigationCard.findOne(
        { title: { $regex: `^${name}$`, $options: 'i' } },
        { title: 1, page: 1, esInformativa: 1 }
      ).lean();

      if (!nav) return res.status(404).json({ message: 'NavigationCard not found' });

      const pc = await PageContent.findOne({ navigationCardId: nav._id }).lean();

      if (!pc) {
        return res.json({
          navigationCard: { id: nav._id, title: nav.title, page: nav.page, esInformativa: nav.esInformativa },
          canCreate: !!nav.esInformativa,
          exists: false,
          content: null,
          localeUsed: null,
          fallback: null,
        });
      }

      const { content, localeUsed, fallback, meta } = selectLocale(pc, lang);
      res.json({
        navigationCard: { id: nav._id, title: nav.title, page: nav.page, esInformativa: nav.esInformativa },
        canCreate: !!nav.esInformativa,
        exists: true,
        pageContentId: pc._id,
        defaultLocale: pc.defaultLocale,
        visible: pc.visible,
        content,
        localeUsed,
        fallback,
        translationMeta: meta || undefined,
        updatedAt: pc.updatedAt,
      });
    } catch (err) {
      next(err);
    }
  },

  // GET /page-content/:id?lang=en
  async getByIdPublic(req, res, next) {
    try {
      const { id } = req.params;
      const { lang } = req.query;

      const pc = await PageContent.findById(id).lean();
      if (!pc) return res.status(404).json({ message: 'PageContent not found' });

      const { content, localeUsed, fallback, meta } = selectLocale(pc, lang);
      res.json({
        pageContentId: pc._id,
        navigationCardId: pc.navigationCardId,
        defaultLocale: pc.defaultLocale,
        visible: pc.visible,
        content,
        localeUsed,
        fallback,
        translationMeta: meta || undefined,
        updatedAt: pc.updatedAt,
      });
    } catch (err) {
      next(err);
    }
  },

  /** ========= Admin ========= */

  // POST /admin/page-content
  async create(req, res, next) {
    try {
      let { navigationCardId, navigationCardName, defaultLocale = 'es', content, translations, visible = true } =
        req.body || {};
      if (!navigationCardId && !navigationCardName) {
        return res.status(400).json({ message: 'navigationCardId or navigationCardName is required' });
      }
      if (!content || !content.title) {
        return res.status(400).json({ message: 'content with at least a title is required' });
      }

      let nav;
      if (navigationCardId) {
        nav = await NavigationCard.findById(navigationCardId, { esInformativa: 1, title: 1 }).lean();
      } else {
        nav = await NavigationCard.findOne(
          { title: { $regex: `^${navigationCardName}$`, $options: 'i' } },
          { esInformativa: 1, title: 1 }
        ).lean();
      }
      if (!nav) return res.status(404).json({ message: 'NavigationCard not found' });
      if (!nav.esInformativa) {
        return res.status(400).json({ message: 'NavigationCard is not informative (esInformativa=false). Creation blocked.' });
      }

      const exists = await PageContent.exists({ navigationCardId: nav._id });
      if (exists) return res.status(409).json({ message: 'PageContent already exists for this NavigationCard' });

      const doc = new PageContent({
        navigationCardId: nav._id,
        defaultLocale,
        content,
        visible,
      });

      if (translations && typeof translations === 'object') {
        for (const [lng, value] of Object.entries(translations)) {
          doc.translations.set(lng, value);
        }
      }

      await doc.save();
      res.status(201).json({ message: 'created', id: doc._id.toString(), navigationCardId: nav._id });
    } catch (err) {
      next(err);
    }
  },

  // PUT /admin/page-content/:id
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { content, defaultLocale, visible, translations } = req.body || {};

      const doc = await PageContent.findById(id);
      if (!doc) return res.status(404).json({ message: 'PageContent not found' });

      let baseChanged = false;
      if (content) {
        doc.content = content;
        baseChanged = true;
      }
      if (typeof visible === 'boolean') doc.visible = visible;
      if (defaultLocale) doc.defaultLocale = defaultLocale;

      if (translations && typeof translations === 'object') {
        for (const [lng, value] of Object.entries(translations)) {
          const current = doc.translations.get(lng) || {};
          doc.translations.set(lng, { ...current, ...value });
        }
      }

      if (baseChanged && doc.translations && doc.translations.size > 0) {
        for (const [lng, meta] of doc.translations.entries()) {
          if (meta) {
            meta.needUpdate = true;
            doc.translations.set(lng, meta);
          }
        }
      }

      await doc.save();
      res.json({ message: 'updated', id: doc._id.toString(), updatedAt: doc.updatedAt });
    } catch (err) {
      next(err);
    }
  },

  // DELETE /admin/page-content/:id
  async remove(req, res, next) {
    try {
      const { id } = req.params;
      const result = await PageContent.deleteOne({ _id: id });
      res.json({ message: 'deleted', deleted: result.deletedCount || 0 });
    } catch (err) {
      next(err);
    }
  },

  // GET /admin/page-content/one?id=... | /admin/page-content/one?name=...&lang=...
  async getOneAdmin(req, res, next) {
    try {
      const { id, name, lang } = req.query;
      let doc;

      if (id) {
        doc = await PageContent.findById(id).lean();
      } else if (name) {
        const nav = await NavigationCard.findOne(
          { title: { $regex: `^${name}$`, $options: 'i' } },
          { _id: 1 }
        ).lean();
        if (!nav) return res.status(404).json({ message: 'NavigationCard not found' });
        doc = await PageContent.findOne({ navigationCardId: nav._id }).lean();
      } else {
        return res.status(400).json({ message: 'id or name is required' });
      }

      if (!doc) return res.status(404).json({ message: 'PageContent not found' });

      const { content, localeUsed, fallback, meta } = selectLocale(doc, lang);
      res.json({
        data: {
          _id: doc._id,
          navigationCardId: doc.navigationCardId,
          defaultLocale: doc.defaultLocale,
          visible: doc.visible,
          content,
          localeUsed,
          fallback,
          translationMeta: meta || undefined,
          createdAt: doc.createdAt,
          updatedAt: doc.updatedAt,
        },
      });
    } catch (err) {
      next(err);
    }
  },

  /** ======== Traducciones (Admin) con LibreTranslate ======== */

  // POST /admin/page-content/:id/translate?to=en[&from=es][&overwrite=true]
  async translateById(req, res, next) {
    try {
      const { id } = req.params;
      const { to, from, overwrite = 'false' } = req.query;

      if (!to) return res.status(400).json({ message: "'to' locale is required, e.g. ?to=en" });

      const doc = await PageContent.findById(id);
      if (!doc) return res.status(404).json({ message: 'PageContent not found' });

      const existing = doc.translations.get(to);
      if (existing?.content && overwrite !== 'true') {
        return res
          .status(409)
          .json({ message: `Translation for '${to}' already exists. Use ?overwrite=true to replace.` });
      }

      const base = doc.content;
      const translated = await translateLocaleContent(base, from || doc.defaultLocale, to);

      const meta = {
        ...(existing || {}),
        content: translated,
        provider: 'libretranslate',
        lastTranslatedAt: new Date(),
        reviewed: false,
        needUpdate: false,
      };
      doc.translations.set(to, meta);
      await doc.save();

      res.status(201).json({
        message: 'translated',
        id: doc._id.toString(),
        lang: to,
        updatedAt: doc.updatedAt,
      });
    } catch (err) {
      next(err);
    }
  },

  // POST /admin/page-content/translate-by-name?name=Centro%20Histórico&to=ja[&from=es][&overwrite=true]
  async translateByName(req, res, next) {
    try {
      const { name } = req.query;
      const { to, from, overwrite = 'false' } = req.query;

      if (!name) return res.status(400).json({ message: "Query 'name' is required" });
      if (!to) return res.status(400).json({ message: "'to' locale is required" });

      const nav = await NavigationCard.findOne(
        { title: { $regex: `^${name}$`, $options: 'i' } },
        { _id: 1 }
      ).lean();
      if (!nav) return res.status(404).json({ message: 'NavigationCard not found' });

      const doc = await PageContent.findOne({ navigationCardId: nav._id });
      if (!doc) return res.status(404).json({ message: 'PageContent not found for this NavigationCard' });

      const existing = doc.translations.get(to);
      if (existing?.content && overwrite !== 'true') {
        return res
          .status(409)
          .json({ message: `Translation '${to}' already exists. Use ?overwrite=true to replace.` });
      }

      const translated = await translateLocaleContent(doc.content, from || doc.defaultLocale, to);
      const meta = {
        ...(existing || {}),
        content: translated,
        provider: 'libretranslate',
        lastTranslatedAt: new Date(),
        reviewed: false,
        needUpdate: false,
      };
      doc.translations.set(to, meta);
      await doc.save();

      res.status(201).json({ message: 'translated', id: doc._id.toString(), lang: to });
    } catch (err) {
      next(err);
    }
  },

  // POST /admin/page-content/:id/translate-missing  body: { targets: ["en","ja"], from?: "es" }
  async translateMissing(req, res, next) {
    try {
      const { id } = req.params;
      const { targets, from } = req.body || {};
      if (!Array.isArray(targets) || targets.length === 0) {
        return res.status(400).json({ message: "Body 'targets' must be a non-empty array of locales" });
      }

      const doc = await PageContent.findById(id);
      if (!doc) return res.status(404).json({ message: 'PageContent not found' });

      const source = from || doc.defaultLocale;
      const created = [];
      const skipped = [];

      for (const to of targets) {
        const existing = doc.translations.get(to);
        if (existing?.content) {
          skipped.push(to);
          continue;
        }
        const translated = await translateLocaleContent(doc.content, source, to);
        doc.translations.set(to, {
          content: translated,
          provider: 'libretranslate',
          lastTranslatedAt: new Date(),
          reviewed: false,
          needUpdate: false,
        });
        created.push(to);
      }
      await doc.save();

      res.status(201).json({ message: 'batch-translated', id: doc._id.toString(), created, skipped });
    } catch (err) {
      next(err);
    }
  },
};

export default PageContentController;
