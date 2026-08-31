import Image from "next/image";
import { Droplets, Package, ShowerHead, Wifi } from "lucide-react";
import { facilityAmenities } from "@/data/facility";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS = {
  "Fluid & Waste Disposal": Droplets,
  "Parts Delivery Accepted": Package,
  "Clean Washrooms & Break Area": ShowerHead,
  "Free Wi-Fi": Wifi,
};

/**
 * Facility — catalog-mode section covering on-site amenities.
 */
export default function Facility() {
  return (
    <section
      id="facility"
      className="bg-bg px-md py-section-mobile sm:px-xl md:py-section"
      aria-labelledby="facility-heading"
    >
      <div className="mx-auto max-w-container">
        <div className="grid items-center gap-xxl md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Facility"
              title="Everything You Need On-Site"
            />

            <dl className="mt-xl grid gap-lg sm:grid-cols-2">
              {facilityAmenities.map((item) => {
                const Icon = ICONS[item.title];
                return (
                  <div key={item.title} className="flex gap-sm">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs bg-bg-soft text-fg"
                      aria-hidden="true"
                    >
                      {Icon ? <Icon size={20} strokeWidth={2} /> : null}
                    </span>
                    <div>
                      <dt className="text-[16px] font-bold text-fg">
                        {item.title}
                      </dt>
                      <dd className="mt-[2px] text-[14px] leading-[1.4] text-fg-secondary">
                        {item.description}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/facility-hoist-bays.jpg"
              alt="Multiple vehicles positioned on two-post hoists inside the Apex DIY facility"
              fill
              sizes="(min-width: 768px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
