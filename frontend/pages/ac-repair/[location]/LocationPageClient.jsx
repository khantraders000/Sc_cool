"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: "01", title: "AC Repair & Diagnosis", text: "Cooling issues, water leakage, unusual noise or repeated breakdowns checked by a trained technician." },
  { icon: "02", title: "AC Installation", text: "Professional split and window AC installation with careful mounting, piping and testing." },
  { icon: "03", title: "Gas Refill & Leak Check", text: "Refrigerant work is carried out after checking the system for leaks and pressure issues." },
  { icon: "04", title: "Deep Cleaning", text: "Indoor unit, filters and coils cleaned to improve airflow and everyday cooling performance." },
  { icon: "05", title: "AMC & Maintenance", text: "Planned maintenance for homes, shops and offices to reduce avoidable breakdowns." },
  { icon: "06", title: "Commercial AC", text: "Support for offices, shops and commercial systems, including VRF and ducted AC requirements." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function LocationPageClient({ location }) {
  const root = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-line").forEach((el) => {
        gsap.fromTo(el, { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });
    }, root);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  const whatsapp = "https://wa.me/919793997768";

  return (
    <main ref={root} className="min-h-screen overflow-hidden bg-[#f7f7f3] text-[#111]">
      <section className="relative min-h-[88vh] bg-[#0b0b0b] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,.12),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,.07),transparent_25%)]" />
        <div className="absolute inset-0 opacity-[.06] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:54px_54px]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <Link href="/" className="text-lg font-semibold tracking-tight">SC Cool<span className="text-white/40">.</span></Link>
          <div className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/#services" className="transition hover:text-white">Services</Link>
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/#booking" className="transition hover:text-white">Contact</Link>
          </div>
          <a href="tel:+919793997768" className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black">Call Now</a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-xs tracking-[.18em] text-white/65 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> Serving {location.name}, Mumbai
            </div>
            <motion.h1 initial="hidden" animate="show" variants={fadeUp} className="max-w-5xl text-5xl font-semibold leading-[.96] tracking-[-.045em] sm:text-6xl lg:text-[88px]">
              AC service in <span className="text-white/45">{location.name}</span> that feels effortless.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .7 }} className="mt-8 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
              SC Cool Service provides AC repair, installation, gas refill, deep cleaning and maintenance support for homes, shops and offices around {location.name}.
            </motion.p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/#booking" className="rounded-full bg-white px-6 py-3.5 text-center text-sm font-medium text-black transition hover:scale-[1.02]">Book Free Inspection</Link>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-6 py-3.5 text-center text-sm font-medium text-white transition hover:bg-white/10">WhatsApp Technician</a>
            </div>
          </div>

          <div className="relative lg:pb-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[.055] p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-start justify-between">
                <span className="text-xs uppercase tracking-[.2em] text-white/40">Local service</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">{location.region}</span>
              </div>
              <div className="mt-12 text-6xl font-semibold tracking-[-.05em]">60<span className="text-3xl text-white/35"> min*</span></div>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">Typical response target in supported areas. Actual arrival depends on technician availability and traffic.</p>
              <div className="mt-8 h-px bg-white/10" />
              <div className="mt-6 grid grid-cols-2 gap-5 text-sm">
                <div><div className="text-white/35">Service</div><div className="mt-1">7 AM – 10 PM</div></div>
                <div><div className="text-white/35">Warranty</div><div className="mt-1">90 days*</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl reveal-line">
          <p className="text-xs font-medium uppercase tracking-[.2em] text-black/40">What we handle</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">One team for every cooling problem.</h2>
          <p className="mt-5 leading-7 text-black/55">From a small cooling issue to a complete installation, our service is built around clear diagnosis and careful workmanship.</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.article key={service.title} whileHover={{ y: -4 }} transition={{ duration: .25 }} className="bg-[#f7f7f3] p-7 sm:p-8">
              <div className="flex items-center justify-between"><span className="text-xs text-black/35">{service.icon}</span><span className="h-2 w-2 rounded-full bg-black/70" /></div>
              <h3 className="mt-12 text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/50">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
            <div className="reveal-line"><p className="text-xs uppercase tracking-[.2em] text-white/35">Why SC Cool</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Professional service, without the usual hassle.</h2></div>
            <div className="grid gap-10 sm:grid-cols-2">
              {["Transparent estimates", "Trained technicians", "Genuine parts", "90-day service warranty"].map((item, i) => (
                <div key={item} className="reveal-line border-t border-white/10 pt-5"><span className="text-xs text-white/30">0{i + 1}</span><h3 className="mt-7 text-lg font-medium">{item}</h3><p className="mt-2 text-sm leading-6 text-white/45">A straightforward service experience with clear communication before work begins.</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div><p className="text-xs uppercase tracking-[.2em] text-black/35">How it works</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">From booking to cooling.</h2></div>
          <div className="space-y-0">
            {["Share your location and AC problem", "Get confirmation and technician assignment", "Technician diagnoses and shares the estimate", "Approve the work and receive service warranty"].map((step, i) => (
              <div key={step} className="reveal-line flex gap-6 border-t border-black/10 py-6"><span className="text-xs text-black/35">0{i + 1}</span><p className="text-lg font-medium tracking-tight">{step}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="bg-[#e9e9e3]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="rounded-[32px] bg-[#0b0b0b] p-7 text-white sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div><p className="text-xs uppercase tracking-[.2em] text-white/35">Need a technician?</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-.045em] sm:text-6xl">Book your {location.name} AC service.</h2><p className="mt-5 max-w-xl leading-7 text-white/50">Call or WhatsApp SC Cool Service with your location and AC problem. We’ll help you with the next step.</p></div>
              <div className="flex flex-col gap-3"><a href="tel:+919793997768" className="rounded-full bg-white px-6 py-4 text-center text-sm font-medium text-black">Call +91 97939 97768</a><a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-medium">WhatsApp Us</a></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f7f7f3] px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between"><Link href="/" className="font-semibold text-black">SC Cool Service</Link><span>AC repair & installation in {location.name}, Mumbai</span></div>
      </footer>
    </main>
  );
}
