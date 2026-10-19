
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

const checks = [
  {
    number: "01",
    title: "Airflow and cooling",
    description:
      "Discuss weak airflow, uneven cooling or changes in the time your AC takes to cool a room.",
    tag: "PERFORMANCE",
  },
  {
    number: "02",
    title: "Filters and cleanliness",
    description:
      "Ask whether filter cleaning and other appropriate cleaning tasks are needed for your unit.",
    tag: "CLEANLINESS",
  },
  {
    number: "03",
    title: "Drainage and leakage",
    description:
      "Report visible water leakage, blocked drainage concerns or moisture around the indoor unit.",
    tag: "DRAINAGE",
  },
  {
    number: "04",
    title: "Operating condition",
    description:
      "Mention unusual sounds, vibration, odours or other changes noticed while the AC is running.",
    tag: "INSPECTION",
  },
  {
    number: "05",
    title: "Outdoor unit condition",
    description:
      "Discuss visible dirt, restricted airflow or access concerns around the outdoor unit.",
    tag: "OUTDOOR UNIT",
  },
  {
    number: "06",
    title: "Electrical and safety concerns",
    description:
      "Report tripping, burning smells or damaged wiring. Stop using the unit if unsafe and arrange a qualified inspection.",
    tag: "SAFETY",
  },
];

const maintenanceSteps = [
  {
    number: "01",
    title: "Describe the AC",
    description:
      "Share the AC type, approximate age, usage pattern and any symptoms you have noticed.",
  },
  {
    number: "02",
    title: "Discuss the required checks",
    description:
      "Explain your concerns so the appropriate inspection and maintenance tasks can be discussed.",
  },
  {
    number: "03",
    title: "Confirm the scope",
    description:
      "Clarify the expected work, materials, service charges and any additional costs before approval.",
  },
  {
    number: "04",
    title: "Arrange a visit",
    description:
      "Confirm a suitable appointment and make sure the equipment is accessible for inspection.",
  },
];

const careTips = [
  {
    title: "Keep filters in mind",
    text: "Check the manufacturer's guidance for filter cleaning intervals. Dusty surroundings and frequent usage may affect how often cleaning is needed.",
  },
  {
    title: "Keep airflow unobstructed",
    text: "Avoid blocking indoor vents and keep the outdoor unit's surrounding area clear where it is safe to do so.",
  },
  {
    title: "Pay attention to changes",
    text: "Unusual noises, reduced cooling, persistent odours or visible leakage are reasons to seek an appropriate inspection.",
  },
  {
    title: "Use qualified professionals",
    text: "Electrical repairs, refrigerant work and internal servicing should be handled by appropriately qualified technicians.",
  },
];

const defaultFaqs = [
  {
    question: "What is included in AC maintenance?",
    answer:
      "The work depends on the AC type, condition and agreed service scope. It may involve discussing filters, cleanliness, airflow, drainage and operating condition. Confirm exactly which tasks are included before booking.",
  },
  {
    question: "How often should I get my AC maintained?",
    answer:
      "The appropriate frequency depends on the manufacturer's guidance, equipment condition, usage and surrounding dust levels. Follow the maintenance instructions for your model and seek an inspection when problems appear.",
  },
  {
    question: "Can maintenance help when cooling becomes weak?",
    answer:
      "Reduced cooling can have several causes, including airflow restrictions, dirty components or a technical fault. An inspection can help identify the cause; maintenance alone may not resolve every issue.",
  },
  {
    question: "Does AC maintenance include gas refilling?",
    answer:
      "Refrigerant work is not automatically included in every maintenance visit. Refrigerant levels should be assessed by a qualified technician when indicated. A leak, if present, needs appropriate investigation rather than simply repeated refilling.",
  },
  {
    question: "How much does AC maintenance cost in my area?",
    answer:
      "The price can depend on AC type, unit condition, required tasks, accessibility and additional materials. Share your requirements and confirm the scope and charges before approving the work.",
  },
  {
    question: "Can I request maintenance for a split or window AC?",
    answer:
      "You can enquire about the type of AC you have. Share the model or unit type and describe the work required so the service team can discuss the relevant maintenance options.",
  },
  {
    question: "What should I do if my AC smells burnt or trips the power?",
    answer:
      "Switch off the unit and avoid repeatedly restarting it. If you notice a burning smell, electrical damage or repeated tripping, arrange a qualified inspection before using it again.",
  },
];

