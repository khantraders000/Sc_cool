import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/#services', label: 'Services' },
    { href: '/#process', label: 'Process' },
    { href: '/#why-us', label: 'Why Us' },
    { href: '/#reviews', label: 'Reviews' },
    { href: '/about', label: 'About Us' },
    { href: '/#faq', label: 'FAQ' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 nav-blur border-b border-cyan/10 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2.5 focus-ring rounded">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="6" fill="#142530" />
            <path d="M16 6v20M8 10l16 12M24 10L8 22" stroke="#4FD1D9" strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="16" r="3.2" fill="#C9843F" />
          </svg>
          <span className="font-display font-semibold text-lg tracking-tight">SC Cool Service</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-inkdim">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-ink transition-colors focus-ring rounded">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919793997768" className="text-sm text-inkdim hover:text-ink transition-colors">
            +91 97939 97768
          </a>
          <Link href="/#book" className="btn-copper text-sm font-semibold px-4 py-2 rounded-sm focus-ring">
            Book Free Inspection
          </Link>
        </div>

        <button
          className="md:hidden p-2 focus-ring rounded"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F2EEE4" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F2EEE4" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-cyan/10 bg-bgDeep px-5 py-5 flex flex-col gap-4 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-1" onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href="tel:+919793997768" className="py-1 text-cyan">
            Call: +91 97939 97768
          </a>
          <Link href="/#book" className="btn-copper text-center font-semibold px-4 py-2.5 rounded-sm mt-1" onClick={() => setMenuOpen(false)}>
            Book Free Inspection
          </Link>
        </div>
      )}
    </header>
  );
}
