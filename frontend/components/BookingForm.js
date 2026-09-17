import { useEffect, useRef, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function BookingForm() {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    location: '',
    service: '',
    date: '',
    notes: '',
  });
  const [coords, setCoords] = useState(null);
  const [geoStatus, setGeoStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const checkRef = useRef(null);

  useEffect(() => {
    if (status === 'success' && checkRef.current) {
      import('gsap').then(({ default: gsap }) => {
        gsap.to(checkRef.current.querySelectorAll('circle, path'), {
          strokeDashoffset: 0,
          duration: 0.9,
          ease: 'power2.out',
          stagger: 0.15,
        });
      });
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setGeoStatus('This browser does not support GPS location.');
      return;
    }
    setGeoStatus('Detecting your location…');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(5);
        const lng = pos.coords.longitude.toFixed(5);
        setCoords({ lat, lng });
        setGeoStatus(`GPS location captured ✓ (${lat}, ${lng}). Please still add your address so the technician can find you easily.`);
      },
      () => {
        setGeoStatus('Could not detect location — please type your address manually.');
      }
    );
  };

  const validate = () => {
    const next = {};
    const phoneDigits = values.phone.replace(/\D/g, '');
    if (!values.name.trim()) next.name = 'Name is required.';
    if (phoneDigits.length !== 10) next.phone = 'Enter a valid 10-digit mobile number.';
    if (!values.location.trim()) next.location = 'Work location is required.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate() || !consent) {
      if (!consent) document.getElementById('f-consent')?.focus();
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          lat: coords?.lat || null,
          lng: coords?.lng || null,
        }),
      });

      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong while sending your booking. Please try again or call us directly.');
    }
  };

const resetForm = () => {
  setValues({ name: '', phone: '', location: '', service: '', date: '', notes: '' });
  setCoords(null);
  setGeoStatus('');
  setConsent(false);
  setStatus('idle');
  // Manual GSAP reset ki zaroorat nahi \u2014 success <svg> conditionally render
  // hota hai, isliye agli baar status 'success' banega to React ek bilkul
  // NAYA element banayega jo already CSS default (stroke-dashoffset: 100)
  // se start hota hai.
};

  return (
    <section id="book" className="relative py-24 md:py-32 px-5 md:px-8 blueprint-grid-fine">
      <div className="max-w-4xl mx-auto">
        <div className="reveal-section text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Book a Free Inspection</h2>
          <p className="text-inkdim mt-4">
            The moment you submit your location, a live map link is sent by email and SMS so your technician can track it in real time.
          </p>
        </div>

        <div className="reveal-section tick-card p-6 sm:p-10">
          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5" noValidate>
              <div className="sm:col-span-1">
                <label htmlFor="f-name" className="block text-sm mb-1.5 text-inkdim">
                  Full Name <span className="text-copper">*</span>
                </label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Ashraf Khan"
                  className="w-full px-4 py-3 rounded-sm text-sm focus-ring"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="f-phone" className="block text-sm mb-1.5 text-inkdim">
                  Mobile Number <span className="text-copper">*</span>
                </label>
                <input
                  id="f-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  value={values.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  placeholder="98765 43210"
                  className="w-full px-4 py-3 rounded-sm text-sm focus-ring"
                />
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="f-location" className="block text-sm mb-1.5 text-inkdim">
                  Work Location / Address <span className="text-copper">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    id="f-location"
                    name="location"
                    type="text"
                    value={values.location}
                    onChange={handleChange}
                    placeholder="Full home/office address, with a landmark"
                    className="w-full px-4 py-3 rounded-sm text-sm focus-ring"
                  />
                  <button
                    type="button"
                    onClick={detectLocation}
                    className="shrink-0 border border-cyan/30 rounded-sm px-3 text-cyan hover:border-cyan/60 transition-colors focus-ring"
                    title="Detect location via GPS"
                    aria-label="Detect location via GPS"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                    </svg>
                  </button>
                </div>
                {geoStatus && <p className="text-xs text-inkdim mt-1" dangerouslySetInnerHTML={{ __html: geoStatus.replace('✓', '<span class="text-success">✓</span>') }} />}
                {errors.location && <p className="text-xs text-red-400 mt-1">{errors.location}</p>}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="f-service" className="block text-sm mb-1.5 text-inkdim">
                  Service Type <span className="text-copper">*</span>
                </label>
                <select
                  id="f-service"
                  name="service"
                  required
                  value={values.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-sm text-sm focus-ring"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>AC Installation</option>
                  <option>Repair / Diagnosis</option>
                  <option>Gas Refill</option>
                  <option>AMC</option>
                  <option>Deep Cleaning</option>
                  <option>Commercial AC</option>
                </select>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="f-date" className="block text-sm mb-1.5 text-inkdim">
                  Preferred Date
                </label>
                <input
                  id="f-date"
                  name="date"
                  type="date"
                  value={values.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-sm text-sm focus-ring"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="f-notes" className="block text-sm mb-1.5 text-inkdim">
                  Briefly describe the problem
                </label>
                <textarea
                  id="f-notes"
                  name="notes"
                  rows="3"
                  value={values.notes}
                  onChange={handleChange}
                  placeholder="e.g. AC isn't cooling properly, making a rattling noise..."
                  className="w-full px-4 py-3 rounded-sm text-sm focus-ring resize-none"
                />
              </div>

              <div className="sm:col-span-2 flex items-start gap-2.5 text-xs text-inkdim">
                <input
                  id="f-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 focus-ring"
                />
                <label htmlFor="f-consent">
                  I confirm the number provided is correct and that I can be contacted by SMS or call.
                </label>
              </div>

              {status === 'error' && <p className="sm:col-span-2 text-sm text-red-400">{errorMsg}</p>}

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-copper w-full sm:w-auto font-semibold px-8 py-3.5 rounded-sm focus-ring inline-flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  <span>{status === 'submitting' ? 'Sending…' : 'Confirm Booking'}</span>
                  {status === 'submitting' && (
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="#0F1B24" strokeWidth="3" strokeOpacity="0.3" />
                      <path d="M21 12a9 9 0 00-9-9" stroke="#0F1B24" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6">
              <svg ref={checkRef} className="success-check mx-auto mb-5" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" stroke="#6FCF97" strokeWidth="2.5" />
                <path d="M20 33l8 8 16-18" stroke="#6FCF97" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="font-display text-2xl font-semibold mb-2">Booking Confirmed!</h3>
              <p className="text-inkdim max-w-sm mx-auto text-sm leading-relaxed">
                An SMS confirmation has been sent to your number, and your live location link has been shared with the assigned
                technician by email and SMS. They’ll call shortly — thank you!
              </p>
              <button onClick={resetForm} className="mt-6 text-sm text-cyan underline underline-offset-4">
                Make another booking
              </button>
            </div>
          )}
        </div>

        <p className="text-xs text-inkdim/70 mt-4 text-center max-w-xl mx-auto leading-relaxed">
          When you submit, the Express backend (see <code>/backend</code>) generates a live Google Maps link from your location and
          sends it by email to the office and by SMS to the assigned technician, so your job can be tracked in real time.
        </p>
      </div>
    </section>
  );
}
