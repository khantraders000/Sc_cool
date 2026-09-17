const steps = [
  {
    n: 1,
    title: 'Share Your Location',
    desc: 'Fill in your work location and describe the problem below — it takes about two minutes.',
  },
  {
    n: 2,
    title: 'Instant Confirmation',
    desc: 'You get an instant SMS confirmation, and the nearest technician is assigned right away.',
  },
  {
    n: 3,
    title: 'On-site Diagnosis',
    desc: 'The technician inspects the unit and shares a clear price before starting any work.',
  },
  {
    n: 4,
    title: 'Service + Warranty',
    desc: 'Once the job is done, you get a 90-day warranty card — a free follow-up visit if the issue repeats.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 px-5 md:px-8 bg-bgDeep border-y border-cyan/10">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-section max-w-xl mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">From booking to cooling</h2>
          <p className="text-inkdim mt-4">Four straightforward steps — no hidden charges, no guesswork.</p>
        </div>

        <div className="process-steps grid md:grid-cols-4 gap-8 md:gap-4">
          {steps.map((s) => (
            <div key={s.n} className="process-step dim-line md:pt-8 relative">
              <div className="relative z-10 w-9 h-9 rounded-full bg-bgDeep border border-cyan flex items-center justify-center font-display text-sm text-cyan mb-4">
                {s.n}
              </div>
              <h3 className="font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-inkdim leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
