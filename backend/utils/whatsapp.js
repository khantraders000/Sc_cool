// Meta's own WhatsApp Cloud API (graph.facebook.com) instead of Twilio.
// Free tier: 1000 conversations/month, no credit card needed for testing.
// Requires Node.js 18+ for the built-in `fetch`.

const GRAPH_API_VERSION = 'v21.0';

function apiUrl() {
  return `https://graph.facebook.com/${GRAPH_API_VERSION}/${process.env.META_PHONE_NUMBER_ID}/messages`;
}

// Meta expects the number WITHOUT a leading "+", e.g. "919876543210".
function normalizeIndianNumber(phone) {
  const digits = String(phone).replace(/\D/g, '');
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

async function sendTemplateMessage(to, templateName, bodyParams) {
  const res = await fetch(apiUrl(), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.META_WHATSAPP_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: normalizeIndianNumber(to),
      type: 'template',
      template: {
        name: templateName,   // ← FIX: hardcoded "hello_world" hata diya
        language: { code: 'en_US' },
        components: [
          {
            type: 'body',
            parameters: bodyParams.map((text) => ({ type: 'text', text: String(text) })),
          },
        ],
      },
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error?.message || `WhatsApp send failed (${res.status})`);
  }
  return data;
}

async function sendCustomerWhatsApp(booking) {
  await sendTemplateMessage(
    booking.phone,
    'appointment_confirmation_1', // must exactly match the approved template name
    [booking.service || 'AC service']
  );
}

async function sendTechnicianWhatsApp(booking, mapsLink) {
  await sendTemplateMessage(
    process.env.TECHNICIAN_PHONE,
    'technician_alert', // ← apna exact template naam yahan daalo
    [
      booking.name,           // {{1}} → Hi {{1}}
      booking.phone,          // {{2}} → phone number {{2}}
      booking.service || 'AC service', // {{3}} → Service: {{3}}
      mapsLink,                // {{4}} → link: {{4}}
    ]
  );
}

module.exports = { sendCustomerWhatsApp, sendTechnicianWhatsApp };