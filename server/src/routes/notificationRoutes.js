// routes/notificationRoutes.js
import { Router } from 'express';
import NotificationController from '../controllers/NotificationController.js';

const router = Router();

/** Rutas públicas para notificaciones */
router.get('/', NotificationController.listPublic);
router.get('/has-new', NotificationController.hasNew);

export default router;
