import Image from "next/image";
import { howItWorksSteps } from "@/data/howItWorks";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * HowItWorks — catalog-mode section (respects theme toggle). Simple
 * three-step hierarchy per the requirements; visually restrained.
 */
export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-bg px-md py-section-mobile sm:px-xl md:py-section"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-container">
        <SectionHeading
          eyebrow="How It Works"
          title="Three Steps to Get Started"
        />

        <div className="mt-xxl grid gap-xl md:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <div key={step.number} className="flex flex-col gap-md">
              <span className="text-[40px] font-bold leading-none text-primary">
                {step.number}
              </span>
              <h3 className="text-[20px] font-bold leading-display text-fg">
                {step.title}
              </h3>
              <p className="text-[15px] leading-[1.5] text-fg-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-xxl w-full overflow-hidden h-48 sm:h-64 md:h-80 lg:h-[360px]">
          <Image
            src="/images/apexdiy-bayroom.png"
            alt="Apex DIY workshop bay"
            fill
            sizes="(min-width: 1024px) 1200px, (min-width:768px) 800px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
