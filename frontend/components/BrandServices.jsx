import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Brand names are text references only; this is not an exhaustive list of every manufacturer.
const brands = [
  "Voltas", "Daikin", "LG", "Samsung", "Panasonic", "Blue Star", "Hitachi", "Carrier",
  "Mitsubishi Electric", "Mitsubishi Heavy Industries", "O General", "Godrej", "Whirlpool",
  "Haier", "IFB", "Lloyd", "Toshiba", "Sharp", "Hisense", "Onida", "Electrolux",
  "Midea", "Trane", "York", "Kelvinator", "Videocon", "Croma", "AmazonBasics"
];

export default function BrandServices() {
  const gridRef = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".brand-chip", {
        y: 18, autoAlpha: 0, duration: 0.45, stagger: 0.035, ease: "power2.out"
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="content-section brand-section" id="brands" aria-labelledby="brands-title">
      <div className="section-heading">
        <div><p className="section-kicker"><span>04</span> AC BRANDS</p><h2 id="brands-title">AC brands we can help with</h2></div>
        <p>Repair, servicing, installation and maintenance enquiries for many popular AC brands. Parts, expertise and appointment availability depend on the model and issue.</p>
      </div>
      <div className="brand-service-banner">
        <strong>One service team. Multiple AC brands.</strong>
        <span>Repair · Servicing · Installation · Maintenance</span>
      </div>
      <div className="brand-grid" ref={gridRef}>
        {brands.map((brand) => <div className="brand-chip" key={brand}><span className="brand-mark" aria-hidden="true">❄</span><span>{brand}</span></div>)}
      </div>
      <p className="brand-disclaimer">Brand names are used only to identify compatible service enquiries. SC Cool Service is independent and is not claiming to be authorised, affiliated with or endorsed by these manufacturers. Confirm service availability for your model before booking.</p>
    </section>
  );
}
