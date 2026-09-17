# Sc Cool AC Services — Website

A production-style website for a local AC repair/installation business.

- **frontend/** — Next.js (React) site: SEO-friendly (server-rendered pages,
  meta tags, JSON-LD), Tailwind CSS, GSAP + Lenis for scroll animation, and a
  Three.js hero scene.
- **backend/** — Express API with a single booking endpoint that emails the
  business and SMS's the assigned technician a live Google Maps link the
  moment a customer submits the form, plus a confirmation SMS to the customer.

## Why Next.js instead of a plain React app

Next.js server-renders every page (instead of shipping a blank HTML shell and
building the page in the browser), which is what lets Google actually read
your content and rank it — a plain client-only React app is much harder to
get indexed well. It also gives you per-page `<title>`/meta tags out of the
box, which the `/about` page uses.

## Project layout

```
Sc Cool/
  frontend/     Next.js app (pages, components, styles)
  backend/      Express API (booking, email, SMS)
```

## 1. Run the backend

```bash
cd backend
npm install
cp .env.example .env
# then edit .env with your real SMTP + Twilio credentials
npm run dev        # starts on http://localhost:4000
```

Required environment variables are documented inline in `.env.example`:

- **SMTP\_\*** — for the booking email (works with Gmail App Passwords or any
  SMTP provider).
- **TWILIO\_\*** — for SMS. Twilio is used by default; a Fast2SMS alternative
  (often simpler for Indian numbers) is documented and stubbed out in
  `backend/utils/sms.js`.
- **BUSINESS_EMAIL** / **TECHNICIAN_PHONE** — who receives each booking.

## 2. Run the frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev         # starts on http://localhost:3000
```

`NEXT_PUBLIC_API_URL` in `.env.local` should point at the backend
(`http://localhost:4000` by default).

## How the location tracking works

1. On the booking form, the customer types their address and can optionally
   tap the GPS icon to capture their exact coordinates
   (`navigator.geolocation`).
2. On submit, the frontend POSTs everything to `POST /api/book` on the
   Express backend.
3. The backend (`backend/utils/maps.js`) builds a Google Maps link — an
   exact pin if GPS coordinates were captured, otherwise a maps search built
   from the typed address.
4. That link is emailed to `BUSINESS_EMAIL` (`backend/utils/email.js`) and
   texted to `TECHNICIAN_PHONE` (`backend/utils/sms.js`), so the technician
   can open it on their phone and navigate/track in real time. A short
   confirmation SMS is also sent to the customer.

## Adding real technician photos

`frontend/pages/about.js` currently lists four placeholder technician
profiles rendered with initials instead of photos (`frontend/components/TeamMember.js`).
To use real photos:

1. Add image files under `frontend/public/technicians/`.
2. In `TeamMember.js`, replace the initials `<span>` with:
   ```jsx
   <img
     src={`/technicians/${photo}`}
     alt={name}
     className="w-full h-full object-cover"
   />
   ```
3. Pass a `photo` prop per team member in `about.js` and update the names,
   roles and bios to your real staff.

## Deployment notes

- Frontend deploys cleanly to Vercel (`vercel.json` not required) or any
  Node host that runs `next build && next start`.
- Backend deploys to any Node host (Render, Railway, a small VPS, etc.).
  Just set the same environment variables from `.env.example` there, and
  update `CORS_ORIGIN` to your deployed frontend URL and
  `NEXT_PUBLIC_API_URL` to your deployed backend URL.
