/**
 * FeatureCard — compact icon + label used in the hero's supporting
 * features row (Professional Hoists, Specialty Tool Hire, etc.).
 */
export default function FeatureCard({ icon: Icon, label, invert = false }) {
  return (
    <div className="flex items-center gap-sm">
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xs ${
          invert ? "bg-surface-deep text-primary" : "bg-surface-soft text-ink"
        }`}
        aria-hidden="true"
      >
        <Icon size={20} strokeWidth={2} />
      </span>
      <span
        className={`text-[14px] font-bold ${
          invert ? "text-on-dark" : "text-ink"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
