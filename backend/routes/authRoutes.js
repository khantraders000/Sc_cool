const router = require('express').Router();
const { body } = require('express-validator');
const controller = require('../controllers/authController');
const validate = require('../middleware/validate');
const { requireAdmin } = require('../middleware/auth');
const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: 'draft-7', legacyHeaders: false, message: { message: 'Too many authentication attempts. Try again later.' } });
const emailRule = body('email').isEmail().withMessage('Enter a valid email.').normalizeEmail().isLength({ max: 254 });
const passwordRule = body('password').isString().isLength({ min: 12, max: 128 }).withMessage('Password must be 12–128 characters.');

router.post('/setup', authLimiter, [
  body('setupKey').isString().isLength({ min: 20, max: 256 }), emailRule, passwordRule
], validate, controller.setup);
router.post('/login', authLimiter, [emailRule, body('password').isString().isLength({ min: 1, max: 128 })], validate, controller.login);
router.post('/logout', controller.logout);
router.get('/me', requireAdmin, controller.me);
module.exports = router;
