import { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Nav from "components/Nav";
import Footer from "../../components/Footer";
import { locations } from "../../data/locations";
import { locationContent } from "data/locationContent";

const PHONE = "+919793997768";
const DISPLAY_PHONE = "+91 97939 97768";
const WHATSAPP = "https://wa.me/919793997768";
const BOOKING_URL = "/#book";

const services = [
  {
    number: "01",
    title: "AC Repair",
    text: "Diagnosis and repair for cooling problems, water leakage, unusual noise and common AC faults.",
  },
  {
    number: "02",
    title: "AC Installation",
    text: "Professional split and window AC installation with careful mounting, piping and testing.",
  },
  {
    number: "03",
    title: "Gas & Leak Check",
    text: "Refrigerant support with system checks to identify possible leakage or pressure-related issues.",
  },
  {
    number: "04",
    title: "Deep Cleaning",
    text: "Filters, indoor-unit surfaces and coils cleaned to help maintain airflow and cooling performance.",
  },
  {
    number: "05",
    title: "Maintenance",
    text: "Planned AC maintenance for homes, offices, shops and other regular-use spaces.",
  },
  {
    number: "06",
    title: "Commercial AC",
    text: "Support for commercial cooling requirements including larger and specialized AC systems.",
  },
];

const benefits = [
  ["01", "Clear communication", "Know what needs attention before work begins."],
  ["02", "Experienced service", "A practical approach to diagnosis and AC servicing."],
  ["03", "Local coverage", "Service support is focused around your selected service area."],
  ["04", "Easy booking", "Call, WhatsApp or use the online booking option."],
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   STATIC PATHS
========================================================= */

export async function getStaticPaths() {
  return {
    paths: locations.map(({ slug }) => ({
      params: {
        location: slug,
      },
    })),

    fallback: "blocking",
  };
}

/* =========================================================
   STATIC PROPS
========================================================= */

export async function getStaticProps({ params }) {
  const location = locations.find(
    (item) => item.slug === params.location
  );

  if (!location) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      location,
    },

    revalidate: 86400,
  };
}

/* =========================================================
   PAGE
========================================================= */

