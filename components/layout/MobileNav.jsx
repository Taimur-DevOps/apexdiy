"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

/**
 * MobileNav — accessible hamburger menu for small viewports. Traps
 * focus within a full-screen panel, closes on Escape, and restores
 * background scroll when dismissed.
 */
export default function MobileNav({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-xs border border-line-strong text-fg"
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      {isOpen ? (
        <div
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-[60] flex flex-col bg-bg"
        >
          <div className="flex h-[60px] items-center justify-between border-b border-line px-md">
            <span className="text-[20px] font-bold text-fg">
              {siteConfig.name}
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-xs border border-line-strong text-fg"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col gap-md overflow-y-auto px-md py-xl"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-line py-md text-[20px] font-bold text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-line p-md">
            <Button
              href={siteConfig.bookingHref}
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              {siteConfig.bookingLabel}
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
