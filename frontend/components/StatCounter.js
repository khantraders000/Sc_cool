import { useEffect, useRef } from 'react';

export default function StatCounter({ target, decimal, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let animated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            import('gsap').then(({ default: gsap }) => {
              const obj = { val: 0 };
              gsap.to(obj, {
                val: target,
                duration: 1.6,
                ease: 'power2.out',
                onUpdate: () => {
                  el.textContent = decimal ? (obj.val / decimal).toFixed(1) : Math.round(obj.val).toLocaleString('en-IN');
                },
              });
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimal]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
