import Image from "next/image";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

/**
 * ServicesPricing — catalog-mode section. Only supplied prices are
 * shown ($40/hour bay rental); nothing else is priced since no other
 * rates were provided.
 */
export default function ServicesPricing() {
  return (
    <section
      id="services"
      className="bg-bg-soft px-md py-section-mobile sm:px-xl md:py-section"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-container">
        <SectionHeading
          eyebrow="Services & Pricing"
          title="Workshop Services & Transparent Rates"
          subtitle="Walk in, pick a bay, and get to work. All prices include access to a two-post hoist. Tool hire can be added to any bay rental."
        />
        <div className="mt-xxl">
          <div className="overflow-hidden rounded-sm border border-line">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-primary">
                  <th className="px-md py-sm text-[15px] font-bold text-on-primary">Duration</th>
                  <th className="px-md py-sm text-[15px] font-bold text-on-primary">Bay Only</th>
                  <th className="px-md py-sm text-[15px] font-bold text-on-primary">Bay + Tools</th>
                  <th className="px-md py-sm text-[15px] font-bold text-on-primary">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-bg even:bg-bg-soft border-t border-line">
                  <td className="px-md py-sm">1 Hour</td>
                  <td className="px-md py-sm">$45</td>
                  <td className="px-md py-sm">$55</td>
                  <td className="px-md py-sm">Quick jobs: oil change, brake pads</td>
                </tr>
                <tr className="odd:bg-bg even:bg-bg-soft border-t border-line">
                  <td className="px-md py-sm">2 Hours</td>
                  <td className="px-md py-sm">$80</td>
                  <td className="px-md py-sm">$100</td>
                  <td className="px-md py-sm">Medium jobs: suspension, bolt-ons</td>
                </tr>
                <tr className="odd:bg-bg even:bg-bg-soft border-t border-line">
                  <td className="px-md py-sm">Half Day (4 hours)</td>
                  <td className="px-md py-sm">$150</td>
                  <td className="px-md py-sm">$190</td>
                  <td className="px-md py-sm">Larger projects: lift kits, brakes</td>
                </tr>
                <tr className="odd:bg-bg even:bg-bg-soft border-t border-line">
                  <td className="px-md py-sm">Full Day (8 hours)</td>
                  <td className="px-md py-sm">$280</td>
                  <td className="px-md py-sm">$350</td>
                  <td className="px-md py-sm">Major work: engine swaps, turbo installs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-lg text-[15px]">
            <strong>Need more time?</strong> You can extend your session directly from your bay, subject to availability. For long-term project cars, ask us about our <strong>weekly project rental</strong> rates.
          </p>

          <h4 className="mt-xxl text-[18px] font-bold text-ink">Specialty Tool Pricing</h4>
          <p className="text-[14px] text-fg-muted">Add to Any Bay Rental</p>

          <div className="mt-md overflow-hidden rounded-sm border border-line">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-primary">
                  <th className="px-md py-sm text-[15px] font-bold text-on-primary">Tool</th>
                  <th className="px-md py-sm text-[15px] font-bold text-on-primary">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-bg even:bg-bg-soft border-t border-line">
                  <td className="px-md py-sm">Diagnostic Scan Tool</td>
                  <td className="px-md py-sm">$20 per vehicle</td>
                </tr>
                <tr className="odd:bg-bg even:bg-bg-soft border-t border-line">
                  <td className="px-md py-sm">Tire Changer</td>
                  <td className="px-md py-sm">$8 per tire</td>
                </tr>
                <tr className="odd:bg-bg even:bg-bg-soft border-t border-line">
                  <td className="px-md py-sm">Wheel Balancer</td>
                  <td className="px-md py-sm">$8 per tire</td>
                </tr>
                <tr className="odd:bg-bg even:bg-bg-soft border-t border-line">
                  <td className="px-md py-sm">Air Compressor (if not included)</td>
                  <td className="px-md py-sm">$2/hour</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-lg rounded-sm bg-primary/10 p-md text-[14px] text-fg-muted">
            <em>All specialty tools must be used under staff supervision. Training available on request.</em>
          </div>
        </div>
      </div>
    </section>
  );
}
