const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const asyncHandler = require('../utils/asyncHandler');
const { setSessionCookie, clearSessionCookie } = require('../middleware/auth');

function createToken(admin) {
  return jwt.sign({ role: admin.role }, process.env.JWT_SECRET, {
    subject: admin._id.toString(), expiresIn: process.env.JWT_EXPIRES_IN || '8h', algorithm: 'HS256'
  });
}

exports.setup = asyncHandler(async (req, res) => {
  const { setupKey, email, password } = req.body;
  if (!process.env.ADMIN_SETUP_KEY || setupKey !== process.env.ADMIN_SETUP_KEY) {
    return res.status(403).json({ message: 'Invalid setup key.' });
  }
  if (await Admin.exists({})) return res.status(409).json({ message: 'Initial admin already exists. Signup is disabled.' });
  const normalizedEmail = String(email).trim().toLowerCase();
  const passwordHash = await bcrypt.hash(password, 12);
  const admin = await Admin.create({ email: normalizedEmail, passwordHash });
  setSessionCookie(res, createToken(admin));
  res.status(201).json({ message: 'Initial admin created. Save your credentials securely.', admin: { id: admin._id, email: admin.email } });
});

exports.login = asyncHandler(async (req, res) => {
  const email = String(req.body.email).trim().toLowerCase();
  const admin = await Admin.findOne({ email }).select('+passwordHash');
  if (!admin || !(await bcrypt.compare(req.body.password, admin.passwordHash))) {
    return res.status(401).json({ message: 'Email or password is incorrect.' });
  }
  setSessionCookie(res, createToken(admin));
  res.json({ message: 'Logged in.', admin: { id: admin._id, email: admin.email } });
});

exports.logout = asyncHandler(async (_req, res) => {
  clearSessionCookie(res);
  res.json({ message: 'Logged out.' });
});

exports.me = asyncHandler(async (req, res) => {
  res.json({ admin: { id: req.admin._id, email: req.admin.email, role: req.admin.role } });
});
