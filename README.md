# SHIFT — Relocation Platform

A complete React + Vite relocation booking demo based on the supplied project requirements.

## Included
- Customer registration and login
- Home, About, Services, Contact, Booking and My Bookings pages
- House shifting, office relocation, furniture moving and delivery services
- Booking/enquiry submission with status tracking
- Admin login and dashboard
- Admin booking, enquiry and customer management
- Local Storage persistence with safe JSON parsing
- Framer Motion animations
- Light gradient visual theme
- Local hero background video at `public/videos/hero-video.mp4`
- Vercel SPA rewrite configuration
- Reload behavior: refreshing a non-home route redirects to `/` while normal React navigation still works

## Demo admin login
Email: `admin@shift.com`
Password: `admin123`

## Run locally
```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
```

## Vercel refresh fix
`vercel.json` rewrites application routes to `index.html`, preventing Vercel from returning a 404 before React loads. `src/main.jsx` detects a browser reload on a non-home path and sends the user to `/`.

This intentionally matches the requested behavior: in-app navigation can open `/contact`, `/services`, `/booking`, etc., but refreshing those routes returns to the Home page.

## Replace the hero video
Replace `public/videos/hero-video.mp4` with your own MP4 while keeping the same filename, or update the `<source>` path in `src/pages/Home.jsx`. The SVG poster remains as the fallback visual.

## Data storage
This project is frontend-only and uses Local Storage. There is no production backend/database. Authentication and admin access are demo/local authentication and should not be treated as production security.
