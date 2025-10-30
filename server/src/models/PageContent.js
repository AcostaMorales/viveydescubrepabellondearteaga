// models/PageContent.js
import mongoose, { Schema } from 'mongoose';

const LocaleContentSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    paragraphs: [{ type: String, trim: true }],
    subtitles: [{ type: String, trim: true }],
    lists: [
      new Schema(
        {
          title: { type: String, trim: true },
          ordered: { type: Boolean, default: false },
          items: [{ type: String, trim: true }],
        },
        { _id: false }
      ),
    ],
  },
  { _id: false }
);

const TranslationEntrySchema = new Schema(
  {
    // ✅ Contenido traducido completo
    content: { type: LocaleContentSchema, required: false },
    provider: { type: String, trim: true },
    lastTranslatedAt: { type: Date },
    reviewed: { type: Boolean, default: false },
    needUpdate: { type: Boolean, default: false },
  },
  { _id: false }
);

const PageContentSchema = new Schema(
  {
    navigationCardId: {
      type: Schema.Types.ObjectId,
      ref: 'NavigationCard',
      required: true,
      index: true,
      unique: true, // 1 contenido por NavigationCard
    },
    defaultLocale: { type: String, default: 'es', trim: true },
    visible: { type: Boolean, default: true },

    // Contenido base (idioma por defecto)
    content: { type: LocaleContentSchema, required: true },

    // Mapa de traducciones por locale
    translations: {
      type: Map,
      of: TranslationEntrySchema,
      default: new Map(),
    },
  },
  { timestamps: true }
);

/** ===== Métodos de instancia ===== */

// Obtener contenido en el locale solicitado (con fallback)
PageContentSchema.methods.getContentForLocale = function (locale) {
  if (!locale || locale === this.defaultLocale) return this.content;
  const entry = this.translations?.get?.(locale);
  if (entry && entry.content) return entry.content;
  return this.content;
};

// Marcar todas las traducciones como desactualizadas (tras editar el base)
PageContentSchema.methods.markTranslationsOutdated = function () {
  if (!this.translations) return;
  for (const [lng, meta] of this.translations.entries()) {
    if (!meta) continue;
    meta.needUpdate = true;
    this.translations.set(lng, meta);
  }
};

// ¿Una traducción está desactualizada?
PageContentSchema.methods.isTranslationStale = function (locale) {
  const meta = this.translations?.get?.(locale);
  if (!meta || !meta.lastTranslatedAt) return true;
  return this.updatedAt > meta.lastTranslatedAt || !!meta.needUpdate;
};

export default mongoose.model('PageContent', PageContentSchema);
