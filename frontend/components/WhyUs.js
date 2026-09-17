import StatCounter from './StatCounter';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal-section">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">Not your average local repairman</h2>
          <p className="text-inkdim leading-relaxed mb-8 max-w-md">
            Every technician is background-verified and carries company-issued tools — no shortcuts, no overcharging.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-sm border border-copper/40 flex items-center justify-center text-copper font-display">₹</div>
              <div>
                <h3 className="font-semibold mb-1">Transparent Pricing</h3>
                <p className="text-sm text-inkdim">A written estimate before any work begins — no surprise bills.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-sm border border-copper/40 flex items-center justify-center text-copper font-display">✓</div>
              <div>
                <h3 className="font-semibold mb-1">Verified Technicians</h3>
                <p className="text-sm text-inkdim">ID-verified, trained staff who arrive in uniform with a visible ID card.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-sm border border-copper/40 flex items-center justify-center text-copper font-display">⚙</div>
              <div>
                <h3 className="font-semibold mb-1">Genuine Parts</h3>
                <p className="text-sm text-inkdim">Only brand-authorized spare parts are used, backed by part warranty.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-section tick-card p-8 md:p-10">
          <h3 className="font-display text-xl font-semibold mb-6">Our track record so far</h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="font-display text-4xl font-semibold text-cyan">
                <StatCounter target={98} />%
              </div>
              <div className="text-sm text-inkdim mt-1">First-visit fix rate</div>
            </div>
            <div>
              <div className="font-display text-4xl font-semibold text-cyan">
                <StatCounter target={90} /> days
              </div>
              <div className="text-sm text-inkdim mt-1">Service warranty</div>
            </div>
            <div>
              <div className="font-display text-4xl font-semibold text-cyan">
                <StatCounter target={7} />
              </div>
              <div className="text-sm text-inkdim mt-1">Days open a week</div>
            </div>
            <div>
              <div className="font-display text-4xl font-semibold text-cyan">
                <StatCounter target={1862} />+
              </div>
              <div className="text-sm text-inkdim mt-1">Google reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
