// routes/notificationRoutes.js
import { Router } from 'express';
import NotificationController from '../controllers/NotificationController.js';
// Importa tu middleware real si ya lo tienes
// import requireAdmin from '../middlewares/requireAdmin.js';

const router = Router();

/** Público */
router.get('/notifications', NotificationController.listPublic);
router.get('/notifications/has-new', NotificationController.hasNew);

/** Admin */
router.post('/admin/notifications', /* requireAdmin, */ NotificationController.create);
router.put('/admin/notifications/:id', /* requireAdmin, */ NotificationController.update);
router.delete('/admin/notifications/:id', /* requireAdmin, */ NotificationController.remove);
router.get('/admin/notifications', /* requireAdmin, */ NotificationController.listAdmin);
router.get('/admin/notifications/:id', /* requireAdmin, */ NotificationController.getById);

export default router;
