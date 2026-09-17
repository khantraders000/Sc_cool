export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919793997768"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="focus-ring w-12 h-12 rounded-full bg-success/90 hover:bg-success flex items-center justify-center shadow-lg shadow-black/30 transition-colors"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#0F1B24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.34a9.9 9.9 0 004.62 1.13h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.87 14.09c-.25.71-1.25 1.3-2.05 1.47-.55.11-1.26.2-3.67-.79-3.08-1.27-5.06-4.4-5.21-4.6-.15-.2-1.25-1.66-1.25-3.17 0-1.51.79-2.25 1.07-2.56.28-.31.61-.39.81-.39.2 0 .41 0 .59.01.19.01.44-.07.69.53.25.6.86 2.07.94 2.22.08.15.13.33.03.53-.11.2-.16.33-.31.5-.15.18-.32.4-.46.54-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.48 1.53.3.15.48.13.65-.08.18-.2.76-.89.97-1.19.2-.3.4-.25.68-.15.28.1 1.78.84 2.08.99.3.15.5.23.58.35.07.13.07.73-.18 1.44z" />
        </svg>
      </a>
      <a
        href="tel:+919793997768"
        aria-label="Call now"
        className="focus-ring w-12 h-12 rounded-full bg-copper hover:bg-[#DA9552] flex items-center justify-center shadow-lg shadow-black/30 transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1B24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      </a>
    </div>
  );
}
