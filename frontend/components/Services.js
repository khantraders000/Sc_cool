const services = [
  {
    title: 'AC Installation',
    desc: 'Split and window AC — wall mounting, piping, and load-check handled properly, every time.',
    icon: (
      <>
        <path d="M17 3v28M6 9l22 16M28 9L6 25" stroke="#4FD1D9" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17" cy="17" r="4" stroke="#C9843F" strokeWidth="1.6" />
      </>
    ),
  },
  {
    title: 'Repair & Diagnosis',
    desc: 'Weak cooling or a strange noise? A technician reaches you for diagnosis within 60 minutes.',
    icon: (
      <>
        <path d="M6 24l7-14 5 9 4-6 6 11" stroke="#4FD1D9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="8" r="3" stroke="#C9843F" strokeWidth="1.6" />
      </>
    ),
  },
  {
    title: 'Gas Refill',
    desc: 'Refills only after a leak-test — both R32 and R410A refrigerants, gauge-verified pressure.',
    icon: (
      <>
        <rect x="9" y="4" width="16" height="26" rx="3" stroke="#4FD1D9" strokeWidth="1.6" />
        <path d="M14 12h6M14 17h6M14 22h3" stroke="#C9843F" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Annual Maintenance (AMC)',
    desc: 'Four scheduled visits a year — filter cleaning, gas checks, and priority breakdown support.',
    icon: (
      <>
        <path d="M17 4l11 5v8c0 8-5 12-11 13-6-1-11-5-11-13V9l11-5z" stroke="#4FD1D9" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 17l4 4 7-8" stroke="#C9843F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Deep Cleaning',
    desc: 'Jet-spray coil cleaning removes dust and fungus — better airflow and lower electricity bills.',
    icon: (
      <>
        <path d="M17 3v6M9 8l4 4M25 8l-4 4" stroke="#C9843F" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="7" y="14" width="20" height="16" rx="3" stroke="#4FD1D9" strokeWidth="1.6" />
      </>
    ),
  },
  {
    title: 'Commercial AC',
    desc: 'Installation and maintenance contracts for VRF and ducted systems in offices, shops and showrooms.',
    icon: (
      <>
        <rect x="5" y="9" width="24" height="19" rx="2" stroke="#4FD1D9" strokeWidth="1.6" />
        <path d="M5 15h24M12 9v6M22 9v6" stroke="#C9843F" strokeWidth="1.6" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-5 md:px-8 blueprint-grid-fine">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-section max-w-xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">One team for every cooling problem</h2>
          <p className="text-inkdim mt-4">
            From a small gas leak to a brand-new installation — our team handles split, window and commercial AC alike.
          </p>
        </div>

        <div id="services-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="service-card tick-card p-7">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="mb-5">
                {s.icon}
              </svg>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-inkdim leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
