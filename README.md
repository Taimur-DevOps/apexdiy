# Apex DIY — Marketing Website (Phase 1)

A static marketing website for **Apex DIY**, a Melbourne self-service
automotive workshop that rents bays, hoists, and tools by the hour.

Built with Next.js App Router, React, Tailwind CSS, and JavaScript
(no TypeScript, per project requirements).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build and run a production server:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.js          Root layout: metadata, fonts, theme init script, JSON-LD
  page.js             Home page — assembles all sections
  globals.css         Design tokens (CSS variables) + light/dark theme layer
  sitemap.js          Dynamic sitemap.xml
  robots.js           Dynamic robots.txt
components/
  layout/             Header, MobileNav (client), Footer
  sections/           One component per page section (Hero, About, FAQ, ...)
  ui/                 Reusable pieces: Button, SectionHeading, cards, FAQItem
  forms/               ContactForm (client, isolated submission logic)
data/
  site.js             Business info, nav, SEO config — single source of truth
  services.js, faqs.js, testimonials.js, facility.js, howItWorks.js, gallery.js
public/
  images/              Supplied photography, referenced via next/image
```

## Notes for Phase 2

- The **Book Your Bay** CTA points at `siteConfig.bookingHref` in
  `data/site.js`. Change that single value to `/book` (or an external
  booking app URL) when the booking system ships — no component changes
  needed.
- `components/forms/ContactForm.jsx` isolates submission logic in a single
  `submitContactForm()` function. Replace its body with a real API call
  (API route, form service, or CRM) without touching the form UI.
- All business content lives in `data/`, so a future CMS/API integration
  can replace the data layer without touching presentation components.

## Light / dark mode

The toggle in the header switches a `data-theme` attribute on `<html>`
between `light` (default) and `dark`, persisted to `localStorage`. Catalog
sections (About, Services, Facility, Gallery, Reviews, FAQ, Contact) use
theme-aware tokens (`bg`, `fg`, `line`, ...) that flip between the two
modes. The Hero and Footer intentionally stay on the brand's black
"storytelling" surface in both themes, matching the supplied design
system's fixed white → black → yellow → black page rhythm.

## Fonts

The design system specifies **NouvelR** (proprietary) with **Manrope** as
the suggested open-source substitute. Manrope is self-hosted via
`@fontsource/manrope` (weights 400/600/700) rather than fetched from
Google Fonts at build time, for reliability and privacy.
