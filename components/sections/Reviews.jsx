import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";

/**
 * Reviews — only the two supplied testimonials are shown. No star
 * ratings, review counts, or verification badges are fabricated.
 */
export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-bg px-md py-section-mobile sm:px-xl md:py-section"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-container">
        <SectionHeading eyebrow="Reviews" title="What Our Customers Say" />

        <div className="mt-xxl grid gap-lg sm:grid-cols-2">
          {testimonials.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
