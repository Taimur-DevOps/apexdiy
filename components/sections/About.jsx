import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * About — catalog-mode section introducing the business. Content is
 * copied verbatim from the supplied requirements; not expanded.
 */
export default function About() {
  return (
    <section
      id="about"
      className="bg-bg px-md py-section-mobile sm:px-xl md:py-section"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-container items-center gap-xxl md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="About Apex DIY" title="Welcome to Apex DIY" />
          <p className="mt-lg text-[16px] leading-[1.5] text-fg-secondary">
            Apex DIY is Melbourne&apos;s dedicated self-service garage for car
            owners and hobbyists. We solve the common problem of having
            limited space, uneven driveways, or strict property rules that
            prevent you from working on your vehicle.
          </p>
          <p className="mt-md text-[16px] leading-[1.5] text-fg-secondary">
            Our facility provides clean, well-lit workshop bays equipped with
            professional two-post vehicle hoists, quality hand tools, and
            specialized equipment. Whether you are performing basic oil
            changes, installing suspension components, or working on
            performance cars, we provide the space and support you need to
            complete your project safely.
          </p>

          <blockquote className="mt-xl border-l-4 border-primary pl-lg text-[18px] font-bold leading-display text-fg">
            Our mission is to provide an affordable, fully equipped, and safe
            space where car lovers can work on their own vehicles without
            limits.
          </blockquote>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src="/images/about-workshop-wide.jpg"
            alt="Wide view of the Apex DIY workshop floor with multiple vehicles being worked on"
            fill
            sizes="(min-width: 768px) 600px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
