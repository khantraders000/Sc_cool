import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import StatCounter from './StatCounter';

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false });

export default function Hero() {
  useEffect(() => {
    (async () => {
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;
      gsap.set('.hero-reveal', { opacity: 0, y: 22 });
      gsap.to('.hero-reveal', {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.15,
      });
    })();
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-16 overflow-hidden blueprint-grid">
      <ThreeScene />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-bg/40 to-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full grid md:grid-cols-2 gap-10 items-center py-16">
        <div>
          <div className="hero-reveal inline-flex items-center gap-2 text-xs tracking-wide text-cyan border border-cyan/30 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            technicians available in Mumbai right now
          </div>

          <h1 className="hero-reveal font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
            Cooling you can rely on,<br className="hidden sm:block" />
            <span className="text-cyan">every single time.</span>
          </h1>

          <p className="hero-reveal mt-6 text-inkdim text-lg max-w-md leading-relaxed">
            AC repair, installation, gas refill and AMC — a certified technician at your door within 60 minutes. Genuine parts, transparent pricing, 90-day warranty.
          </p>

          <div className="hero-reveal mt-8 flex flex-wrap items-center gap-4">
            <a href="#book" className="btn-copper font-semibold px-6 py-3.5 rounded-sm focus-ring inline-flex items-center gap-2">
              Book Free Inspection
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#0F1B24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="tel:+919793997768" className="border border-cyan/30 text-ink font-medium px-6 py-3.5 rounded-sm hover:border-cyan/60 transition-colors focus-ring">
              Call Us
            </a>
          </div>

          <div className="hero-reveal mt-12 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <div className="font-display text-3xl font-semibold">
                <StatCounter target={12400} />+
              </div>
              <div className="text-xs text-inkdim mt-1">Installations</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold">
                <StatCounter target={49} decimal={10} />
              </div>
              <div className="text-xs text-inkdim mt-1">Google Rating</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold">
                <StatCounter target={60} />
              </div>
              <div className="text-xs text-inkdim mt-1">Min Response</div>
            </div>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>

      <div className="absolute bottom-6 inset-x-0 flex justify-center">
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="opacity-50 animate-bounce">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="#4FD1D9" strokeWidth="1.4" />
          <circle cx="10" cy="8" r="2" fill="#4FD1D9" />
        </svg>
      </div>
    </section>
  );
}
