import { siteConfig } from "@/data/site";

/**
 * Footer — global footer. Per the design system, the footer always
 * closes on `{colors.surface-dark}` regardless of the site-wide
 * light/dark toggle, so it uses the raw dark tokens rather than the
 * semantic theme-aware ones.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark px-md py-[64px] text-on-dark sm:px-xl">
      <div className="mx-auto grid max-w-container gap-xxl md:grid-cols-3">
        <div>
          <p className="text-[20px] font-bold">{siteConfig.name}</p>
          <p className="mt-sm max-w-xs text-[14px] leading-[1.57] text-on-dark-mute">
            Melbourne&apos;s self-service workshop. Rent professional bays,
            hoists, and tools by the hour.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-xs">
          <p className="mb-xs text-[12px] font-bold uppercase tracking-[0.1em] text-on-dark-mute">
            Navigation
          </p>
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-on-dark-mute transition-colors hover:text-on-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-xs">
          <p className="mb-xs text-[12px] font-bold uppercase tracking-[0.1em] text-on-dark-mute">
            Contact
          </p>
          <address className="flex flex-col gap-xs text-[14px] not-italic text-on-dark-mute">
            <span>{siteConfig.business.address.full}</span>
            <a
              href={siteConfig.business.emailHref}
              className="transition-colors hover:text-on-dark"
            >
              {siteConfig.business.email}
            </a>
            <a
              href={siteConfig.business.phoneHref}
              className="transition-colors hover:text-on-dark"
            >
              {siteConfig.business.phone}
            </a>
            {siteConfig.business.hours.map((h) => (
              <span key={h.days}>
                {h.days}: {h.time}
              </span>
            ))}
          </address>
        </div>
      </div>

      <div className="mx-auto mt-xxl max-w-container border-t border-divider-dark pt-lg">
        <p className="text-[12px] text-on-dark-mute">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
