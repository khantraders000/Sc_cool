const reviews = [
  {
    quote: '"Called on a Sunday evening, a technician arrived first thing Monday. There was a gas leak — it’s running perfectly cold now."',
    name: 'Ritika S., Mumbra',
  },
  {
    quote: '"Had a new split AC installed. The piping work was very clean — no mess left behind at all."',
    name: 'Ankit V., dharavi',
  },
  {
    quote: '"Took an AMC last year, and they called for the pre-summer service well ahead of time. Very professional team."',
    name: 'Meera J., Mahim',
  },
  {
    quote: '"We have an AMC contract for 3 shop ACs with them — pricing stays completely clear, never any extra charges."',
    name: 'Sanjay T., Khar west',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-bgDeep border-y border-cyan/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="reveal-section max-w-xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Trusted across Mumbai</h2>
          <p className="text-inkdim mt-4">A few of our 1,800+ reviews — real customers, real experiences.</p>
        </div>
      </div>

      <div className="reveal-section overflow-x-auto no-scrollbar px-5 md:px-8">
        <div className="flex gap-5 max-w-7xl mx-auto pb-2" style={{ width: 'max-content' }}>
          {reviews.map((r) => (
            <div key={r.name} className="tick-card p-6 w-72 shrink-0">
              <div className="text-copper text-sm mb-3">★★★★★</div>
              <p className="text-sm text-inkdim leading-relaxed">{r.quote}</p>
              <p className="text-xs text-inkdim/70 mt-4">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
