const nodemailer = require('nodemailer');
require("dotenv")

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/**
 * Emails the full booking (including the live Maps link) to the business /
 * assigned technician's inbox so the job and location are on record.
 */
async function sendBookingEmail(booking, mapsLink) {
  const transporter = getTransporter();
  const { name, phone, location, service, date, notes } = booking;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 520px;">
      <h2 style="margin-bottom: 4px;">New AC Service Booking</h2>
      <p style="color:#555; margin-top:0;">SC-Cool AC Services</p>
      <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding:6px 0; color:#888;">Customer</td><td style="padding:6px 0;"><strong>${name}</strong></td></tr>
        <tr><td style="padding:6px 0; color:#888;">Phone</td><td style="padding:6px 0;">${phone}</td></tr>
        <tr><td style="padding:6px 0; color:#888;">Service</td><td style="padding:6px 0;">${service || 'Not specified'}</td></tr>
        <tr><td style="padding:6px 0; color:#888;">Preferred date</td><td style="padding:6px 0;">${date || 'Flexible'}</td></tr>
        <tr><td style="padding:6px 0; color:#888;">Address</td><td style="padding:6px 0;">${location}</td></tr>
        <tr><td style="padding:6px 0; color:#888;">Notes</td><td style="padding:6px 0;">${notes || '—'}</td></tr>
      </table>
      <p style="margin-top: 20px;">
        <a href="${mapsLink}" style="background:#C9843F; color:#0F1B24; padding:12px 20px; text-decoration:none; border-radius:4px; font-weight:bold;">
          Open live location in Google Maps
        </a>
      </p>
      <p style="color:#999; font-size:12px; margin-top: 24px;">This booking was submitted through the SC-Cool Service website booking form.</p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.BUSINESS_EMAIL,
    subject: `New booking: ${name} — ${service || 'AC Service'}`,
    html,
  });
}

module.exports = { sendBookingEmail };
