import { Check } from "lucide-react";

/**
 * ServiceCard — used in the Services & Pricing grid. Matches
 * `promo-tile-light` styling: square corners, hairline outline, generous
 * internal padding.
 */
export default function ServiceCard({ title, description, priceLabel, list }) {
  return (
    <div className="flex h-full flex-col gap-sm border border-hairline-strong bg-canvas p-xl">
      <h3 className="text-[20px] font-bold leading-display text-ink">
        {title}
      </h3>
      {priceLabel ? (
        <p className="text-[14px] font-bold text-ink">
          <span className="bg-primary px-xs py-[2px] text-on-primary">
            {priceLabel}
          </span>
        </p>
      ) : null}
      <p className="text-[15px] leading-[1.5] text-body">{description}</p>
      {list ? (
        <ul className="mt-xxs flex flex-col gap-xxs">
          {list.map((item) => (
            <li
              key={item}
              className="flex items-start gap-xs text-[14px] text-charcoal"
            >
              <Check
                size={16}
                className="mt-[3px] shrink-0 text-ink"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
