import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
  res.json({ ok: true, env: process.env.NODE_ENV, version: process.env.npm_package_version || '1.0.0' });
});
export default router;
