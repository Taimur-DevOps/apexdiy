import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";

/**
 * Contact — business info (address, hours, email, phone as clickable
 * links) alongside the contact form.
 */
export default function Contact() {
  const { business } = siteConfig;

  return (
    <section
      id="contact"
      className="bg-bg-soft px-md py-section-mobile sm:px-xl md:py-section"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-container">
        <SectionHeading
          eyebrow="Contact"
          title="Contact Us & Find Our Workshop"
        />

        <div className="mt-xxl grid gap-xxl lg:grid-cols-2">
          <div className="flex flex-col gap-lg">
            <div className="flex gap-sm">
              <MapPin size={22} className="mt-[2px] shrink-0 text-fg" aria-hidden="true" />
              <address className="not-italic text-[16px] leading-[1.5] text-fg-secondary">
                {business.address.full}
              </address>
            </div>

            <div className="flex gap-sm">
              <Clock size={22} className="mt-[2px] shrink-0 text-fg" aria-hidden="true" />
              <div className="text-[16px] leading-[1.5] text-fg-secondary">
                {business.hours.map((h) => (
                  <p key={h.days}>
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex gap-sm">
              <Mail size={22} className="mt-[2px] shrink-0 text-fg" aria-hidden="true" />
              <a
                href={business.emailHref}
                className="text-[16px] text-fg-secondary underline-offset-2 hover:underline"
              >
                {business.email}
              </a>
            </div>

            <div className="flex gap-sm">
              <Phone size={22} className="mt-[2px] shrink-0 text-fg" aria-hidden="true" />
              <a
                href={business.phoneHref}
                className="text-[16px] text-fg-secondary underline-offset-2 hover:underline"
              >
                {business.phone}
              </a>
            </div>
          </div>

          <div className="border border-hairline-strong bg-bg p-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
