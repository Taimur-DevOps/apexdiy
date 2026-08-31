import Link from "next/link";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileNav from "@/components/layout/MobileNav";

/**
 * Header — top navigation. Server component; only the mobile menu
 * disclosure needs client-side interactivity, so that's isolated in
 * <MobileNav>.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="mx-auto flex h-[60px] max-w-container items-center justify-between px-md sm:px-xl">
        <Link
          href="#home"
          className="text-[20px] font-bold leading-none tracking-tight text-fg"
        >
          {siteConfig.name}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-xl lg:flex"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14.4px] font-bold tracking-button text-fg-secondary transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-sm lg:flex">
          <ThemeToggle />
          <Button href={siteConfig.bookingHref} variant="primary" size="md">
            {siteConfig.bookingLabel}
          </Button>
        </div>

        <div className="flex items-center gap-xs lg:hidden">
          <ThemeToggle />
          <MobileNav navItems={siteConfig.nav} />
        </div>
      </div>
    </header>
  );
}
