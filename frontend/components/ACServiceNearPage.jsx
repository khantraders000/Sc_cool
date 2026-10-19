
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

const process = [
  {
    number: "01",
    title: "Share your locality",
    description:
      "Tell us your area in Mumbai and share a nearby landmark to help clarify the service location.",
  },
  {
    number: "02",
    title: "Explain your requirement",
    description:
      "Mention your AC type and whether you need servicing, maintenance, installation or repair.",
  },
  {
    number: "03",
    title: "Confirm availability",
    description:
      "Discuss the address area, expected work, applicable charges and a suitable visit time.",
  },
];

const serviceOptions = [
  {
    number: "01",
    title: "AC Service",
    description:
      "Discuss routine servicing and appropriate cleaning for your air conditioner.",
    href: "service",
    icon: "↻",
  },
  {
    number: "02",
    title: "AC Repair",
    description:
      "Explain cooling issues, unusual sounds, water leakage or other problems.",
    href: "repair",
    icon: "⌁",
  },
  {
    number: "03",
    title: "AC Installation",
    description:
      "Enquire about new installations, unit placement and installation requirements.",
    href: "installation",
    icon: "↗",
  },
  {
    number: "04",
    title: "AC Maintenance",
    description:
      "Discuss preventive care and the checks appropriate for your unit.",
    href: "maintenance",
    icon: "✓",
  },
];

const requestChecklist = [
  "Your locality and a nearby landmark",
  "Split AC, window AC or another unit type",
  "Whether you need service, repair or installation",
  "A short description of the issue, if applicable",
  "Your preferred visit date and time",
  "Any access restrictions or relevant site details",
];

const defaultFaqs = [
  {
    question: "How do I find AC service near me in this area?",
    answer:
      "Contact the service team with your locality, nearby landmark and AC requirements. Ask whether a visit to your specific address can be arranged and confirm the expected charges before booking.",
  },
  {
    question: "Do you provide AC service throughout this locality?",
    answer:
      "Service availability can vary by exact address and appointment schedule. Share your locality and nearby landmark to confirm whether a visit can be arranged.",
  },
  {
    question: "Can I request AC repair instead of routine servicing?",
    answer:
      "Yes, you can enquire about repair requirements. Explain the symptoms, such as reduced cooling, unusual sounds or water leakage, so the appropriate next steps can be discussed.",
  },
  {
    question: "How much does a local AC service visit cost?",
    answer:
      "Charges may depend on the AC type, the requested service, equipment condition, site access and any additional work. Confirm the service scope and applicable charges before approving the job.",
  },
  {
    question: "Can I book an AC service visit through WhatsApp?",
    answer:
      "You can message the service team through WhatsApp with your locality, AC type and service requirements. Confirm the appointment details and any applicable charges directly with the team.",
  },
  {
    question: "What information should I share when requesting a visit?",
    answer:
      "Share your locality, a nearby landmark, AC type, the service required and your preferred visit time. If there is a fault, describe what you have observed.",
  },
  {
    question: "Do you offer installation and maintenance as well?",
    answer:
      "You can enquire about AC installation and maintenance in addition to routine servicing and repair. The required work and local availability should be confirmed before scheduling.",
  },
];