export default function LocationPage({ location }) {
  const root = useRef(null);

  // const canonicalUrl =
  //   `https://sccool.in/ac-repair/${location.slug}`;
  const canonicalUrl = `https://sccool.in/ac-repair/${location.slug}`;

  const localContent = locationContent[location.slug] || {
    title: `AC Repair & Service in ${location.name}`,
    description: `Contact SC Cool Service for AC repair, installation, cleaning and maintenance in ${location.name}.`,
    intro: `Need AC repair or maintenance in ${location.name}? Contact SC Cool Service to discuss your AC issue and arrange service.`,
    focus:
      "AC repair, installation, cleaning and routine maintenance for home and business requirements.",
    faqs: [],
  };

  const title =
   `${localContent.title} | SC Cool Service`;

  const description = localContent.description;

  /* =======================================================
     STRUCTURED DATA
  ======================================================= */

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",

    name: "SC Cool Service",

    url: canonicalUrl,

    telephone: PHONE,

    areaServed: {
      "@type": "Place",
      name: `${location.name}, Mumbai, Maharashtra, India`,
    },

    serviceType: [
      "AC Repair",
      "AC Installation",
      "AC Gas Refill",
      "AC Deep Cleaning",
      "AC Maintenance",
    ],
  };

  /* =======================================================
     LENIS + GSAP
  ======================================================= */

  useEffect(async() => {
     const { default: gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);

      ScrollTrigger.update();

      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-line").forEach((el) => {
        gsap.fromTo(
          el,

          {
            y: 42,
            opacity: 0,
          },

          {
            y: 0,
            opacity: 1,

            duration: 0.85,

            ease: "power3.out",

            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
          }
        );
      });

      gsap.to(".hero-orb", {
        y: -35,
        x: 20,

        duration: 5,

        repeat: -1,
        yoyo: true,

        ease: "sine.inOut",
      });
    }, root);

    return () => {
      cancelAnimationFrame(rafId);

      lenis.destroy();

      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* ===================================================
          SEO
      =================================================== */}

      <Head>
        <title>{title}</title>

        <meta
          name="description"
          content={description}
        />

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content={title}
        />

        <meta
          property="og:description"
          content={description}
        />

        <meta
          property="og:url"
          content={canonicalUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="SC Cool Service"
        />

        {/* Twitter */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={title}
        />

        <meta
          name="twitter:description"
          content={description}
        />

        {/* JSON-LD */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </Head>

      {/* ===================================================
          EXISTING NAVBAR
      =================================================== */}

      <Nav />

      <main
        ref={root}
        className="min-h-screen overflow-hidden bg-[#f5f9ff] text-slate-950"
      >

        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative isolate overflow-hidden bg-[#03111f] text-white">

          {/* Gradient background */}

          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,.32),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,.28),transparent_28%),radial-gradient(circle_at_70%_85%,rgba(6,182,212,.20),transparent_32%)]
            "
          />

          {/* Grid */}

          <div
            className="
              absolute inset-0
              opacity-[0.08]
              [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
              [background-size:55px_55px]
            "
          />

          {/* Glow Orb */}

          <div
            className="
              hero-orb
              absolute
              -right-20
              top-24
              h-72
              w-72
              rounded-full
              bg-cyan-400/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -left-24
              bottom-0
              h-80
              w-80
              rounded-full
              bg-blue-600/20
              blur-3xl
            "
          />

          {/* Hero container */}

          <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">

            <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_.88fr]">

              {/* LEFT */}

              <div>

                {/* Badge */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    mb-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-cyan-300/20
                    bg-white/[0.07]
                    px-4
                    py-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-[.18em]
                    text-cyan-100
                    backdrop-blur-xl
                  "
                >

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-cyan-300
                      shadow-[0_0_14px_rgba(103,232,249,.9)]
                    "
                  />

                  AC Service • {location.name}, Mumbai

                </motion.div>

                {/* H1 */}

                <motion.h1
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  className="
                    max-w-5xl
                    text-5xl
                    font-semibold
                    leading-[.94]
                    tracking-[-.055em]
                    sm:text-6xl
                    lg:text-[82px]
                  "
                >

                  AC repair that

                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-white
                      via-cyan-100
                      to-sky-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    keeps {location.name} cool.
                  </span>

                </motion.h1>

                {/* Description */}

                <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.16, duration: 0.7 }}
  className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
