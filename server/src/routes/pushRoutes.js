// routes/pushRoutes.js
import { Router } from 'express';
import SubscriptionController from '../controllers/SubscriptionController.js';
// Si tienes middleware admin, podrías importarlo:
// import requireAdmin from '../middlewares/requireAdmin.js';

const router = Router();

// Público
router.post('/subscribe', SubscriptionController.subscribe);

// Admin (puedes protegerlo con requireAdmin si quieres)
router.post('/broadcast', /* requireAdmin, */ SubscriptionController.broadcast);

// --- Opcionales ---
router.post('/unsubscribe', SubscriptionController.unsubscribe);
router.post('/touch', SubscriptionController.touch);
router.post('/to-device', /* requireAdmin, */ SubscriptionController.sendToDevice);

export default router;
