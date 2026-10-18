const router = require('express').Router();
const { body, param } = require('express-validator');
const controller = require('../controllers/reviewController');
const validate = require('../middleware/validate');
const { requireAdmin } = require('../middleware/auth');

const nameRule = (field) => body(field).isString().trim().isLength({ min: 1, max: 60 }).withMessage(`${field} must be 1–60 characters.`);
const dateRule = body('reviewDate').isISO8601().withMessage('Enter a valid review date.');
const ratingRule = body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be an integer from 1 to 5.').toInt();
const textRule = body('reviewText').isString().trim().isLength({ min: 3, max: 3000 }).withMessage('Review text must be 3–3000 characters.');
const urlRule = body('googleReviewUrl').isURL({ protocols: ['http', 'https'], require_protocol: true }).withMessage('Enter a valid https Google review URL.').custom(value => {
  const host = new URL(value).hostname.toLowerCase();
  const allowed = ['google.com', 'www.google.com', 'maps.google.com', 'g.page', 'maps.app.goo.gl', 'goo.gl', 'search.google.com'];
  if (!allowed.some(domain => host === domain || host.endsWith('.' + domain))) throw new Error('Use a Google Maps/Google review URL.');
  return true;
});
const optionalBoolean = (field) => body(field).optional().isBoolean().withMessage(`${field} must be true or false.`).toBoolean();
const optionalOrder = body('displayOrder').optional().isInt({ min: 0, max: 100000 }).toInt();
const createRules = [nameRule('firstName'), nameRule('lastName'), dateRule, ratingRule, textRule, urlRule, optionalBoolean('published'), optionalBoolean('featured'), optionalOrder];
const updateRules = [nameRule('firstName').optional(), nameRule('lastName').optional(), dateRule.optional(), ratingRule.optional(), textRule.optional(), urlRule.optional(), optionalBoolean('published'), optionalBoolean('featured'), optionalOrder];

router.get('/', controller.publicList);
router.get('/admin/all', requireAdmin, controller.adminList);
router.post('/admin', requireAdmin, createRules, validate, controller.create);
router.patch('/admin/:id', requireAdmin, param('id').isMongoId(), ...updateRules, validate, controller.update);
router.delete('/admin/:id', requireAdmin, param('id').isMongoId(), validate, controller.remove);
module.exports = router;
