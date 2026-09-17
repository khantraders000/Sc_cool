import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-5 md:px-8 pt-16 pb-8 bg-bgDeep">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-cyan/10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="6" fill="#142530" />
              <path d="M16 6v20M8 10l16 12M24 10L8 22" stroke="#4FD1D9" strokeWidth="2" strokeLinecap="round" />
              <circle cx="16" cy="16" r="3.2" fill="#C9843F" />
            </svg>
            <span className="font-display font-semibold">SC Cool Service</span>
          </div>
          <p className="text-sm text-inkdim leading-relaxed">
            Mumbai&apos;s trusted AC repair and installation service, running since 2016.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <ul className="text-sm text-inkdim space-y-2.5">
            <li>AC Installation</li>
            <li>Repair &amp; Diagnosis</li>
            <li>Gas Refill</li>
            <li>AMC Plans</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="text-sm text-inkdim space-y-2.5">
            <li><Link href="/#why-us" className="hover:text-ink transition-colors">Why Us</Link></li>
            <li><Link href="/about" className="hover:text-ink transition-colors">About Us</Link></li>
            <li><Link href="/#reviews" className="hover:text-ink transition-colors">Reviews</Link></li>
            <li><Link href="/#book" className="hover:text-ink transition-colors">Book Now</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <ul className="text-sm text-inkdim space-y-2.5">
            <li><a href="tel:+919793997768" className="hover:text-ink transition-colors">+91 97939 97768</a></li>
            <li><a href="mailto:chaudhariwalid@gmail.com" className="hover:text-ink transition-colors">chaudhariwalid@gmail.com</a></li>
            <li>Mumbai, Maharastra</li>
            <li>Open daily 7 AM – 10 PM</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-inkdim/70">
        <p>&copy; 2026 SC Cool AC Services. All rights reserved.</p>
        <p>Keeping Mumbai cool, one home at a time.</p>
      </div>
    </footer>
  );
}
