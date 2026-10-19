
const router = require('express').Router();
const { body, param } = require('express-validator');
const controller = require('../controllers/reviewController');
const validate = require('../middleware/validate');
const { requireAdmin } = require('../middleware/auth');

// Required: first name
const nameRule = (field) =>
  body(field)
    .isString()
    .trim()
    .isLength({ min: 1, max: 60 })
    .withMessage(`${field} must be 1–60 characters.`);

// Optional: last name (empty string is allowed)
const optionalLastNameRule = body('lastName')
  .optional({ values: 'falsy' })
  .isString()
  .trim()
  .isLength({ max: 60 })
  .withMessage('Last name must not exceed 60 characters.');

// Required: review date
const dateRule = body('reviewDate')
  .isISO8601()
  .withMessage('Enter a valid review date.');

// Required: rating
const ratingRule = body('rating')
  .isInt({ min: 1, max: 5 })
  .withMessage('Rating must be an integer from 1 to 5.')
  .toInt();

// Optional: review text (empty string is allowed)
const optionalReviewTextRule = body('reviewText')
  .optional({ values: 'falsy' })
  .isString()
  .trim()
  .isLength({ min: 3, max: 3000 })
  .withMessage('Review text must be 3–3000 characters when provided.');

// Required: Google review URL
const urlRule = body('googleReviewUrl')
  .isURL({
    protocols: ['http', 'https'],
    require_protocol: true,
  })
  .withMessage('Enter a valid Google review URL.')
  .custom((value) => {
    const host = new URL(value).hostname.toLowerCase();

    const allowed = [
      'google.com',
      'www.google.com',
      'maps.google.com',
      'g.page',
      'maps.app.goo.gl',
      'goo.gl',
      'search.google.com',
    ];

    if (
      !allowed.some(
        (domain) => host === domain || host.endsWith('.' + domain)
      )
    ) {
      throw new Error('Use a Google Maps/Google review URL.');
    }

    return true;
  });

const optionalBoolean = (field) =>
  body(field)
    .optional()
    .isBoolean()
    .withMessage(`${field} must be true or false.`)
    .toBoolean();

const optionalOrder = body('displayOrder')
  .optional()
  .isInt({ min: 0, max: 100000 })
  .toInt();

// CREATE review
const createRules = [
  nameRule('firstName'),
  optionalLastNameRule,
  dateRule,
  ratingRule,
  optionalReviewTextRule,
  urlRule,
  optionalBoolean('published'),
  optionalBoolean('featured'),
  optionalOrder,
];

// UPDATE review
const updateRules = [
  nameRule('firstName').optional(),
  optionalLastNameRule,
  dateRule.optional(),
  ratingRule.optional(),
  optionalReviewTextRule,
  urlRule.optional(),
  optionalBoolean('published'),
  optionalBoolean('featured'),
  optionalOrder,
];

router.get('/', controller.publicList);
router.get('/admin/all', requireAdmin, controller.adminList);

router.post('/admin', requireAdmin, createRules, validate, controller.create);

router.patch(
  '/admin/:id',
  requireAdmin,
  param('id').isMongoId(),
  ...updateRules,
  validate,
  controller.update
);

router.delete(
  '/admin/:id',
  requireAdmin,
  param('id').isMongoId(),
  validate,
  controller.remove
);

module.exports = router;
