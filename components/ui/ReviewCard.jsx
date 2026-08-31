import { Quote } from "lucide-react";

/**
 * ReviewCard — displays a single supplied customer testimonial.
 * No star ratings or review counts are invented; only the quote,
 * name, and location provided by the business.
 */
export default function ReviewCard({ name, location, quote }) {
  return (
    <figure className="flex h-full flex-col gap-md border border-hairline-strong bg-canvas p-xl">
      <Quote
        size={28}
        className="text-primary"
        fill="currentColor"
        aria-hidden="true"
      />
      <blockquote className="flex-1 text-[16px] leading-[1.5] text-body">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="text-[14px] font-bold text-ink">
        {name} <span className="font-normal text-mute">— {location}</span>
      </figcaption>
    </figure>
  );
}
