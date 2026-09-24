"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    title: "Mumbai & Western Suburbs",
    text: `SC Cool AC Services provides AC repair, installation, gas refill, maintenance and deep cleaning services across major Mumbai locations including Bandra, Khar Road, Santacruz, Vile Parle, Andheri, Jogeshwari, Ram Mandir, Goregaon, Malad, Kandivali, Borivali, Mahim, Matunga, Dadar, Prabhadevi, Lower Parel, Mahalaxmi, Mumbai Central, Grant Road, Charni Road, Marine Lines, Churchgate, CSMT, Masjid, Sandhurst Road, Byculla, Chinchpokli, Curry Road and Parel.`,
  },

  {
    title: "Thane, Kalyan & Central Mumbai",
    text: `Our AC technicians also serve customers around Vidyavihar, Ghatkopar, Vikhroli, Kanjurmarg, Bhandup, Nahur, Mulund, Thane, Dombivli, Kalyan, Thakurli, Ulhasnagar, Vithalwadi and Ambarnath. Customers in these areas can contact SC Cool for AC repair, installation, gas refill, deep cleaning and AMC services.`,
  },

  {
    title: "Navi Mumbai & Panvel",
    text: `SC Cool AC Services covers Navi Mumbai areas including Wadala Road, GTB Nagar, Tilak Nagar, Chembur, Vashi, Sanpada, Juinagar, Nerul, Seawoods-Darave, Karave, CBD Belapur, Kharghar, Belpada, Mansarovar, Khandeshwar and Panvel. Our service team handles residential and commercial air-conditioning requirements across these locations.`,
  },

  {
    title: "Uran, Nhava Sheva & Navi Mumbai Railway Belt",
    text: `We also provide AC services around Targhar, Bamandongri, Kharkopar, Gavhan, Shematikhar, Nhava Sheva, Dronagiri and Uran. These areas are included in our service coverage for AC installation, repair, maintenance, gas refill and cleaning requirements.`,
  },

  {
    title: "Kasara, Karjat & Khopoli",
    text: `SC Cool also serves customers along the Kasara, Karjat and Khopoli side, including Khadavli, Vasind, Asangaon, Atgaon, Thansit, Khardi, Umbermali, Kasara, Vangani, Shelu, Neral, Bhivpuri Road, Karjat, Palasdari, Kelavli, Dolavli, Lowjee and Khopoli.`,
  },
];

const typingWords = [
  "Mumbai",
  "Thane & Kalyan",
  "Navi Mumbai",
  "Panvel",
  "Uran & Nhava Sheva",
  "Karjat & Khopoli",
];

export default function ServiceAreas() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const eyebrowRef = useRef(null);
  const cardsRef = useRef(null);

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  /*
   * ------------------------------------------------
   * LENIS SMOOTH SCROLL
   * ------------------------------------------------
   */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
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

  /*
   * ------------------------------------------------
   * TYPEWRITER
   * Fixed-height wrapper prevents layout shifting
   * ------------------------------------------------
   */
  useEffect(() => {
    const currentWord = typingWords[wordIndex];

    const typingSpeed = deleting ? 45 : 75;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayText((prev) => {
          const next = currentWord.slice(0, prev.length + 1);

          if (next === currentWord) {
            setTimeout(() => {
              setDeleting(true);
            }, 1600);
          }

          return next;
        });
      } else {
        setDisplayText((prev) => {
          const next = prev.slice(0, -1);

          if (next === "") {
            setDeleting(false);
            setWordIndex((prevIndex) => {
              return (prevIndex + 1) % typingWords.length;
            });
          }

          return next;
        });
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, deleting, wordIndex]);

  /*
   * ------------------------------------------------
   * GSAP SCROLL ANIMATIONS
   * ------------------------------------------------
   */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        eyebrowRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        ".service-description",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="service-areas"
      className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-32"
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-full
          h-full
          bg-bgDeep border-y
           border-cyan/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">
          <div
            ref={eyebrowRef}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-cyan-400/60" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-400 sm:text-xs">
              Service Areas
            </span>

            <span className="h-px w-8 bg-cyan-400/60" />
          </div>

          {/* SEO-FRIENDLY STATIC HEADING */}
          <h2
            ref={headingRef}
            className="
              font-[var(--font-display)]
              text-4xl
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            AC Services Across
          </h2>
          <div
            className="
              mt-3
              flex
              h-[64px]
              items-center
              justify-center
              overflow-hidden
              sm:h-[78px]
              md:h-[88px]
            "
          >
            <div
              className="
                font-[var(--font-display)]
                text-4xl
                font-bold
                leading-none
                tracking-[-0.04em]
                text-cyan-400
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
              aria-hidden="true"
            >
              {displayText}
              <span className="ml-1 inline-block animate-pulse text-cyan-300">
                |
              </span>
            </div>
          </div>

          <p
            className="
              service-description
              mx-auto
              mt-7
              max-w-3xl
              text-sm
              leading-7
              text-zinc-400
              sm:text-base
              sm:leading-8
              md:text-lg
            "
          >
            SC Cool AC Services provides professional air-conditioning repair,
            installation, gas refill, deep cleaning and AMC services across
            Mumbai, Thane, Navi Mumbai, Panvel, Uran, Karjat, Kasara and
            Khopoli.
          </p>
        </div>

        {/* SERVICE AREA CARDS */}
        <div
          ref={cardsRef}
          className="mt-16 grid gap-5 md:grid-cols-2"
        >
          {areas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.25,
                },
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.09]
                bg-white/[0.025]
                p-6
                backdrop-blur-sm
                transition-colors
                duration-300
                hover:border-cyan-400/30
                hover:bg-white/[0.045]
                sm:p-7
                lg:p-8
              "
            >
              {/* Card glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-cyan-400/[0.07]
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-cyan-400/[0.13]
                "
              />

              <div className="relative">
                {/* Number */}
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-cyan-400/20
                      bg-cyan-400/[0.06]
                      text-xs
                      font-semibold
                      text-cyan-400
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px flex-1 bg-white/[0.07] ml-4" />
                </div>

                <h3
                  className="
                    font-[var(--font-display)]
                    text-xl
                    font-semibold
                    tracking-[-0.02em]
                    text-white
                    sm:text-2xl
                  "
                >
                  {area.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-zinc-400
                    sm:text-[15px]
                    sm:leading-7
                  "
                >
                  {area.text}
                </p>

                <div className="mt-6 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-16" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-14
            max-w-4xl
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.02]
            px-6
            py-5
            text-center
          "
        >
          <p className="text-sm leading-7 text-zinc-500 sm:text-base">
            Looking for AC repair, installation, gas refill, cleaning or AMC
            service near you? Contact SC Cool AC Services to check technician
            availability in your location.
          </p>
        </motion.div>
      </div>
    </section>
  );
}