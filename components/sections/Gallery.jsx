import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Gallery — "Inside Our Workshop". A varied-ratio grid rather than a
 * uniform tile wall, built from the supplied photography only.
 */
export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-bg-soft px-md py-section-mobile sm:px-xl md:py-section"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-container">
        <SectionHeading eyebrow="Gallery" title="Inside Our Workshop" />

        <div className="mt-xxl grid grid-cols-1 gap-md sm:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={`relative overflow-hidden ${image.aspect} ${
                image.span || ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
