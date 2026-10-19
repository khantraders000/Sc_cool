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

const services = [
  {
    number: "01",
    icon: "❄️",
    title: "AC inspection",
    text: "Discuss cooling performance, unusual sounds, airflow and other symptoms before deciding what needs attention.",
    color: "from-cyan-400/20 to-blue-500/10",
  },
  {
    number: "02",
    icon: "🫧",
    title: "AC cleaning",
    text: "Ask about filter cleaning and suitable cleaning of accessible components to help maintain airflow.",
    color: "from-sky-400/20 to-cyan-500/10",
  },
  {
    number: "03",
    icon: "🌬️",
    title: "Cooling diagnosis",
    text: "Investigate weak cooling and other performance concerns instead of guessing at the cause.",
    color: "from-indigo-400/20 to-blue-500/10",
  },
  {
    number: "04",
    icon: "🛠️",
    title: "Repair guidance",
    text: "Understand the identified issue, proposed repair and applicable charges before authorising additional work.",
    color: "from-blue-400/20 to-violet-500/10",
  },
  {
    number: "05",
    icon: "💧",
    title: "Water leakage checks",
    text: "Report indoor-unit leakage so the technician can investigate possible drainage or other causes.",
    color: "from-teal-400/20 to-cyan-500/10",
  },
  {
    number: "06",
    icon: "🏠",
    title: "Home and office ACs",
    text: "Discuss the AC type, installation environment and usage requirements when arranging service.",
    color: "from-violet-400/20 to-blue-500/10",
  },
];

const problems = [
  {
    title: "AC is not cooling properly",
    text: "Weak cooling can have several causes. Share when the issue started and whether the AC is still blowing air.",
    icon: "🌡️",
  },
  {
    title: "Water dripping indoors",
    text: "Turn the unit off if leakage creates an electrical or property-safety concern, and explain where the water appears.",
    icon: "💧",
  },
  {
    title: "Unusual noise or smell",
    text: "Describe the noise or smell clearly. Stop using the AC if you notice burning smells or other signs of an electrical fault.",
    icon: "🔎",
  },
  {
    title: "Airflow feels weak",
    text: "Tell the technician whether airflow has reduced suddenly or gradually and when the filters were last cleaned.",
    icon: "🌬️",
  },
];

const process = [
  {
    number: "01",
    title: "Tell us about the problem",
    text: "Call or WhatsApp with your locality, AC type and the symptoms you have noticed.",
  },
  {
    number: "02",
    title: "Discuss the service",
    text: "Explain the issue and ask about availability, inspection and applicable service charges.",
  },
  {
    number: "03",
    title: "Arrange a visit",
    text: "Confirm the appointment details and provide access to the AC unit.",
  },
  {
    number: "04",
    title: "Review the findings",
    text: "Ask about the diagnosis, recommended work and any additional costs before approving repairs.",
  },
];

const benefits = [
  {
    title: "Clear communication",
    text: "Explain the symptoms and understand the proposed next steps before work begins.",
    icon: "💬",
  },
  {
    title: "Service suited to the issue",
    text: "Discuss whether the AC needs inspection, cleaning, repair or another type of service.",
    icon: "🎯",
  },
  {
    title: "Convenient contact options",
    text: "Reach out by phone or WhatsApp to discuss your service requirements.",
    icon: "📲",
  },
  {
    title: "Understand the charges",
    text: "Ask about inspection fees, service charges and any additional repair costs before approval.",
    icon: "✓",
  },
];

const careTips = [
  "Clean or replace filters according to the manufacturer's instructions.",
  "Keep the indoor and outdoor units' airflow paths unobstructed.",
  "Pay attention to changes in cooling, airflow, noise or water drainage.",
  "Arrange inspection if recurring symptoms continue after basic checks.",
  "Follow the manufacturer's recommendations for routine maintenance.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-3xl text-center"
    >
      <span
        className={`inline-flex rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${
          light
            ? "border-white/15 bg-white/[0.06] text-cyan-200"
            : "border-cyan-200 bg-cyan-50 text-cyan-800"
        }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

function ActionButtons({ compact = false }) {
  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "mt-8"}`}>
      <Link
        href="/#book"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 px-6 py-4 font-extrabold text-green-400 shadow-[0_10px_40px_rgba(34,211,238,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(34,211,238,0.35)]"
      >
        Book AC Service <span aria-hidden="true">↗</span>
      </Link>

      <a
        href={`tel:${PHONE}`}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-4 font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/10"
      >
        <span aria-hidden="true">☎</span> Call Technician
      </a>
    </div>
  );
}

