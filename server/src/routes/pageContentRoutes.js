// routes/pageContentRoutes.js
import { Router } from 'express';
import PageContentController from '../controllers/PageContentController.js';
// import requireAdmin from '../middlewares/requireAdmin.js';

const router = Router();

/** Público */
router.get('/page-content/by-navigation', PageContentController.getByNavigationName);
router.get('/page-content/:id', PageContentController.getByIdPublic);

/** Admin – CRUD */
router.post('/admin/page-content', /* requireAdmin, */ PageContentController.create);
router.put('/admin/page-content/:id', /* requireAdmin, */ PageContentController.update);
router.delete('/admin/page-content/:id', /* requireAdmin, */ PageContentController.remove);
router.get('/admin/page-content/one', /* requireAdmin, */ PageContentController.getOneAdmin);

/** Admin – Traducciones (LibreTranslate) */
router.post('/admin/page-content/:id/translate', /* requireAdmin, */ PageContentController.translateById);
router.post('/admin/page-content/translate-by-name', /* requireAdmin, */ PageContentController.translateByName);
router.post('/admin/page-content/:id/translate-missing', /* requireAdmin, */ PageContentController.translateMissing);

export default router;