>
  {localContent.intro}
                </motion.p>

                {/* Buttons */}

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href={BOOKING_URL}
                className="
                group
                rounded-full
                bg-gradient-to-r
                from-[#06b6d4]
                via-[#2563eb]
                to-[#4f46e5]
                px-7
                py-4
                text-center
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_40px_rgba(37,99,235,.30)]
                transition
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_15px_50px_rgba(6,182,212,.40)]
                "
                  >
                    Book AC Service

                    <span className="ml-2 transition group-hover:ml-3">
                      →
                    </span>
                  </Link>

                  <a
                    href={`tel:${PHONE}`}
                    className="
                      rounded-full
                      border
                      border-white/15
                      bg-white/[0.06]
                      px-7
                      py-4
                      text-center
                      text-sm
                      font-semibold
                      text-white
                      backdrop-blur-xl
                      transition
                      hover:border-cyan-300/40
                      hover:bg-white/10
                    "
                  >
                    Call {DISPLAY_PHONE}
                  </a>

                </div>

                {/* Small features */}

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">

                  <span>
                    ✓ Local service coverage
                  </span>

                  <span>
                    ✓ Easy booking
                  </span>

                  <span>
                    ✓ WhatsApp support
                  </span>

                </div>

              </div>

              {/* RIGHT GLASS CARD */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.18,
                  duration: 0.8,
                }}
                className="relative"
              >

                <div
                  className="
                    absolute
                    -inset-1
                    rounded-[34px]
                    bg-gradient-to-r
                    from-cyan-400/30
                    via-blue-500/20
                    to-transparent
                    blur-xl
                  "
                />

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/15
                    bg-white/[0.075]
                    p-6
                    shadow-2xl
                    backdrop-blur-2xl
                    sm:p-8
                  "
                >

                  <div
                    className="
                      absolute
                      -right-16
                      -top-16
                      h-44
                      w-44
                      rounded-full
                      bg-cyan-300/15
                      blur-2xl
                    "
                  />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-xs uppercase tracking-[.2em] text-slate-400">
                          Local service
                        </p>

                        <p className="mt-2 text-xl font-semibold">
                          {location.name}
                        </p>

                      </div>

                      <div
                        className="
                          rounded-2xl
                          border
                          border-cyan-300/20
                          bg-cyan-300/10
                          px-3
                          py-2
                          text-xs
                          text-cyan-100
                          backdrop-blur-xl
                        "
                      >
                        Mumbai
                      </div>

                    </div>

                    <div className="my-9 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                    {/* Service mini cards */}

                    <div className="grid grid-cols-2 gap-3">

                      {[
                        ["01", "Repair"],
                        ["02", "Installation"],
                        ["03", "Cleaning"],
                        ["04", "Maintenance"],
                      ].map(([number, label]) => (

                        <div
                          key={number}
                          className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-black/20
                            p-4
                            backdrop-blur-xl
                          "
                        >

                          <span className="text-xs text-cyan-300/70">
                            {number}
                          </span>

                          <p className="mt-5 text-sm font-medium text-white">
                            AC {label}
                          </p>

                        </div>

                      ))}

                    </div>

                    {/* WhatsApp */}

                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        mt-4
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-emerald-300/20
                        bg-emerald-400/10
                        px-5
                        py-4
                        text-sm
                        font-medium
                        text-emerald-100
                        backdrop-blur-xl
                        transition
                        hover:bg-emerald-400/15
                      "
                    >

                      <span>
                        Talk to SC Cool Service
                      </span>

                      <span>
                        WhatsApp ↗
                      </span>

                    </a>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

          {/* Bottom line */}

          <div className="relative z-10 mx-auto max-w-7xl px-5 pb-7 sm:px-8 lg:px-10">

            <div
              className="
                flex
                items-center
                justify-between
                border-t
                border-white/10
                pt-5
                text-xs
                uppercase
                tracking-[.18em]
                text-slate-500
              "
            >

              <span>
                SC Cool Service
              </span>

              <span>
                Professional AC Services
              </span>

            </div>

          </div>

        </section>

        {/* =================================================
            SERVICES
        ================================================= */}

        <section
          id="services"
          className="
            relative
            bg-[#f5f9ff]
            px-5
            py-24
            sm:px-8
            lg:px-10
            lg:py-32
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-20
              h-72
              w-72
              rounded-full
              bg-sky-200/40
              blur-3xl
            "
          />

          <div className="relative mx-auto max-w-7xl">

            <div className="reveal-line max-w-3xl">

              <span
                className="
                  rounded-full
                  border
                  border-sky-200
                  bg-white
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[.18em]
                  text-sky-700
                  shadow-sm
                "
              >
                Our services
              </span>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-semibold
                  tracking-[-.05em]
                  text-slate-950
                  sm:text-6xl
                "
              >

                One team for every

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-sky-600
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  cooling problem.
                </span>

              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                From routine AC cleaning to complete installation
                and repair, get practical service support in{" "}
                {location.name}.
              </p>

            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {services.map((service, index) => (

                <motion.article
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.55,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-slate-200/80
                    bg-white/75
                    p-7
                    shadow-[0_10px_40px_rgba(15,23,42,.05)]
                    backdrop-blur-xl
                    transition-shadow
                    duration-300
                    hover:shadow-[0_20px_60px_rgba(14,165,233,.13)]
                    sm:p-8
                  "
                >

                  <div
                    className="
                      absolute
                      -right-10
                      -top-10
                      h-28
                      w-28
                      rounded-full
                      bg-sky-100
                      opacity-0
                      blur-2xl
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <span className="text-xs font-bold tracking-[.15em] text-sky-600">
                        {service.number}
                      </span>

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-sky-100
                          bg-sky-50
                          text-sky-600
                        "
                      >
                        ↗
                      </span>

                    </div>

                    <h3 className="mt-12 text-xl font-semibold tracking-tight text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {service.text}
                    </p>

                  </div>

                </motion.article>

              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            LOCAL CONTENT
        ================================================= */}

        <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
          <p className="reveal-line">{localContent.intro}</p>

          <p className="reveal-line">{localContent.focus}</p>
        </div>

          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.78fr_1.22fr]">

            <div className="reveal-line">

              <span className="text-xs font-bold uppercase tracking-[.2em] text-sky-600">
                Local AC service
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">

                AC service in{" "}

                <span
                  className="
                    bg-gradient-to-r
                    from-sky-600
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {location.name}
                </span>

              </h2>

            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">

              <p className="reveal-line">
                SC Cool Service provides AC repair, installation,
                cleaning, gas service and maintenance support in{" "}
                {location.name}, Mumbai.
              </p>

              <p className="reveal-line">
                Whether your AC is not cooling properly, has water
                leakage, needs cleaning or requires installation,
                you can contact the service team with your location
                and AC problem to discuss the next step.
              </p>

              <div
                className="
                  reveal-line
                  rounded-[26px]
                  border
                  border-sky-100
                  bg-gradient-to-br
                  from-sky-50
                  to-cyan-50
                  p-6
                  text-slate-700
                  shadow-sm
                "
              >

                <div className="flex gap-4">

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-sky-600
                      text-white
                      shadow-lg
                      shadow-sky-600/20
                    "
                  >
                    ✓
                  </span>

                  <div>

                    <h3 className="font-semibold text-slate-950">
                      Looking for AC service in {location.name}?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Call or book online and share the issue
                      with the SC Cool Service team.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>
        {/* {Array.isArray(localContent.faqs) &&
        localContent.faqs.length > 0 && (
          <section className="bg-[#f5f9ff] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="mx-auto max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[.2em] text-sky-600">
                Local service questions
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
                AC service FAQs in {location.name}
              </h2>

              <div className="mt-8 space-y-4">
                {localContent.faqs.map((faq, index) => (
                  <article
                    key={`${faq.question || "faq"}-${index}`}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <h3 className="font-semibold text-slate-950">
                      {faq.question}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )} */}

        {/* =================================================
            WHY SC COOL
        ================================================= */}

        <section className="relative overflow-hidden bg-[#03111f] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">

          <div
            className="
              absolute
              -left-20
              top-20
              h-80
              w-80
              rounded-full
              bg-sky-500/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -right-20
              bottom-0
              h-96
              w-96
              rounded-full
              bg-cyan-400/15
              blur-3xl
            "
          />

          <div className="relative mx-auto max-w-7xl">

            <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">

              <div className="reveal-line">

                <span className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">
                  Why SC Cool
                </span>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">

                  Service designed around

                  <span className="block text-cyan-300">
                    your comfort.
                  </span>

                </h2>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {benefits.map(
                  ([number, heading, text]) => (

                    <div
                      key={number}
                      className="
                        reveal-line
                        rounded-[25px]
                        border
                        border-white/10
                        bg-white/[.055]
                        p-7
                        backdrop-blur-xl
                        transition
                        hover:border-cyan-300/25
                        hover:bg-white/[.08]
                      "
                    >

                      <span className="text-xs text-cyan-300/70">
                        {number}
                      </span>

                      <h3 className="mt-8 text-lg font-semibold">
                        {heading}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {text}
                      </p>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            PROCESS
        ================================================= */}

        <section className="bg-[#f5f9ff] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="reveal-line max-w-2xl">

              <span className="text-xs font-bold uppercase tracking-[.2em] text-sky-600">
                Simple process
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
                From booking to cooling.
              </h2>

            </div>

            <div
              className="
                mt-14
                grid
                overflow-hidden
                rounded-[30px]
                border
                border-slate-200
                bg-white
                shadow-[0_20px_70px_rgba(15,23,42,.06)]
                md:grid-cols-4
              "
            >

              {[
                [
                  "01",
                  "Book",
                  "Call, WhatsApp or use the booking option.",
                ],

                [
                  "02",
                  "Share",
                  "Tell us your location and AC problem.",
                ],

                [
                  "03",
                  "Diagnose",
                  "The technician checks the AC issue.",
                ],

                [
                  "04",
                  "Resolve",
                  "Approve the work and get the service completed.",
                ],
              ].map(
                ([number, heading, text], index) => (

                  <motion.div
                    key={number}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="
                      border-b
                      border-slate-200
                      p-7
                      last:border-b-0
                      md:border-b-0
                      md:border-r
                      md:last:border-r-0
                      lg:p-8
                    "
                  >

                    <span className="text-xs font-bold text-sky-600">
                      {number}
                    </span>

                    <h3 className="mt-10 text-xl font-semibold">
                      {heading}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {text}
                    </p>

                  </motion.div>

                )
              )}

            </div>

          </div>

        </section>

        {/* =================================================
            BOOKING CTA
        ================================================= */}

        <section
          id="booking"
          className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
        >

          <div className="mx-auto max-w-7xl">

            <div
              className="
                relative
                overflow-hidden
                rounded-[34px]
                bg-gradient-to-br
                from-[#061526]
                via-[#07345a]
                to-[#087fa8]
                p-7
                text-white
                shadow-[0_25px_90px_rgba(2,132,199,.20)]
                sm:p-10
                lg:p-14
              "
            >

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-cyan-300/20
                  blur-3xl
                "
              />

              <div
                className="
                  absolute
                  -bottom-32
                  left-1/3
                  h-72
                  w-72
                  rounded-full
                  bg-blue-400/20
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  grid
                  gap-10
                  lg:grid-cols-[1fr_.7fr]
                  lg:items-end
                "
              >

                <div>

                  <span
                    className="
                      rounded-full
                      border
                      border-white/15
                      bg-white/10
                      px-4
                      py-2
                      text-xs
                      uppercase
                      tracking-[.18em]
                      text-cyan-100
                      backdrop-blur-xl
                    "
                  >
                    Need an AC technician?
                  </span>

                  <h2 className="mt-7 max-w-3xl text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
                    Book your {location.name} AC service.
                  </h2>

                  <p className="mt-5 max-w-xl leading-7 text-slate-300">
                    Call, WhatsApp or use the booking option to
                    discuss your AC repair or service requirement.
                  </p>

                </div>

                <div className="flex flex-col gap-3">

                  <Link
                    href={BOOKING_URL}
                    className="
                      rounded-full
                      bg-white
                      px-6
                      py-4
                      text-center
                      text-sm
                      font-semibold
                      text-slate-950
                      transition
                      hover:-translate-y-0.5
                      hover:shadow-xl
                    "
                  >
                    Book AC Service →
                  </Link>

                  <a
                    href={`tel:${PHONE}`}
                    className="
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      px-6
                      py-4
                      text-center
                      text-sm
                      font-semibold
                      backdrop-blur-xl
                      transition
                      hover:bg-white/15
                    "
                  >
                    Call {DISPLAY_PHONE}
                  </a>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      rounded-full
                      border
                      border-emerald-300/20
                      bg-emerald-400/10
                      px-6
                      py-4
                      text-center
                      text-sm
                      font-semibold
                      text-emerald-50
                      backdrop-blur-xl
                      transition
                      hover:bg-emerald-400/15
                    "
                  >
                    WhatsApp Technician
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            INTERNAL LOCATION LINKS
        ================================================= */}

        <section className="bg-[#f5f9ff] px-5 py-20 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-7xl">

            <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-600">
              Nearby service areas
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em]">
              AC service across Mumbai
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">

              {locations
                .filter(
                  (item) =>
                    item.slug !== location.slug
                )
                .slice(0, 12)
                .map((item) => (

                  <Link
                    key={item.slug}
                    href={`/ac-repair/${item.slug}`}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      text-slate-600
                      shadow-sm
                      transition
                      hover:border-sky-300
                      hover:bg-sky-50
                      hover:text-sky-700
                    "
                  >
                    AC Repair {item.name}
                  </Link>

                ))}

            </div>

          </div>

        </section>

      </main>

      {/* ===================================================
          EXISTING FOOTER
      =================================================== */}

      <Footer />
    </>
  );
}