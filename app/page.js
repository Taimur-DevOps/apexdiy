import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import ServicesPricing from "@/components/sections/ServicesPricing";
import Facility from "@/components/sections/Facility";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServicesPricing />
      <HowItWorks />
      <Facility />
      {/* <Gallery /> */}
      <FAQ />
      {/* <Reviews /> */}
      <Contact />
    </>
  );
}
