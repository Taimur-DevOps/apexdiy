// Centralized site configuration.
// Keep business facts here so nothing is hardcoded across components.
// When Phase 2 (booking system) ships, update `bookingHref` in one place.

export const siteConfig = {
  name: "Apex DIY",
  tagline: "Work On Your Car Your Way",
  description:
    "Rent professional workshop bays, hoists, and tools at Apex DIY Melbourne.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.apexdiy.com.au").replace(/\/$/, ""),

  // Booking CTA destination. Currently a placeholder anchor since there is
  // no booking system yet (Phase 1). Change this single value when the
  // booking application is introduced in Phase 2.
  bookingHref: "#contact",
  bookingLabel: "Book Your Bay",

  business: {
    address: {
      streetAddress: "123 Torque Lane",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
      // full: "123 Torque Lane, Melbourne, VIC",
    },
    hours: [
      { days: "Monday – Sunday", time: "8:00 AM – 8:00 PM" },
    ],
    email: "connect@apexdiy.com.au",
    phone: "+61 410 995 584",
    phoneHref: "tel:+61410995584",
    emailHref: "mailto:connect@apexdiy.com.au",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Services & Pricing", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Facility", href: "#facility" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  seo: {
    titleDefault: "Apex DIY | Self-Service Workshop & Bay Rental Melbourne",
    description:
      "Apex DIY is Melbourne's self-service workshop. Rent professional two-post hoist bays and specialty tools by the hour. Technical guidance available on-site.",
    keywords: [
      "self service workshop Melbourne",
      "DIY workshop Melbourne",
      "DIY car workshop Melbourne",
      "car hoist rental Melbourne",
      "workshop bay rental Melbourne",
      "DIY garage Melbourne",
      "vehicle hoist hire Melbourne",
      "automotive workshop bay rental Melbourne",
      "automotive tool hire Melbourne",
    ],
    ogImage: "/images/hero-workshop-bays.jpg",
  },
};
