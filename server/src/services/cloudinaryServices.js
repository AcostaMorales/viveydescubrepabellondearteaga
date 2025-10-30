// services/cloudinaryService.js
import cloudinary from '../config/cloudinary.js';

export async function uploadToFolder(filePath, rutaFolder, resourceType = 'auto') {
  const res = await cloudinary.uploader.upload(filePath, {
    resource_type: resourceType,  // 'image' | 'video' | 'raw' | 'auto'
    folder: rutaFolder,           // ¡tu carpeta exacta!
    use_filename: true,
    unique_filename: true,
    overwrite: true,
  });
  return res; // trae secure_url, public_id, resource_type, etc.
}

export async function deleteByPublicId(publicId, resourceType = 'image') {
  return cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
}

