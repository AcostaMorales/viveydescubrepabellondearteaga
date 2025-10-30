// models/Asset.js
import mongoose from 'mongoose';

const AssetSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  url:   { type: String, required: true, trim: true },        // secure_url de Cloudinary
  rutaFolder: { type: String, required: true, trim: true },   // ej: guia-turistica-pa/produccion/navigation/imagenes/2025/10
  // Extras mínimos muy convenientes
  publicId: { type: String, required: true, trim: true },     // para borrar/transformar en Cloudinary
  resourceType: { type: String, enum: ['image', 'video', 'raw'], default: 'image' },
}, { timestamps: true });

AssetSchema.index({ rutaFolder: 1, createdAt: -1 }); // recuperar rápido por carpeta (recientes primero)

export default mongoose.model('Asset', AssetSchema);
