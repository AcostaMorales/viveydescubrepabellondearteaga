// routes/assetRoutes.js
import { Router } from 'express';
import multer from 'multer';
import { uploadToFolder, deleteByPublicId } from '../services/cloudinaryService.js';
import Asset from '../models/Asset.js';

const router = Router();
const upload = multer({ dest: 'uploads/' });

// POST /api/assets/upload  (form-data: file, title, rutaFolder)
router.post('/upload', upload.single('file'), async (req, res, next) => {
  try {
    const { file } = req;
    const { title, rutaFolder } = req.body;

    if (!file || !title || !rutaFolder) {
      return res.status(400).json({ message: 'file, title y rutaFolder son requeridos' });
    }

    const result = await uploadToFolder(file.path, rutaFolder, 'auto');

    const asset = await Asset.create({
      title,
      url: result.secure_url,
      rutaFolder,
      publicId: result.public_id,
      resourceType: result.resource_type,
    });

    res.status(201).json({ message: 'OK', asset });
  } catch (err) { next(err); }
});

// GET /api/assets?folder=guia-turistica-pa/produccion/navigation/imagenes
router.get('/', async (req, res, next) => {
  try {
    const { folder } = req.query;
    const filter = folder ? { rutaFolder: new RegExp(`^${folder}`) } : {};
    const items = await Asset.find(filter).sort({ createdAt: -1 }).limit(200);
    res.json(items);
  } catch (err) { next(err); }
});

// DELETE /api/assets/:id (borra en Cloudinary y en BD)
router.delete('/:id', async (req, res, next) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (!asset) return res.status(404).json({ message: 'No encontrado' });

    await deleteByPublicId(asset.publicId, asset.resourceType || 'image');
    await asset.deleteOne();

    res.json({ message: 'Eliminado' });
  } catch (err) { next(err); }
});

export default router;
