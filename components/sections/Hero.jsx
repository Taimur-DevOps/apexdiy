import Image from "next/image";
import { Wrench, Wrench as WrenchIcon, ShieldCheck, Users } from "lucide-react";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import FeatureCard from "@/components/ui/FeatureCard";

const supportingFeatures = [
  { icon: WrenchIcon, label: "Professional Hoists" },
  { icon: Wrench, label: "Specialty Tool Hire" },
  { icon: Users, label: "Expert On-Site Advice" },
  { icon: ShieldCheck, label: "Safe Environment" },
];

/**
 * Hero — the site's primary "black storytelling" band. Always renders
 * on the dark surface regardless of the light/dark toggle, matching the
 * design system's fixed rhythm (hero + footer bookend the page in
 * surface-dark). Ships the LCP image with `priority`.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-surface-dark text-on-dark"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-workshop-bays.jpg"
          alt="Row of clean, professional two-post vehicle hoist bays inside the Apex DIY Melbourne workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/70 to-surface-dark/30" />
      </div>

      <div className="relative mx-auto flex max-w-container flex-col gap-xl px-md py-[72px] sm:px-xl md:py-[120px]">
        <div className="max-w-2xl">
          <p className="mb-sm text-[13px] font-bold uppercase tracking-[0.13em] text-primary">
            Melbourne, VIC
          </p>
          <h1
            id="hero-heading"
            className="text-[40px] font-bold leading-display sm:text-[48px] md:text-[56px]"
          >
            {siteConfig.tagline}
          </h1>
          <p className="mt-lg max-w-xl text-[18px] leading-[1.5] text-on-dark-mute md:text-[19.2px]">
            {siteConfig.description}
          </p>

          <div className="mt-xl flex flex-wrap gap-sm">
            <Button href={siteConfig.bookingHref} variant="primary" size="lg">
              {siteConfig.bookingLabel}
            </Button>
            <Button href="#how-it-works" variant="outline-light" size="lg">
              See How It Works
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-lg border-t border-divider-dark pt-xl sm:grid-cols-4">
          {supportingFeatures.map((feature) => (
            <FeatureCard
              key={feature.label}
              icon={feature.icon}
              label={feature.label}
              invert
            />
          ))}
        </div>
      </div>
    </section>
  );
}
