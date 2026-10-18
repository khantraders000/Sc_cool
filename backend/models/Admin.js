const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true, maxlength: 254 },
  passwordHash: { type: String, required: true, select: false },
  role: { type: String, enum: ['admin'], default: 'admin' }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Admin', adminSchema);
