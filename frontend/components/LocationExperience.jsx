import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { gsap } from "gsap";
import Lenis from "lenis";
import { locationslinks } from "../data/locationslinks";
import BrandServices from "./BrandServices";
import GoogleReviewsCarousel from "./GoogleReviewsCarousel";

const services = [
  { label: "AC Repair", href: "/ac-repair" },
  { label: "AC Servicing", href: "/ac-service" },
  { label: "AC Installation", href: "/ac-installation" },
  { label: "AC Maintenance", href: "/ac-maintenance" },
];

export default function LocationExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const locationIndex = Math.floor(activeIndex / 4);
  const keywordIndex = activeIndex % 4;
  const animatedWord = useRef(null);

  // Lenis is progressive enhancement; normal scrolling remains if it cannot initialize.
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Only the hero presentation changes. Every location + all four keywords are
  // rendered below in ordinary HTML and are not injected by this effect.
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = window.setInterval(
      () => {
        setActiveIndex((current) => (current + 1) % (locationslinks.length * 4));
      },
      reduceMotion ? 4200 : 2300,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!animatedWord.current) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;
    gsap.fromTo(
      animatedWord.current,
      { yPercent: 110, autoAlpha: 0, filter: "blur(4px)" },
      {
        yPercent: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 0.62,
        ease: "power3.out",
        overwrite: true,
      },
    );
  }, [locationIndex, keywordIndex]);

  const activeLocation = locationslinks[locationIndex];
  const activeKeyword = activeLocation.keywords[keywordIndex];

  return (
    <>
      <Head>
        <title>
          AC Repair & Servicing Across 58 Mumbai Areas | SC Cool Service
        </title>
        <meta
          name="description"
          content="Explore AC repair, servicing, installation and maintenance information for 58 Mumbai and MMR service areas. Contact SC Cool Service to confirm availability for your address."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#200E01" />
      </Head>

      <main className="min-h-screen overflow-hidden bg-sc-ink text-white">
        <header className="site-nav">
          <Link href="/" className="brand" aria-label="SC Cool Service home">
            SC <span>COOL</span> SERVICE
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 md:flex"
          >
            <Link href="/">Home</Link>
            <a href="#services">Services</a>
            <a href="#areas">Service Areas</a>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-2">
            <a className="nav-call" href="tel:+919793997768">
              Call Now
            </a>
            <a
              className="nav-whatsapp"
              href="https://wa.me/919793997768"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </header>

        <section className="hero-shell">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> AC Repair & Service in Mumbai
            </p>
            <h1>
              Reliable AC Services
              <br />
              Across <span className="cyan-text">Mumbai</span>
            </h1>
            <p className="hero-description">
              Repair, servicing, installation and maintenance for homes and
              businesses. Tell us your AC issue and confirm service availability
              for your exact address.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+919793997768">
                Call Now <span aria-hidden="true">↗</span>
              </a>
              <a
                className="secondary-button"
                href="https://wa.me/919793997768"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="trust-row">
              <span>✓ Experienced technicians</span>
              <span>✓ Clear work scope</span>
              <span>✓ Service by appointment</span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="ac-symbol">
              <span>❄</span>
            </div>
            <div className="visual-caption">
              COOLING COMFORT
              <br />
              <strong>DONE RIGHT</strong>
            </div>
          </div>
        </section>

        <section
          className="animated-section"
          aria-label="Animated service keyword preview"
        >
          <div className="section-kicker">
            <span>01</span> KEYWORD SLIDE-UP PREVIEW
          </div>
          <div className="animated-panel">
            <div className="animated-label">
              Currently showing · {activeLocation.name}
            </div>
            <div className="word-window" aria-live="off">
              <div
                key={`${activeLocation.slug}-${keywordIndex}`}
                ref={animatedWord}
                className="animated-keyword"
              >
                {activeKeyword}
              </div>
            </div>
            <div className="keyword-progress" aria-hidden="true">
              <span
                style={{
                  width: `${((locationIndex * 4 + keywordIndex + 1) / (locationslinks.length * 4)) * 100}%`,
                }}
              />
            </div>
            <p className="animation-note">
              The animation is decorative. All 58 location groups and all 232
              keyword phrases are also rendered in the HTML below.
            </p>
          </div>
        </section>

        <section id="services" className="content-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">
                <span>02</span> WHAT WE DO
              </p>
              <h2>AC services for your needs</h2>
            </div>
            <p>
              Describe the issue and confirm the exact work scope before
              booking.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, i) => (
              <article className="service-card" key={service.label}>
                <div className="service-number">0{i + 1}</div>
                <h3>{service.label}</h3>
                <p>
                  {
                    [
                      "Troubleshooting for cooling, noise, leaks and other AC faults.",
                      "Routine cleaning and checks based on your unit and agreed scope.",
                      "Installation planning for the unit, site and fitting requirements.",
                      "Maintenance checks to help plan care for your AC system.",
                    ][i]
                  }
                </p>
                <a href="#areas">
                  Explore locations <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="areas" className="content-section locations-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">
                <span>03</span> MUMBAI & MMR COVERAGE
              </p>
              <h2>Explore all 58 service areas</h2>
            </div>
            <p>
              Choose a location and service to open the relevant page. Please
              confirm availability for your exact address.
            </p>
          </div>
          <p className="seo-intro">
            Choose a service and locality below. Every link points to the
            corresponding location URL and is rendered in the initial HTML
            response.
          </p>
          <div
            className="location-table-wrap"
            role="region"
            aria-label="AC services by location"
            tabIndex="0"
          >
            <table className="location-table">
              <thead>
                <tr>
                  <th scope="col">Location</th>
                  <th scope="col">AC Repair</th>
                  <th scope="col">AC Servicing</th>
                  <th scope="col">AC Installation</th>
                  <th scope="col">AC Maintenance</th>
                  <th scope="col">AC Service Near Me</th>
                </tr>
              </thead>
              <tbody>
                {locationslinks.map((location) => (
                  <tr key={location.slug}>
                    <th scope="row">
                      <span className="table-location-name">
                        {location.name}
                      </span>
                      <span className="table-region">{location.region}</span>
                    </th>
                    <td>
                      <Link href={`/ac-repair/${location.slug}`}>
                        AC Repair in {location.name}
                        <span aria-hidden="true"> ↗</span>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/ac-service/${location.slug}`}>
                        AC Servicing in {location.name}
                        <span aria-hidden="true"> ↗</span>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/ac-installation/${location.slug}`}>
                        AC Installation in {location.name}
                        <span aria-hidden="true"> ↗</span>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/ac-maintenance/${location.slug}`}>
                        AC Maintenance in {location.name}
                        <span aria-hidden="true"> ↗</span>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/ac-service-near/${location.slug}`}>
                        AC Service Near {location.name}
                        <span aria-hidden="true"> ↗</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-note">
            The table includes {locationslinks.length} locations and five
            service-related link columns. Confirm that each destination route
            exists on your website before deployment.
          </p>
        </section>

        <BrandServices />

        <GoogleReviewsCarousel />

        <footer className="site-footer">
          <Link href="/" className="brand">
            SC <span>COOL</span> SERVICE
          </Link>
          <p>
            AC repair, servicing, installation and maintenance enquiries across
            Mumbai and selected MMR areas.
          </p>
          <div>
            <a href="tel:+919793997768">+91 97939 97768</a>
            <span> · </span>
            <a
              href="https://wa.me/919793997768"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <small>
            Service availability, scope and charges are confirmed before
            booking.
          </small>
        </footer>
      </main>
    </>
  );
}
