import { useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import ScrollProgress from './ScrollProgress';

const NAV_OFFSET = 64; // matches the fixed navbar height (h-16), so scrolled-to sections aren't hidden under it

export default function Layout({ children }) {
  useEffect(() => {
    let lenis;
    let rafId;
    let onAnchorClick;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    (async () => {
      const gsapModule = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      if (!reduceMotion) {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({ duration: 1.05, smoothWheel: true });
        const raf = (time) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        /*
          Nav.js / Footer.js use next/link for real page-to-page navigation
          (that already avoids full page reloads — Link renders an <a> tag
          in the HTML for SEO/crawlers, but Next.js intercepts the click and
          only swaps content). The only genuine <a href="#..."> tags left are
          same-page hash links (e.g. "Book Free Inspection" -> #book). Lenis
          doesn't know about those by default, so without this handler they'd
          jump instantly instead of smooth-scrolling. This intercepts any
          same-page hash click (including the rendered <Link> anchors) and
          asks Lenis to animate to it, offset for the fixed navbar.
        */
        onAnchorClick = (e) => {
          const anchor = e.target.closest('a[href*="#"]');
          if (!anchor) return;

          const url = new URL(anchor.href, window.location.href);
          const samePage = url.pathname === window.location.pathname;
          if (!samePage || !url.hash) return;

          const target = document.querySelector(url.hash);
          if (!target) return;

          e.preventDefault();
          lenis.scrollTo(target, { offset: -NAV_OFFSET });
          history.pushState(null, '', url.hash);
        };
        document.addEventListener('click', onAnchorClick);

        // Landing directly on a hash URL (e.g. /#faq, or arriving from another
        // page): correct the initial jump so it also respects the nav offset.
        if (window.location.hash) {
          const target = document.querySelector(window.location.hash);
          if (target) {
            requestAnimationFrame(() => lenis.scrollTo(target, { offset: -NAV_OFFSET, immediate: true }));
          }
        }

        // one orchestrated reveal per section, staggered children within
        document.querySelectorAll('.reveal-section').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 26 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 82%' },
            }
          );
        });

        const cardsGroup = document.getElementById('services-grid');
        if (cardsGroup) {
          gsap.fromTo(
            '.service-card',
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: 'power2.out',
              stagger: 0.08,
              scrollTrigger: { trigger: cardsGroup, start: 'top 78%' },
            }
          );
        }

        const stepsGroup = document.querySelector('.process-steps');
        if (stepsGroup) {
          gsap.fromTo(
            '.process-step',
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              stagger: 0.15,
              scrollTrigger: { trigger: stepsGroup, start: 'top 78%' },
            }
          );
        }

        const teamGroup = document.getElementById('team-grid');
        if (teamGroup) {
          gsap.fromTo(
            '.team-card',
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: 'power2.out',
              stagger: 0.1,
              scrollTrigger: { trigger: teamGroup, start: 'top 78%' },
            }
          );
        }
      }
    })();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (onAnchorClick) document.removeEventListener('click', onAnchorClick);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
}
