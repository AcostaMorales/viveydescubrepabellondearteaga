// routes/navigationCardRoutes.js
import { Router } from 'express';
import NavigationCardController from '../controllers/NavigationCardController.js';
// import requireAdmin from '../middlewares/requireAdmin.js';

const router = Router();

/** Público */
router.get('/navigation-cards', NavigationCardController.listByPage);

/** Admin */
router.post('/admin/navigation-cards', /* requireAdmin, */ NavigationCardController.create);
router.put('/admin/navigation-cards/:id', /* requireAdmin, */ NavigationCardController.update);
router.delete('/admin/navigation-cards/:id', /* requireAdmin, */ NavigationCardController.remove);
router.get('/admin/navigation-cards', /* requireAdmin, */ NavigationCardController.listAdmin);

export default router;
