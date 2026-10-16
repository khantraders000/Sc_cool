import { useEffect } from "react";

export default function useSmoothAnimations() {
  useEffect(() => {
    let cancelled = false;
    let rafId = null;
    let lenis = null;
    let ctx = null;
    let ScrollTrigger = null;
    let scrollHandler = null;

    async function setup() {
      try {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        const [gsapModule, scrollModule, lenisModule] =
          await Promise.all([
            import("gsap"),
            import("gsap/dist/ScrollTrigger"),
            import("lenis"),
          ]);

        // Component unmount ho chuka ho toh setup mat karo.
        if (cancelled) return;

        const gsap = gsapModule.gsap || gsapModule.default;

        ScrollTrigger =
          scrollModule.ScrollTrigger || scrollModule.default;

        const Lenis = lenisModule.default;

        gsap.registerPlugin(ScrollTrigger);

        // Reduced-motion preference mein normal scrolling rakho.
        if (prefersReducedMotion) return;

        // Smooth scrolling ka sirf ek instance is hook se banega.
        lenis = new Lenis({
          duration: 1.05,
          smoothWheel: true,
          syncTouch: false,
          autoRaf: false,
        });

        scrollHandler = () => {
          ScrollTrigger.update();
        };

        lenis.on("scroll", scrollHandler);

        const raf = (time) => {
          if (cancelled || !lenis) return;

          lenis.raf(time);
          rafId = window.requestAnimationFrame(raf);
        };

        rafId = window.requestAnimationFrame(raf);

        // Is context ke animations cleanup par revert honge.
        ctx = gsap.context(() => {
          gsap.utils
            .toArray(".service-reveal")
            .forEach((element) => {
              gsap.fromTo(
                element,
                {
                  autoAlpha: 0,
                  y: 24,
                },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.65,
                  ease: "power2.out",
                  clearProps: "transform,visibility",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 88%",
                    once: true,
                  },
                }
              );
            });
        });

        // Layout measure hone ke baad trigger positions update karo.
        ScrollTrigger.refresh();
      } catch (error) {
        if (!cancelled) {
          console.error("Smooth animation setup failed:", error);
        }
      }
    }

    setup();

    return () => {
      cancelled = true;

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }

      // Sirf isi hook ke animation context ko clean karo.
      ctx?.revert();

      if (lenis && scrollHandler) {
        lenis.off("scroll", scrollHandler);
      }

      lenis?.destroy();

      // Global ScrollTrigger.getAll().forEach(...).kill()
      // intentionally use nahi kiya: woh doosre components
      // ke scroll triggers ko bhi affect kar sakta hai.
    };
  }, []);
}