function ActionLink({ href, children, variant = "primary" }) {
  const styles = {
    primary:
      "bg-emerald-300 text-emerald-950 shadow-lg shadow-black/10 hover:bg-emerald-200",
    secondary:
      "border border-white/20 bg-white/[0.07] text-white backdrop-blur-md hover:bg-white/[0.13]",
    light:
      "border border-emerald-200 bg-white text-emerald-900 hover:bg-emerald-50",
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

function MaintenanceFAQ({ faqs, locationName }) {
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
    <section className="service-reveal bg-[#f2f6f1] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-800">
            Frequently asked questions
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#142d26] sm:text-4xl">
            AC maintenance FAQs in {locationName}
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Understand routine care, common symptoms and service requirements
            before arranging an appointment.
          </p>
        </div>

        <div className="space-y-3">
          {uniqueFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm transition hover:border-emerald-300 open:border-emerald-300 open:shadow-md sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-[#142d26] marker:hidden">
                <span>{faq.question}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg text-emerald-900 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ACMaintenancePage({ location }) {
  useSmoothAnimations();

  const shouldReduceMotion = useReducedMotion();
  const c = getLocationServiceContent("maintenance", location);

  if (!location || !c) return null;

  const bookingHref = "/#book";

  return (
    <>
      <SEO
        title={c.title}
        description={c.description}
        path={`/ac-maintenance/${location.slug}`}
      />

      <Nav />

      <main className="overflow-hidden bg-[#f4f5f1] font-body text-[#202b27]">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#102b23] text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.20),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.13),transparent_45%)]" />

          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full border border-emerald-200/10 bg-emerald-300/[0.07] blur-2xl sm:h-[28rem] sm:w-[28rem]"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:py-28">
            <div>
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-white/[0.06] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-200 backdrop-blur-xl"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Preventive care · {location.name}
              </motion.p>

              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="mt-7 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
              >
                {c.h1}
              </motion.h1>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/80 sm:text-lg"
              >
                {c.intro}
              </motion.p>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <ActionLink href={bookingHref}>
                  Plan Maintenance <span className="ml-2">↗</span>
                </ActionLink>

                <ActionLink href={`tel:${PHONE}`} variant="secondary">
                  Call Technician
                </ActionLink>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-emerald-200/20 bg-emerald-300/10 px-5 py-3 text-sm font-bold text-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-300/20 sm:px-6"
                >
                  WhatsApp Us
                </a>
              </motion.div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-emerald-50/75">
                <span>✓ Discuss routine care</span>
                <span>✓ Report unusual symptoms</span>
                <span>✓ Confirm service scope</span>
              </div>
            </div>

            {/* HERO CHECKLIST CARD */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-emerald-300/20 via-teal-200/10 to-lime-300/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-emerald-200">
                      Maintenance overview
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">
                      Know what to check
                    </h2>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300/15 text-2xl text-emerald-200">
                    ✓
                  </span>
                </div>

                <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {[
                  ["Airflow", "Cooling and ventilation"],
                  ["Cleanliness", "Filters and accessible areas"],
                  ["Drainage", "Visible water or leakage"],
                  ["Operation", "Noise and unusual changes"],
                ].map(([title, description], index) => (
                  <div key={title} className="mb-5 flex items-center gap-4 last:mb-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-200/15 bg-emerald-300/10 text-sm font-bold text-emerald-200">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-emerald-50/65">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mt-7 rounded-xl border border-white/10 bg-black/10 p-4 text-sm leading-6 text-emerald-50/70">
                  Actual maintenance tasks depend on the unit, its condition
                  and the agreed service scope.
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-px bg-gradient-to-r from-transparent via-emerald-200/30 to-transparent" />
        </section>

        {/* INTRO */}
        <section className="service-reveal mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-800">
                Care for your equipment
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#142d26] sm:text-4xl">
                Routine AC maintenance starts with the right checks
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-700 to-lime-400" />
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                If you need AC maintenance in{" "}
                <strong className="text-[#142d26]">{location.name}</strong>,
                start by describing how your unit operates and whether you
                have noticed any changes in cooling, airflow or drainage.
              </p>
              <p>
                Maintenance requirements differ between units. Usage,
                surrounding dust, equipment condition and manufacturer
                guidance all influence which checks may be appropriate.
              </p>
              <p>
                SC Cool Service can discuss your requirements and the proposed
                service scope before a visit is arranged. Not every visit
                includes every cleaning task, repair or replacement.
              </p>
            </div>
          </div>
        </section>

        {/* CHECKLIST GRID */}
        <section className="service-reveal relative overflow-hidden bg-[#e6eee5] px-5 py-20 sm:px-8 lg:py-24">
          <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-800">
                  Maintenance checklist
                </span>
                <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-[#142d26] sm:text-4xl">
                  What should you discuss during maintenance?
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-slate-600">
                These are common discussion points, not a guarantee that every
                task is included in every service visit.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {checks.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                  className="group rounded-2xl border border-emerald-950/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-emerald-950/5 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-extrabold text-emerald-800">
                      {item.number}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.12em] text-emerald-900">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#142d26]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-emerald-200 transition-all duration-300 group-hover:w-16 group-hover:bg-emerald-700" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* MAINTENANCE PROCESS */}
        <section className="service-reveal mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-800">
                Simple process
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#142d26] sm:text-4xl">
                From maintenance enquiry to visit
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Share the symptoms or routine care you need. Discuss the
                required work, confirm the charges and arrange a visit.
              </p>

              <a
                href={`tel:${PHONE}`}
                className="mt-7 inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-950"
              >
                Discuss your AC requirements <span>→</span>
              </a>
            </div>

            <div className="relative space-y-4">
              <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-emerald-600 via-lime-400 to-transparent sm:block" />

              {maintenanceSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="relative flex gap-4 rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-lg sm:gap-6 sm:p-6"
                >
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#163d30] text-sm font-extrabold text-emerald-200 shadow-lg">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#142d26]">
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

        {/* CARE TIPS */}
        <section className="service-reveal bg-[#142d26] px-5 py-20 text-white sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-300">
                Everyday care
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Practical habits for looking after your AC
              </h2>
              <p className="mt-5 leading-8 text-emerald-50/75">
                Simple checks can help you notice changes early. Follow your
                manufacturer's instructions and leave technical work to a
                qualified professional.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <p className="text-sm font-semibold leading-7 text-emerald-100">
                  Safety first: If you notice a burning smell, exposed wiring
                  or repeated electrical tripping, stop using the AC and
                  arrange a qualified inspection.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {careTips.map((tip, index) => (
                <motion.article
                  key={tip.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:bg-white/[0.09] sm:p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/15 text-lg font-bold text-emerald-200">
                    ✓
                  </span>
                  <h3 className="mt-5 font-bold">{tip.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-emerald-50/70">
                    {tip.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAL CTA AND SCOPE */}
        <section className="service-reveal mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#174b37] via-emerald-800 to-[#236348] p-7 text-white shadow-2xl shadow-emerald-950/15 sm:p-10">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/20 bg-white/10 blur-xl" />

              <div className="relative">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-200">
                  Local maintenance enquiries
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                  Looking for AC maintenance in {location.name}?
                </h2>
                <p className="mt-5 leading-8 text-emerald-50/80">
                  Tell us your AC type, usage pattern and any concerns. The
                  service team can discuss the appropriate checks and visit
                  availability.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-200 px-5 py-3 font-bold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-100"
                  >
                    WhatsApp Enquiry ↗
                  </a>
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.07] px-5 py-3 font-bold text-white transition hover:bg-white/[0.13]"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-800">
                Before approving service
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#142d26] sm:text-4xl">
                Know what your maintenance visit covers
              </h2>

              <div className="mt-7 space-y-5">
                {[
                  [
                    "Confirm included tasks",
                    "Ask which inspection, cleaning and maintenance activities are part of the quoted service.",
                  ],
                  [
                    "Discuss additional work",
                    "Repairs, replacement parts or specialist tasks may require separate approval and charges.",
                  ],
                  [
                    "Ask about the findings",
                    "Request an explanation of any observed issue and the recommended next steps.",
                  ],
                ].map(([title, description]) => (
                  <div key={title} className="flex gap-4">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-900">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-bold text-[#142d26]">{title}</h3>
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
        <MaintenanceFAQ faqs={c.faqs} locationName={location.name} />

        {/* RELATED SERVICES */}
        <section className="service-reveal border-t border-emerald-950/10 bg-white px-5 py-14 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-800">
              Explore more
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#142d26] sm:text-3xl">
              Other AC services in {location.name}
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Explore related options if you need installation, a routine
              service or help diagnosing an AC problem.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/ac-service/${location.slug}`}
                className="rounded-full border border-emerald-950/10 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                AC Service →
              </Link>
              <Link
                href={`/ac-installation/${location.slug}`}
                className="rounded-full border border-emerald-950/10 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                AC Installation →
              </Link>
              <Link
                href={`/ac-service-near/${location.slug}`}
                className="rounded-full border border-emerald-950/10 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                AC Service Near You →
              </Link>
              <Link
                href={`/ac-repair/${location.slug}`}
                className="rounded-full border border-emerald-950/10 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                AC Repair →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="service-reveal px-5 pb-20 pt-4 sm:px-8 lg:pb-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#102b23] via-[#174b37] to-[#163b32] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
            <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-emerald-300/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-lime-300/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-200">
                  Plan your next service
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Discuss AC maintenance in {location.name}
                </h2>
                <p className="mt-4 leading-8 text-emerald-50/75">
                  Share your AC details and concerns to discuss the service
                  scope and a suitable appointment.
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
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.07] px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/[0.13] sm:px-6"
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
