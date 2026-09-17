const express = require('express');
const { buildMapsLink } = require('../utils/maps');
const { sendBookingEmail } = require('../utils/email');
const { sendCustomerWhatsApp, sendTechnicianWhatsApp } = require('../utils/whatsapp');

const router = express.Router();

router.post('/book', async (req, res) => {
  const { name, phone, location, service, date, notes, lat, lng } = req.body || {};

  if (!name || !phone || !location) {
    return res.status(400).json({ ok: false, error: 'name, phone and location are required.' });
  }

  const phoneDigits = String(phone).replace(/\D/g, '');
  if (phoneDigits.length !== 10) {
    return res.status(400).json({ ok: false, error: 'phone must be a valid 10-digit number.' });
  }

  const booking = { name, phone, location, service, date, notes };
  const mapsLink = buildMapsLink({ lat, lng, address: location });

  const labels = ['email', 'technician-whatsapp', 'customer-whatsapp'];
  const results = await Promise.allSettled([
    sendBookingEmail(booking, mapsLink),
    sendTechnicianWhatsApp(booking, mapsLink),
    sendCustomerWhatsApp(booking),
  ]);

  results.forEach((r, i) => {
    if (r.status === 'fulfilled') console.log(`[booking] ${labels[i]} accepted`);
  });

  const failures = results
    .map((r, i) => ({ r, label: labels[i] }))
    .filter((x) => x.r.status === 'rejected');

  if (failures.length) {
    failures.forEach((f) => console.error(`[booking] ${f.label} failed:`, f.r.reason?.message || f.r.reason));
  }

  return res.status(200).json({
    ok: true,
    mapsLink,
    warnings: failures.map((f) => f.label),
  });
});

module.exports = router;