/**
 * SectionHeading — consistent H2 + optional overline/subtitle treatment
 * used across all marketing sections. `invert` flips text color for use
 * on dark storytelling bands.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
  className = "",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-xs text-[10px] font-bold uppercase tracking-[0.1em] ${
            invert ? "text-on-dark-mute" : "text-fg-muted"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-[28px] leading-display font-bold sm:text-[32px] md:text-[40px] ${
          invert ? "text-on-dark" : "text-fg"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-sm text-[16px] leading-[1.4] ${
            invert ? "text-on-dark-mute" : "text-fg-secondary"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
