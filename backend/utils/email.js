const { Resend } = require('resend');

function getClient() {
  return new Resend(process.env.RESEND_API_KEY);
}

/**
 * Sends the booking (with the live Maps link) over Resend's HTTPS API
 * instead of SMTP. Cloud hosts like Render block outbound SMTP ports
 * (465/587) to prevent spam, which is why the Nodemailer version timed
 * out in production while working fine locally. HTTPS (443) is never
 * blocked.
 */
async function sendBookingEmail(booking, mapsLink) {
  const resend = getClient();
  const { name, phone, location, service, date, notes } = booking;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 520px;">
      <h2 style="margin-bottom: 4px;">New AC Service Booking</h2>
      <p style="color:#555; margin-top:0;">CoolCircuit AC Services</p>
      <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding:6px 0; color:#888;">Customer</td><td style="padding:6px 0;"><strong>${name}</strong></td></tr>
        <tr><td style="padding:6px 0; color:#888;">Phone</td><td style="padding:6px 0;">${phone}</td></tr>
        <tr><td style="padding:6px 0; color:#888;">Service</td><td style="padding:6px 0;">${service || 'Not specified'}</td></tr>
        <tr><td style="padding:6px 0; color:#888;">Preferred date</td><td style="padding:6px 0;">${date || 'Flexible'}</td></tr>
        <tr><td style="padding:6px 0; color:#888;">Address</td><td style="padding:6px 0;">${location}</td></tr>
        <tr><td style="padding:6px 0; color:#888;">Notes</td><td style="padding:6px 0;">${notes || '\u2014'}</td></tr>
      </table>
      <p style="margin-top: 20px;">
        <a href="${mapsLink}" style="background:#C9843F; color:#0F1B24; padding:12px 20px; text-decoration:none; border-radius:4px; font-weight:bold;">
          Open live location in Google Maps
        </a>
      </p>
      <p style="color:#999; font-size:12px; margin-top: 24px;">This booking was submitted through the CoolCircuit website booking form.</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: process.env.BUSINESS_EMAIL,
    subject: `New booking: ${name} \u2014 ${service || 'AC Service'}`,
    html,
  });

  if (error) {
    throw new Error(error.message || 'Resend failed to send the email');
  }
}

module.exports = { sendBookingEmail };