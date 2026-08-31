import Link from "next/link";

const VARIANT_CLASSES = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-deep active:bg-primary-deep",
  "secondary-dark":
    "bg-surface-dark text-on-dark hover:bg-surface-deep active:bg-surface-deep",
  "outline-dark":
    "bg-bg text-fg border border-line-strong hover:bg-bg-soft",
  "outline-light":
    "bg-surface-dark text-on-dark border border-on-dark hover:bg-surface-deep",
};

const SIZE_CLASSES = {
  md: "px-xl py-[14px] text-[14.4px] tracking-button",
  lg: "px-xxl py-lg text-[16px] tracking-button",
};

/**
 * Button — maps directly to the design system's button components:
 * button-primary, button-secondary-dark, button-outline-dark, button-outline-light.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  children,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-xs",
    "rounded-xs font-bold whitespace-nowrap",
    "transition-colors duration-150",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  ].join(" ");

  if (href) {
    const isAnchor = href.startsWith("#");
    if (isAnchor) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
