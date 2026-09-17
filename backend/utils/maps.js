/**
 * Builds a Google Maps link for the booking.
 * - If the browser captured GPS coordinates, this points to the exact pin
 *   (best for real-time technician tracking).
 * - Otherwise it falls back to a search link built from the typed address.
 */
function buildMapsLink({ lat, lng, address }) {
  if (lat && lng) {
    return `https://www.google.com/maps?q=${lat},${lng}`;
  }
  const query = encodeURIComponent(address || '');
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

module.exports = { buildMapsLink };