function FAQ({ content, location }) {
  const faqs = content.faqs || [];

  const additionalFaqs = [
    {
      question: `How do I arrange AC service in ${location.name}?`,
      answer:
        "Contact SC Cool Service by phone or WhatsApp. Share your location, AC type and the problem you are experiencing so the service requirements can be discussed.",
    },
    {
      question: "What should I check before booking an AC technician?",
      answer:
        "Note the symptoms, when they started and whether the unit has any unusual sounds or leakage. You can also check the remote batteries and the settings. Avoid opening electrical or refrigerant components yourself.",
    },
    {
      question: "Does every cooling problem require gas refilling?",
      answer:
        "No. Weak cooling can result from several issues, including airflow restrictions or other faults. The cause should be assessed before deciding whether refrigerant work is necessary.",
    },
    {
      question: "Can I ask about the service charges before the visit?",
      answer:
        "Yes. Ask about the inspection fee, service charges, possible additional costs and the scope of work before confirming the appointment.",
    },
  ];

  const combinedFaqs = [
    ...faqs,
    ...additionalFaqs.filter(
      (extra) =>
        !faqs.some(
          (existing) =>
            existing.question.trim().toLowerCase() ===
            extra.question.trim().toLowerCase()
        )
    ),
  ];

  return (
    <section id="faqs" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-cyan-100/70 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Helpful answers"
          title={`AC service FAQs in ${location.name}`}
          description="Understand the booking process, common AC symptoms and what to discuss before approving service."
        />

        <div className="mt-12 space-y-4">
          {combinedFaqs.map((faq, index) => (
            <motion.details
              key={faq.question}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: Math.min(index * 0.035, 0.2) }}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.035)] transition duration-300 open:border-cyan-200 open:bg-cyan-50/50 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 marker:hidden">
                <span>{faq.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg transition group-open:rotate-45 group-open:bg-cyan-100">
                  +
                </span>
              </summary>
              <p className="mt-4 pr-5 text-sm leading-7 text-slate-600 sm:text-base">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceLinks({ location }) {
  const services = [
    {
      title: "AC Installation",
      slug: "ac-installation",
      description: "Explore installation services.",
    },
    {
      title: "AC Maintenance",
      slug: "ac-maintenance",
      description: "Learn about routine AC care.",
    },
    {
      title: "AC Service Near You",
      slug: "ac-service-near",
      description: "Find service information for your area.",
    },
  ];

  return (
    <section className="bg-slate-100 px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-800">
          Explore more
        </span>

        <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
          More AC services in {location.name}
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Explore other service options and decide which best matches your AC
          requirements.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={`/${service.slug}/${location.slug}`}
                className="group block h-full rounded-3xl border border-white bg-white p-6 shadow-sm transition duration-300 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/5"
              >
                <h3 className="text-xl font-extrabold text-slate-900 transition group-hover:text-cyan-800">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex font-bold text-cyan-800">
                  Explore service <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ACServicePage({ location }) {
  useSmoothAnimations();

  const shouldReduceMotion = useReducedMotion();
  const c = getLocationServiceContent("service", location);

  if (!c) return null;

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <>
      <SEO
        title={c.title}
        description={c.description}
        path={`/ac-service/${location.slug}`}
      />

      <Nav />

      <main className="overflow-hidden bg-white text-slate-950">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#041323] text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_20%,rgba(6,182,212,0.24),transparent_38%),radial-gradient(ellipse_at_88%_75%,rgba(37,99,235,0.28),transparent_35%)]" />

          <motion.div
            aria-hidden="true"
            className="hero-orb pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-[90px] sm:h-96 sm:w-96"
            animate={shouldReduceMotion ? {} : { x: [0, 20, 0], y: [0, -18, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:52px_52px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:py-32">
            <div>
              <motion.div {...motionProps}>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-xl sm:text-sm">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
                  AC SERVICE · {location.name}
                </span>
              </motion.div>

              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="mt-7 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl"
              >
                {c.h1}
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-sky-400 to-blue-400 bg-clip-text pb-2 text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                  Comfort starts with the right care.
                </span>
              </motion.h1>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                {c.intro} Get in touch with SC Cool Service to discuss AC
                inspection, cleaning, cooling issues and repair requirements in{" "}
                {location.name}.
              </motion.p>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28 }}
              >
                <ActionButtons />
              </motion.div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-300">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  <span aria-hidden="true">↗</span> Chat on WhatsApp
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 font-semibold text-cyan-200 transition hover:text-white"
                >
                  Explore services <span aria-hidden="true">↓</span>
                </a>
              </div>

              <p className="mt-8 max-w-xl border-l-2 border-cyan-400/60 pl-4 text-sm leading-6 text-slate-400">
                Tell us your AC type and the issue you are facing. Service
                availability and charges can be discussed before confirming
                your appointment.
              </p>
            </div>

            {/* HERO GLASS PANEL */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                      Service overview
                    </span>
                    <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                      Your AC, understood.
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-cyan-300/20 to-blue-500/20 text-3xl shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                    ❄️
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Start with the symptoms. Understand the possible next steps
                  before deciding on service.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {services.slice(0, 4).map((service, index) => (
                    <motion.div
                      key={service.number}
                      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.015 }}
                      className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.025] p-4 transition-colors hover:border-cyan-300/30"
                    >
                      <span className="text-2xl">{service.icon}</span>
                      <h3 className="mt-4 text-sm font-extrabold text-white sm:text-base">
                        {service.title}
                      </h3>
                      <span className="mt-2 block text-xs font-semibold tracking-widest text-cyan-300">
                        {service.number}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl" aria-hidden="true">✓</span>
                    <div>
                      <p className="font-bold text-emerald-200">
                        Know what you are approving
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Discuss the diagnosis, scope of work and applicable
                        charges before authorising repairs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
        </section>

        {/* INTRODUCTION */}
        <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
          <div className="pointer-events-none absolute -left-36 top-10 h-80 w-80 rounded-full bg-cyan-100/60 blur-[100px]" />

          <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div className="service-reveal">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-800">
                Local AC service
              </span>
              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Looking for AC service in{" "}
                <span className="bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
                  {location.name}
                </span>
                ?
              </h2>
            </div>

            <div className="service-reveal space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                An air conditioner may need attention when cooling becomes
                inconsistent, airflow decreases, water starts dripping or
                unfamiliar sounds appear. The right next step depends on the
                symptoms and the condition of the unit.
              </p>
              <p>
                SC Cool Service helps you discuss your AC service requirements
                in {location.name}. Explain what you have noticed, share the
                type of air conditioner and ask which inspection or service
                may be appropriate.
              </p>
              <p>
                Whether you need routine cleaning or help investigating a
                performance issue, understanding the problem first can help
                you make a more informed decision about the work required.
              </p>

              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 font-extrabold text-cyan-800 underline decoration-cyan-300 underline-offset-4 transition hover:text-blue-800"
              >
                Discuss your AC service requirements <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* SERVICE CARDS */}
        <section id="services" className="relative bg-slate-50 px-5 py-20 sm:px-8 lg:py-28">
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100/70 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow={`Services in ${location.name}`}
              title="The right attention for your AC"
              description="Explore common service requirements and discuss which option is appropriate for your unit."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <motion.article
                  key={service.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
                  whileHover={shouldReduceMotion ? {} : { y: -7 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.035)] transition-shadow duration-300 hover:border-cyan-200 hover:shadow-[0_25px_60px_rgba(8,145,178,0.10)] sm:p-8"
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition duration-500 group-hover:opacity-100`} />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 text-2xl shadow-sm transition duration-300 group-hover:scale-105">
                        {service.icon}
                      </span>
                      <span className="text-sm font-black tracking-[0.18em] text-slate-300 group-hover:text-cyan-700">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-extrabold text-slate-950 sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                      {service.text}
                    </p>

                    <a
                      href={`tel:${PHONE}`}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-cyan-800"
                    >
                      Discuss this service <span className="transition group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* COMMON PROBLEMS */}
        <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div className="service-reveal">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-800">
                Identify the symptoms
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Small changes can tell you when your AC needs attention.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                If your AC is behaving differently, describe the issue rather
                than assuming a particular component has failed. A proper
                assessment helps identify the appropriate next step.
              </p>

              <div className="mt-8 rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6 sm:p-7">
                <span className="text-2xl" aria-hidden="true">💡</span>
                <h3 className="mt-4 text-lg font-extrabold">
                  A useful tip before calling
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Note when the problem started, the AC mode and temperature
                  settings, and whether the issue happens every time you use
                  the unit.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {problems.map((problem, index) => (
                <motion.article
                  key={problem.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/5 sm:p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                    {problem.icon}
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold leading-snug">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {problem.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="relative overflow-hidden bg-[#071a2c] px-5 py-20 text-white sm:px-8 lg:py-28">
          <div className="pointer-events-none absolute left-1/3 top-0 h-80 w-80 rounded-full bg-blue-500/15 blur-[110px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]" />

          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="A simple process"
              title="From your first call to the next step"
              description="Know what to share, what to confirm and what to discuss before service begins."
              light
            />

            <div className="relative mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <div className="pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-cyan-400/0 via-cyan-300/40 to-blue-400/0 xl:block" />

              {process.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="relative rounded-3xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.075]"
                >
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-300/20 to-blue-500/20 text-xl font-black text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                    {step.number}
                  </span>
                  <h3 className="mt-7 text-xl font-extrabold leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {step.text}
                  </p>
                </motion.article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <ActionButtons />
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
          <div className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-100/70 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="A better service experience"
              title={`AC service with clarity in ${location.name}`}
              description="A useful service experience starts with listening to the problem, explaining the work and communicating clearly."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, index) => (
                <motion.article
                  key={benefit.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/5"
                >
                  <span className="text-3xl">{benefit.icon}</span>
                  <h3 className="mt-5 text-lg font-extrabold">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* MAINTENANCE TIPS */}
        <section className="bg-gradient-to-br from-slate-50 via-cyan-50/60 to-blue-50/70 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="service-reveal">
              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-800">
                Practical AC care
              </span>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Simple habits that support everyday AC performance
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Regular care can help you notice problems early and maintain
                the airflow your unit needs. Always follow the manufacturer's
                instructions for your particular model.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/ac-maintenance/${location.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-cyan-950"
                >
                  Explore AC maintenance <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-9">
              <h3 className="text-xl font-black sm:text-2xl">
                Your AC care checklist
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A few practical things to keep in mind at home or in the
                workplace.
              </p>

              <ul className="mt-7 space-y-4">
                {careTips.map((tip, index) => (
                  <li key={tip} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-black text-cyan-800">
                      ✓
                    </span>
                    <span className="text-sm leading-7 text-slate-700 sm:text-base">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* LOCAL CONTENT */}
        <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="service-reveal rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_15px_60px_rgba(15,23,42,0.05)] sm:p-10 lg:p-12">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-800">
                Service area
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Discuss your AC requirements in {location.name}
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  If you are looking for AC service in {location.name}, begin
                  by sharing the type of AC you have, the symptoms and any
                  previous service details that may be useful. This information
                  can help establish what needs to be discussed before a visit.
                </p>
                <p>
                  Before confirming service, ask about appointment availability,
                  inspection charges, the expected scope of work and any
                  additional costs. The final recommendation should depend on
                  the condition of your AC rather than assumptions about the
                  fault.
                </p>
                <p>
                  Contact SC Cool Service by phone or WhatsApp to discuss your
                  requirements and determine the next steps for your property
                  in {location.name}.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-700"
                >
                  WhatsApp enquiry ↗
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 font-bold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-800"
                >
                  Call for details
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ content={c} location={location} />

        {/* OTHER SERVICE LINKS */}
        <ServiceLinks location={location} />

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-[#041323] px-5 py-20 text-white sm:px-8 lg:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(6,182,212,0.22),transparent_35%),radial-gradient(ellipse_at_90%_40%,rgba(37,99,235,0.22),transparent_35%)]" />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute right-10 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[90px]"
            animate={shouldReduceMotion ? {} : { y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-cyan-300/25 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              Need AC service?
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Let's discuss your AC needs in{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                {location.name}
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Tell us what is happening with your AC, ask about the available
              service options and confirm the details before booking.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/#book"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 px-7 py-4 font-extrabold text-green-400 shadow-[0_12px_45px_rgba(34,211,238,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(34,211,238,0.35)]"
              >
                Book AC Service ↗
              </Link>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-7 py-4 font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50"
              >
                WhatsApp Us
              </a>
            </div>

            <p className="mt-7 text-sm text-slate-400">
              Service availability, appointment details and applicable charges
              should be confirmed before booking.
            </p>
          </div>
        </section>
    <GoogleReviewsCarousel/>
      </main>

    <FloatingActions/>
      <Footer />
    </>
  );
}