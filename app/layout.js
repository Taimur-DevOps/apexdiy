import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";
import { siteConfig } from "@/data/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.titleDefault,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.seo.titleDefault,
    description: siteConfig.seo.description,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1456,
        height: 816,
        alt: "Apex DIY self-service workshop bays in Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.titleDefault,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// A blocking inline script (runs before hydration) so the stored theme
// preference applies immediately and there is no flash of the wrong theme.
const themeInitScript = `
(function() {
  try {
    var stored = window.localStorage.getItem('apex-diy-theme');
    // Default to dark theme when no stored preference exists (user requested)
    var theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.business.phone,
  email: siteConfig.business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.business.address.streetAddress,
    addressLocality: siteConfig.business.address.addressLocality,
    addressRegion: siteConfig.business.address.addressRegion,
    addressCountry: siteConfig.business.address.addressCountry,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  description: siteConfig.seo.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xs focus:bg-primary focus:px-md focus:py-sm focus:text-on-primary"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
