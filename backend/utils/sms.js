const twilio = require('twilio');
require("dotenv").config()

function getClient() {
  return twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
}

/**
 * Sends a short confirmation SMS to the customer.
 */
async function sendCustomerSms(booking) {
  const client = getClient();
  await client.messages.create({
    from: process.env.TWILIO_FROM_NUMBER,
    to: normalizeIndianNumber(booking.phone),
    body: `SC-Cool AC Services: Your booking for ${booking.service || 'AC service'} is confirmed. Our technician will call you shortly. Thank you!`,
  });
}

/**
 * Sends the live location link to the assigned technician's phone by SMS,
 * so the job can be tracked in real time even without opening email.
 */
async function sendTechnicianSms(booking, mapsLink) {
  const client = getClient();
  await client.messages.create({
    from: process.env.TWILIO_FROM_NUMBER,
    to: process.env.TECHNICIAN_PHONE,
    body: `New job: ${booking.name} (${booking.phone}) needs ${booking.service || 'AC service'}. Location: ${mapsLink}`,
  });
}

/**
 * Adds the +91 country code if a bare 10-digit Indian number was submitted.
 */
function normalizeIndianNumber(phone) {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return `+91${digits}`;
  if (phone.startsWith('+')) return phone;
  return `+${digits}`;
}

module.exports = { sendCustomerSms, sendTechnicianSms };

/*
  ---------- Alternative: Fast2SMS (India-focused, often simpler to set up) ----------
  Uncomment and use this instead of Twilio if you prefer Fast2SMS.

  const axios = require('axios'); // npm install axios

  async function sendFast2Sms(to, message) {
    await axios.post(
      'https://www.fast2sms.com/dev/bulkV2',
      {
        route: 'q',
        message,
        language: 'english',
        flash: 0,
        numbers: to.replace(/\D/g, '').slice(-10),
      },
      { headers: { authorization: process.env.FAST2SMS_API_KEY } }
    );
  }

  module.exports.sendFast2Sms = sendFast2Sms;
*/
