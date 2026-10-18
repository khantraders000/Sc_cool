const Review = require('../models/Review');
const asyncHandler = require('../utils/asyncHandler');

const safeFields = 'firstName lastName reviewDate rating reviewText googleReviewUrl published featured displayOrder createdAt updatedAt';

exports.publicList = asyncHandler(async (_req, res) => {
  const reviews = await Review.find({ published: true })
    .sort({ reviewDate: -1, createdAt: -1 })
    .limit(10)
    .select('firstName lastName reviewDate rating reviewText googleReviewUrl featured');
  res.set('Cache-Control', 'public, max-age=60, s-maxage=300');
  res.json({ reviews });
});

exports.adminList = asyncHandler(async (_req, res) => {
  const reviews = await Review.find({}).select(safeFields).sort({ reviewDate: -1, createdAt: -1 }).limit(500);
  res.json({ reviews });
});

exports.create = asyncHandler(async (req, res) => {
  const review = await Review.create(req.body);
  res.status(201).json({ message: 'Review created.', review });
});

exports.update = asyncHandler(async (req, res) => {
  const review = await Review.findByIdAndUpdate(req.params.id, { $set: req.body }, {
    new: true, runValidators: true, context: 'query'
  }).select(safeFields);
  if (!review) return res.status(404).json({ message: 'Review not found.' });
  res.json({ message: 'Review updated.', review });
});

exports.remove = asyncHandler(async (req, res) => {
  const review = await Review.findByIdAndDelete(req.params.id);
  if (!review) return res.status(404).json({ message: 'Review not found.' });
  res.json({ message: 'Review deleted.' });
});
