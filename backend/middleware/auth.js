const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const asyncHandler = require('../utils/asyncHandler');

const COOKIE_NAME = 'sccool_admin_session';

const requireAdmin = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) return res.status(401).json({ message: 'Please log in.' });

  let payload;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] });
  } catch {
    return res.status(401).json({ message: 'Session expired. Please log in again.' });
  }

  const admin = await Admin.findById(payload.sub).select('_id email role');
  if (!admin) return res.status(401).json({ message: 'Admin account not found.' });
  req.admin = admin;
  next();
});

function setSessionCookie(res, token) {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 8 * 60 * 60 * 1000
  });
}

function clearSessionCookie(res) {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/'
  });
}

module.exports = { requireAdmin, setSessionCookie, clearSessionCookie };
