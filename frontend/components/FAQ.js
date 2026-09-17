import { useState } from 'react';

const faqs = [
  {
    q: 'How quickly does a technician arrive?',
    a: 'In most areas, a technician reaches you within 60 minutes. During peak summer season this can extend to about 90 minutes.',
  },
  {
    q: 'How is pricing decided?',
    a: 'After diagnosis, the technician provides a written estimate. Work only begins once you approve it — the visiting charge is adjusted into the final bill.',
  },
  {
    q: 'What does the warranty cover?',
    a: 'Repairs and gas refills come with a 90-day service warranty — if the same issue returns, the follow-up visit is free.',
  },
  {
    q: 'Do you handle commercial or office AC units?',
    a: 'Yes — we also offer separate AMC contracts for VRF and ducted commercial systems.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 md:py-32 px-5 md:px-8 bg-bgDeep border-t border-cyan/10">
      <div className="max-w-3xl mx-auto">
        <div className="reveal-section mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Frequently asked questions</h2>
        </div>

        <div className="reveal-section divide-y divide-cyan/10 border-y border-cyan/10">
          {faqs.map((item, i) => (
            <div key={item.q} className="py-5">
              <button
                className="w-full flex items-center justify-between text-left gap-4 focus-ring rounded"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium">{item.q}</span>
                <svg
                  className="shrink-0 transition-transform"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="#4FD1D9"
                  strokeWidth="1.6"
                >
                  <path d="M3 7l6 6 6-6" />
                </svg>
              </button>
              <div className="faq-panel" style={{ maxHeight: open === i ? '200px' : '0px' }}>
                <p className="text-sm text-inkdim pt-3 pr-8 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
