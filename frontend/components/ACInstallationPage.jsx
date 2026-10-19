
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import SEO from "./SEO";
import Nav from "./Nav";
import Footer from "./Footer";
import useSmoothAnimations from "../hooks/useSmoothAnimations";
import { getLocationServiceContent } from "../data/serviceLocationContent";
import FloatingActions from "./FloatingActions";
import GoogleReviewsCarousel from "./GoogleReviewsCarousel";

const PHONE = "+919793997768";
const WHATSAPP = "https://wa.me/919793997768";

const installationSteps = [
  {
    number: "01",
    title: "Share your requirements",
    description:
      "Tell us whether you need a new split AC, window AC or relocation of an existing unit.",
    icon: "01",
  },
  {
    number: "02",
    title: "Review the installation site",
    description:
      "Discuss indoor and outdoor unit placement, access, drainage and the proposed pipe route.",
    icon: "02",
  },
  {
    number: "03",
    title: "Confirm the scope and cost",
    description:
      "Clarify included work, materials, installation charges and any additional requirements before proceeding.",
    icon: "03",
  },
  {
    number: "04",
    title: "Schedule the installation",
    description:
      "Agree on a suitable visit time and make sure the installation area is accessible.",
    icon: "04",
  },
];

const installationFeatures = [
  {
    title: "Split AC installation",
    description:
      "Plan the indoor and outdoor unit positions, piping route and condensate drainage according to the site.",
    icon: "↗",
  },
  {
    title: "Window AC installation",
    description:
      "Check the window or wall opening, unit support, clearances and safe positioning before installation.",
    icon: "▤",
  },
  {
    title: "Copper piping and drainage",
    description:
      "Discuss the required pipe length, insulation, drainage slope and any extra material needed for the setup.",
    icon: "⌁",
  },
  {
    title: "Relocation and reinstallation",
    description:
      "For an existing AC, confirm dismantling, transportation, reinstallation and any additional work required.",
    icon: "⟳",
  },
];

const preparationItems = [
  "Confirm the AC type, capacity and installation location.",
  "Keep the proposed indoor and outdoor unit areas accessible.",
  "Discuss pipe length, insulation and drainage requirements.",
  "Check electrical supply and earthing requirements with a qualified professional.",
  "Confirm whether mounting brackets, core cutting or extra piping are included.",
  "Ask about any additional charges before the work begins.",
];

const defaultFaqs = [
  {
    question: "What information should I share before AC installation?",
    answer:
      "Share your locality, AC type, whether the unit is new or being relocated, and any known requirements for piping, drainage or mounting. Site conditions help determine the work needed.",
  },
  {
    question: "Does AC installation include copper piping?",
    answer:
      "The included pipe length and materials depend on the agreed installation package and site requirements. Confirm the included quantity and the cost of additional piping before work starts.",
  },
  {
    question: "Can an existing AC be installed at a new location?",
    answer:
      "Reinstallation may be possible after checking the unit condition, the new site's layout and the requirements for dismantling, transportation, mounting, piping and commissioning.",
  },
  {
    question: "How do I book AC installation in my area?",
    answer:
      "Call or message the service team with your locality, AC type and preferred visit time. The work scope and visit availability can then be discussed.",
  },
  {
    question: "What can affect AC installation charges?",
    answer:
      "Charges may vary with AC type, installation complexity, pipe length, mounting requirements, drainage, electrical work, accessibility and additional materials. Confirm the final scope and price before approving the work.",
  },
  {
    question: "Should the installation location be decided in advance?",
    answer:
      "Yes. Indoor and outdoor unit placement affects airflow, maintenance access, drainage and piping. Discuss the proposed positions before installation begins.",
  },
];

function ActionLink({ href, children, variant = "primary" }) {
  const styles = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-950/20 hover:bg-blue-500",
    secondary:
      "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/15",
    light:
      "border border-blue-200 bg-white text-blue-800 hover:bg-blue-50",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 sm:px-6 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}

