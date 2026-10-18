const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true, maxlength: 60 },
  lastName: { type: String, required: true, trim: true, maxlength: 60 },
  reviewDate: { type: Date, required: true },
  rating: { type: Number, required: true, min: 1, max: 5, validate: Number.isInteger },
  reviewText: { type: String, required: true, trim: true, minlength: 3, maxlength: 3000 },
  googleReviewUrl: { type: String, required: true, trim: true, maxlength: 2048 },
  published: { type: Boolean, default: true },
  featured: { type: Boolean, default: false },
  displayOrder: { type: Number, default: 0, min: 0, max: 100000 }
}, { timestamps: true, versionKey: false });

reviewSchema.index({ published: 1, reviewDate: -1, createdAt: -1 });
module.exports = mongoose.model('Review', reviewSchema);