function ActionLink({ href, children, variant = "primary" }) {
  const styles = {
    primary:
      "bg-[#713d20] text-white shadow-lg shadow-orange-950/10 hover:bg-[#512b16]",
    secondary:
      "border border-[#713d20]/20 bg-white/70 text-[#713d20] backdrop-blur-md hover:bg-white",
    light:
      "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/15",
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

function LocalServiceFAQ({ faqs, locationName }) {
  const allFaqs = [...(Array.isArray(faqs) ? faqs : []), ...defaultFaqs];

  const uniqueFaqs = allFaqs.reduce((result, faq) => {
    const question = faq?.question?.trim().toLowerCase();

    if (
      question &&
      faq?.answer &&
      !result.some(
        (item) => item.question.trim().toLowerCase() === question
      )
    ) {
      result.push(faq);
    }

    return result;
  }, []);

  return (
    <section className="service-reveal bg-[#fff5e8] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-900">
            Local service guide
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#30251c] sm:text-4xl">
            AC service FAQs for {locationName}
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#634b37]">
            Find out what details to share, how to enquire and what to confirm
            before arranging a local AC service visit.
          </p>
        </div>

        <div className="space-y-3">
          {uniqueFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-orange-950/10 bg-white p-5 shadow-sm transition hover:border-orange-300 open:border-orange-300 open:shadow-md sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-[#30251c] marker:hidden">
                <span>{faq.question}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg text-orange-900 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#634b37] sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ACServiceNearPage({ location }) {
  useSmoothAnimations();

  const shouldReduceMotion = useReducedMotion();
  const c = getLocationServiceContent("near", location);

  if (!location || !c) return null;

  const bookingHref = "/#book";

  return (
    <>
      <SEO
        title={c.title}
        description={c.description}
        path={`/ac-service-near/${location.slug}`}
      />

      <Nav />

      <main className="overflow-hidden bg-[#fffaf3] font-body text-[#30251c]">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#f1d9b7]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_15%,rgba(255,255,255,.75),transparent_32%),radial-gradient(circle_at_5%_95%,rgba(190,105,48,.16),transparent_35%)]" />

          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full border border-orange-900/10 bg-white/20 blur-2xl sm:h-[28rem] sm:w-[28rem]"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:py-28">
            <div>
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-orange-900/10 bg-white/45 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-950 backdrop-blur-md"
              >
                <span className="h-2 w-2 rounded-full bg-orange-700" />
                Local AC service · {location.name}
              </motion.p>

              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="mt-7 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-[#30251c] sm:text-5xl lg:text-6xl"
              >
                {c.h1}
              </motion.h1>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 max-w-2xl text-base leading-8 text-[#634b37] sm:text-lg"
              >
                {c.intro}
              </motion.p>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <ActionLink href={`tel:${PHONE}`}>
                  Call to Check Availability <span className="ml-2">↗</span>
                </ActionLink>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#713d20]/20 bg-white/60 px-5 py-3 text-sm font-bold text-[#713d20] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/80 sm:px-6"
                >
                  WhatsApp Us
                </a>
              </motion.div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#634b37]">
                <span>✓ Confirm your locality</span>
                <span>✓ Explain your requirement</span>
                <span>✓ Check visit availability</span>
              </div>
            </div>

            {/* ENQUIRY CARD */}
            <motion.aside
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-white/70 via-orange-300/30 to-amber-700/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/75 p-6 shadow-2xl shadow-orange-950/10 backdrop-blur-2xl sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-800">
                      Before requesting a visit
                    </p>
                    <h2 className="mt-3 text-2xl font-bold text-[#30251c]">
                      Help us understand your request
                    </h2>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-2xl text-orange-900">
                    ↗
                  </span>
                </div>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-orange-900/15 to-transparent" />

                <ul className="space-y-4">
                  {[
                    "Your locality and nearby landmark",
                    "Split AC, window AC or other unit type",
                    "Repair, cleaning or installation requirement",
                    "Preferred visit time",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-extrabold text-emerald-900">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-[#634b37]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={bookingHref}
                  className="mt-7 flex min-h-12 items-center justify-center rounded-xl bg-orange-700 px-5 py-4 text-center font-bold text-white shadow-lg shadow-orange-950/10 transition hover:-translate-y-0.5 hover:bg-orange-800"
                >
                  Go to Booking <span className="ml-2">→</span>
                </Link>

                <p className="mt-4 text-center text-xs leading-5 text-[#806955]">
                  Confirm local availability and applicable charges before
                  arranging a visit.
                </p>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* INTRO */}
        <section className="service-reveal mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-900">
                Local service enquiries
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#30251c] sm:text-4xl">
                Looking for AC service near {location.name}?
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-orange-800 to-amber-400" />
            </div>

            <div className="space-y-5 text-base leading-8 text-[#634b37]">
              <p>
                If you need an AC technician near{" "}
                <strong className="text-[#30251c]">{location.name}</strong>,
                start by sharing your exact locality and the service you need.
                A nearby landmark can help clarify your address area.
              </p>
              <p>
                Whether you need routine servicing, maintenance, repair or
                installation, explain the AC type and the work required.
                This makes it easier to discuss the appropriate service
                options before a visit is scheduled.
              </p>
              <p>
                Service availability depends on the exact address and
                appointment schedule. Contact SC Cool Service to confirm
                coverage, the expected scope of work and applicable charges.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICE OPTIONS */}
        <section className="service-reveal relative overflow-hidden bg-[#f5e9d8] px-5 py-20 sm:px-8 lg:py-24">
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-900">
                Choose the right service
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#30251c] sm:text-4xl">
                What kind of AC help do you need?
              </h2>
              <p className="mt-4 leading-7 text-[#634b37]">
                Choose the relevant service to learn more about the work and
                requirements for your area.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {serviceOptions.map((service, index) => (
                <motion.article
                  key={service.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                  className="group rounded-2xl border border-orange-950/10 bg-white/80 p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-orange-950/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-orange-800">
                      {service.number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-xl font-bold text-orange-900 transition group-hover:bg-[#713d20] group-hover:text-white">
                      {service.icon}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#30251c]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#634b37]">
                    {service.description}
                  </p>

                  <Link
                    href={`/${service.href === "service" ? "ac-service" : `ac-${service.href}`}/${location.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-orange-900 transition group-hover:gap-3"
                  >
                    Explore service <span>→</span>
                  </Link>

                  <div className="mt-5 h-1 w-10 rounded-full bg-orange-200 transition-all duration-300 group-hover:w-16 group-hover:bg-orange-800" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="service-reveal mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-900">
              How it works
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#30251c] sm:text-4xl">
              From your locality to a service request
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#634b37]">
              Follow these steps to discuss your requirements and confirm
              whether a visit can be arranged.
            </p>
          </div>

          <div className="relative mt-10 grid gap-5 md:grid-cols-3">
            {process.map((item, index) => (
              <motion.article
                key={item.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative rounded-3xl border border-orange-950/10 bg-white p-7 shadow-sm transition hover:border-orange-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#713d20] text-sm font-extrabold text-white">
                    {item.number}
                  </span>
                  <span className="text-3xl font-bold text-orange-100">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#30251c]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#634b37]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* REQUEST CHECKLIST */}
        <section className="service-reveal bg-[#30251c] px-5 py-20 text-white sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-300">
                Make your enquiry easier
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Details to share before requesting a visit
              </h2>
              <p className="mt-5 leading-8 text-orange-50/75">
                Having the basic information ready helps you explain the
                requirement and discuss appointment availability.
              </p>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-300 px-6 py-4 font-bold text-[#30251c] transition hover:-translate-y-0.5 hover:bg-orange-200"
              >
                Send an Enquiry ↗
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {requestChecklist.map((item, index) => (
                <motion.div
                  key={item}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:bg-white/[0.09]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-300/15 text-sm font-bold text-orange-200">
                    ✓
                  </span>
                  <p className="text-sm leading-7 text-orange-50/85">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAL CTA */}
        <section className="service-reveal mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#713d20] via-[#854a27] to-[#a75c2c] p-7 text-white shadow-2xl shadow-orange-950/15 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-orange-200/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-60 w-60 rounded-full bg-amber-300/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-200">
                  Check local availability
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Need AC help near {location.name}?
                </h2>
                <p className="mt-4 leading-8 text-orange-50/80">
                  Share your locality and service requirement with SC Cool
                  Service. Confirm whether a visit is available for your
                  address before making arrangements.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <ActionLink href={`tel:${PHONE}`} variant="light">
                  Call Now ↗
                </ActionLink>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15 sm:px-6"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <LocalServiceFAQ faqs={c.faqs} locationName={location.name} />

        {/* RELATED SERVICES */}
        <section className="service-reveal border-t border-orange-950/10 bg-white px-5 py-14 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-900">
              Explore more
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#30251c] sm:text-3xl">
              AC services in {location.name}
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#634b37]">
              Explore individual service pages to understand the requirements
              for servicing, installation, maintenance or repair.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/ac-service/${location.slug}`}
                className="rounded-full border border-orange-950/10 bg-white px-5 py-3 text-sm font-bold text-[#30251c] transition hover:border-orange-300 hover:bg-orange-50"
              >
                AC Service →
              </Link>
              <Link
                href={`/ac-repair/${location.slug}`}
                className="rounded-full border border-orange-950/10 bg-white px-5 py-3 text-sm font-bold text-[#30251c] transition hover:border-orange-300 hover:bg-orange-50"
              >
                AC Repair →
              </Link>
              <Link
                href={`/ac-installation/${location.slug}`}
                className="rounded-full border border-orange-950/10 bg-white px-5 py-3 text-sm font-bold text-[#30251c] transition hover:border-orange-300 hover:bg-orange-50"
              >
                AC Installation →
              </Link>
              <Link
                href={`/ac-maintenance/${location.slug}`}
                className="rounded-full border border-orange-950/10 bg-white px-5 py-3 text-sm font-bold text-[#30251c] transition hover:border-orange-300 hover:bg-orange-50"
              >
                AC Maintenance →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="service-reveal px-5 pb-20 pt-4 sm:px-8 lg:pb-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-orange-950/5 bg-[#f1d9b7] px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
            <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-white/50 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-900">
                  Start with an enquiry
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#30251c] sm:text-4xl">
                  Find out whether AC service is available near you
                </h2>
                <p className="mt-4 leading-8 text-[#634b37]">
                  Contact the team with your locality, AC type and service
                  requirement to discuss the next steps.
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
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#713d20]/20 bg-white/60 px-5 py-3 text-sm font-bold text-[#713d20] transition hover:-translate-y-0.5 hover:bg-white sm:px-6"
                >
                  WhatsApp Us
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