function InstallationFAQ({ faqs, locationName }) {
  const items = [...(Array.isArray(faqs) ? faqs : []), ...defaultFaqs];

  const uniqueFaqs = items.reduce((result, faq) => {
    if (
      faq?.question &&
      faq?.answer &&
      !result.some(
        (item) =>
          item.question.trim().toLowerCase() ===
          faq.question.trim().toLowerCase()
      )
    ) {
      result.push(faq);
    }

    return result;
  }, []);

  return (
    <section className="service-reveal relative overflow-hidden bg-[#f5f8ff] px-5 py-20 sm:px-8 lg:py-24">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-700">
            Helpful answers
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            AC installation FAQs in {locationName}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Understand the installation process, materials and site
            requirements before scheduling your service.
          </p>
        </div>

        <div className="space-y-3">
          {uniqueFaqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 open:border-blue-300 open:shadow-md sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-slate-900 marker:hidden">
                <span>{faq.question}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ACInstallationPage({ location }) {
  useSmoothAnimations();

  const shouldReduceMotion = useReducedMotion();
  const c = getLocationServiceContent("installation", location);

  if (!location || !c) return null;

  const bookingHref = "/#book";

  return (
    <>
      <SEO
        title={c.title}
        description={c.description}
        path={`/ac-installation/${location.slug}`}
      />

      <Nav />

      <main className="overflow-hidden bg-white font-body text-slate-900">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#07152f] text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.36),transparent_48%),radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.18),transparent_45%)]" />

          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full border border-blue-300/20 bg-blue-400/10 blur-2xl sm:h-96 sm:w-96"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_.8fr] lg:gap-16 lg:py-28">
            <div>
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-200 backdrop-blur-xl"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                AC installation · {location.name}
              </motion.div>

              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="mt-6 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
              >
                {c.h1}
              </motion.h1>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                {c.intro}
              </motion.p>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.23 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <ActionLink href={bookingHref}>
                  Discuss Installation <span className="ml-2">↗</span>
                </ActionLink>
                <ActionLink href={`tel:${PHONE}`} variant="secondary">
                  Call for Details
                </ActionLink>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-emerald-300/25 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-400/20 sm:px-6"
                >
                  WhatsApp Us
                </a>
              </motion.div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span>✓ Scope discussed in advance</span>
                <span>✓ Installation requirements reviewed</span>
                <span>✓ Locality-based enquiries</span>
              </div>
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-400/30 via-cyan-300/10 to-indigo-400/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.08] p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-blue-200">
                      Before installation
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">
                      Get the setup right
                    </h2>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-2xl text-cyan-200">
                    ↗
                  </span>
                </div>

                <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {[
                  ["01", "Unit placement", "Indoor and outdoor positioning"],
                  ["02", "Pipe routing", "Length, insulation and drainage"],
                  ["03", "Work scope", "Materials and additional charges"],
                ].map(([number, title, description]) => (
                  <div key={number} className="mb-5 flex gap-4 last:mb-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-300/10 text-sm font-bold text-cyan-200">
                      {number}
                    </span>
                    <div>
                      <h3 className="font-bold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mt-7 rounded-xl border border-white/10 bg-black/15 p-4 text-sm leading-6 text-slate-300">
                  Every site is different. Confirm the final requirements and
                  price before work begins.
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
        </section>

        {/* INTRODUCTION */}
        <section className="service-reveal mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
                Plan before you install
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                AC installation planned around your space
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Looking for AC installation in{" "}
                <strong className="text-slate-900">{location.name}</strong>?
                The right installation plan starts with understanding the room,
                AC type, unit placement and site conditions.
              </p>
              <p>
                Indoor airflow, outdoor-unit access, pipe routing, drainage and
                electrical requirements all need consideration. Discussing
                these points beforehand helps clarify the scope of work and
                any materials that may be needed.
              </p>
              <p>
                Whether you are installing a new unit or moving an existing
                AC, share the available details so the installation
                requirements can be reviewed before arranging a visit.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICE TYPES */}
        <section className="service-reveal relative bg-[#f5f8ff] px-5 py-20 sm:px-8 lg:py-24">
          <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
                Installation options
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Choose the installation support you need
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Requirements depend on your AC model, property and existing
                setup. Discuss your situation before confirming the work.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {installationFeatures.map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                  className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-blue-950/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white shadow-lg shadow-blue-500/20">
                    {feature.icon}
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                  <div className="mt-5 h-1 w-10 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-600" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="service-reveal mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
                How it works
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                A clear process from enquiry to installation
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Know what to discuss at every stage, from choosing the
                installation location to confirming the final scope.
              </p>

              <a
                href={`tel:${PHONE}`}
                className="mt-7 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
              >
                Talk about your requirements <span>→</span>
              </a>
            </div>

            <div className="relative space-y-4">
              <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-blue-500 via-cyan-300 to-transparent sm:block" />

              {installationSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-lg sm:gap-6 sm:p-6"
                >
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-sm font-extrabold text-white shadow-lg shadow-blue-700/20">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SITE PREPARATION */}
        <section className="service-reveal bg-[#07152f] px-5 py-20 text-white sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-300">
                Installation checklist
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Prepare the site before the technician arrives
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                A little preparation helps you discuss the work more clearly
                and identify site-specific requirements early.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <p className="text-sm font-semibold leading-7 text-blue-100">
                  Tip: If possible, share photos of the proposed indoor and
                  outdoor unit locations when enquiring. This may help with
                  the initial discussion, although a site visit can still be
                  needed.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {preparationItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:bg-white/[0.09]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300/15 text-sm font-bold text-cyan-200">
                    ✓
                  </span>
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAL SERVICE */}
        <section className="service-reveal mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-7 text-white shadow-2xl shadow-blue-900/15 sm:p-10">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/20 bg-white/10 blur-xl" />
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
                  Local installation enquiries
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                  Need AC installation in {location.name}?
                </h2>
                <p className="mt-5 leading-8 text-blue-50">
                  Share your locality, AC model and installation requirements
                  to discuss the next steps and visit availability.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 font-bold text-blue-800 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Enquire on WhatsApp ↗
                </a>
              </div>
            </div>

            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
                What to confirm
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Understand the work before approving it
              </h2>

              <div className="mt-7 space-y-5">
                {[
                  [
                    "Materials",
                    "Confirm the included pipe length, insulation, drain pipe and mounting hardware.",
                  ],
                  [
                    "Site requirements",
                    "Discuss access, wall openings, outdoor unit positioning and electrical arrangements.",
                  ],
                  [
                    "Final charges",
                    "Ask which tasks are included and whether extra materials or work will cost more.",
                  ],
                ].map(([title, description]) => (
                  <div key={title} className="flex gap-4">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-800">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-950">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <InstallationFAQ faqs={c.faqs} locationName={location.name} />

        {/* RELATED SERVICES */}
        <section className="service-reveal border-t border-slate-200 bg-white px-5 py-14 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
              Explore more
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              More AC services in {location.name}
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Explore related services if your AC needs maintenance, routine
              servicing or repair instead of installation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/ac-service/${location.slug}`}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
              >
                AC Service →
              </Link>
              <Link
                href={`/ac-repair/${location.slug}`}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
              >
                AC Repair →
              </Link>
              <Link
                href={`/ac-maintenance/${location.slug}`}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
              >
                AC Maintenance →
              </Link>
              <Link
                href={`/ac-service-near/${location.slug}`}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
              >
                AC Service Near You →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="service-reveal px-5 pb-20 pt-4 sm:px-8 lg:pb-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0b1b3a] via-blue-950 to-[#123d77] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
            <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-300">
                  Let’s plan your installation
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Discuss your AC installation in {location.name}
                </h2>
                <p className="mt-4 leading-8 text-slate-300">
                  Call or message with your AC type and site details to discuss
                  installation requirements and a suitable visit time.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <ActionLink href={`tel:${PHONE}`}>
                  Call Now ↗
                </ActionLink>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15 sm:px-6"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
        <GoogleReviewsCarousel/>
      </main>
      <FloatingActions/>

      <Footer />
    </>
  );
}
