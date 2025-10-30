// controllers/NavigationCardController.js
import NavigationCard from '../models/navigationCard.js';

/** Helpers */
const clamp = (n, min, max) => Math.max(min, Math.min(n, max));

const NavigationCardController = {
  /** ======================
   *  Público
   *  ====================== */

  // GET /navigation-cards?page=home&visible=true
  async listByPage(req, res, next) {
    try {
      const { page, visible = 'true', limit: l, offset: o } = req.query;
      if (!page) return res.status(400).json({ message: "Query param 'page' is required" });

      const limit = clamp(parseInt(l || '50', 10) || 50, 1, 200);
      const offset = clamp(parseInt(o || '0', 10) || 0, 0, 10_000);

      const query = { page };
      if (visible !== 'false') query.visible = true;

      const [data, total] = await Promise.all([
        NavigationCard.find(query)
          .sort({ order: 1, createdAt: -1, _id: -1 })
          .skip(offset)
          .limit(limit)
          .lean(),
        NavigationCard.countDocuments(query),
      ]);

      res.json({
        data,
        offset,
        limit,
        total,
        hasMore: offset + data.length < total,
      });
    } catch (err) {
      next(err);
    }
  },

  /** ======================
   *  Admin (requireAdmin)
   *  ====================== */

  // POST /admin/navigation-cards
  async create(req, res, next) {
    try {
      const { title, imagenUrl, page, visible = true, order = 0, esInformativa = false } = req.body || {};
      if (!title || !imagenUrl || !page) {
        return res.status(400).json({ message: 'title, imagenUrl and page are required' });
      }

      const doc = await NavigationCard.create({
        title,
        imagenUrl,
        page,
        visible,
        order,
        esInformativa,
      });

      res.status(201).json({ message: 'created', id: doc._id.toString() });
    } catch (err) {
      // Si el enum de page no coincide con tu schema, Mongoose lanzará un ValidationError (coincide con tu enum de páginas) :contentReference[oaicite:1]{index=1}
      next(err);
    }
  },

  // PUT /admin/navigation-cards/:id
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const payload = { ...req.body };

      const doc = await NavigationCard.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
      }).lean();

      if (!doc) return res.status(404).json({ message: 'NavigationCard not found' });

      res.json({ message: 'updated', id: doc._id.toString(), data: doc });
    } catch (err) {
      next(err);
    }
  },

  // DELETE /admin/navigation-cards/:id
  async remove(req, res, next) {
    try {
      const { id } = req.params;
      const result = await NavigationCard.deleteOne({ _id: id });
      res.json({ message: 'deleted', deleted: result.deletedCount || 0 });
    } catch (err) {
      next(err);
    }
  },

  // GET /admin/navigation-cards?Page=home&visible=true&q=texto&limit=20&page=1&sort=order
  async listAdmin(req, res, next) {
    try {
      const {
        page,
        visible,
        q,
        limit: l,
        page: p,
        sort = 'order,createdAt',
      } = req.query;

      const limit = clamp(parseInt(l || '20', 10) || 20, 1, 100);
      const pageNum = clamp(parseInt(p || '1', 10) || 1, 1, 10_000);
      const skip = (pageNum - 1) * limit;

      const query = {};
      if (page) query.page = page;
      if (visible === 'true') query.visible = true;
      if (visible === 'false') query.visible = false;
      if (q) {
        query.$or = [
          { title: { $regex: q, $options: 'i' } },
          { imagenUrl: { $regex: q, $options: 'i' } },
        ];
      }

      const sortObj = {};
      for (const token of sort.split(',')) {
        const t = token.trim();
        if (!t) continue;
        if (t.startsWith('-')) sortObj[t.slice(1)] = -1;
        else sortObj[t] = 1;
      }

      const [data, total] = await Promise.all([
        NavigationCard.find(query).sort(sortObj).skip(skip).limit(limit).lean(),
        NavigationCard.countDocuments(query),
      ]);

      res.json({
        data,
        page: pageNum,
        limit,
        total,
        hasMore: skip + data.length < total,
      });
    } catch (err) {
      next(err);
    }
  },
};

export default NavigationCardController;
