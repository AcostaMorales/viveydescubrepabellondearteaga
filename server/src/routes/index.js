//Aqui juntamos todas las rutas
import {Router} from 'express';
import pushRoutes from './pushRoutes.js';
import assetRoutes from './assetRoutes.js';
import notificationRoutes from './notificationRoutes.js';
import navigationCard from './navigationCardRoutes.js';
import pageContentRoutes from './pageContentRoutes.js';

const router = Router();

//Rutas de notificaciones push
router.use('/push', pushRoutes);

//Rutas de assets (imagenes, videos, etc)
router.use('/assets', assetRoutes);

//Rutas de notificaciones
router.use('/notifications', notificationRoutes);

//Rutas de tarjetas de navegación
router.use('/navigation-cards', navigationCard);

//Rutas de contenidos de páginas
router.use('/page-contents', pageContentRoutes);

export default router;