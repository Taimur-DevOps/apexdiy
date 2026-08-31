"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "apex-diy-theme";

/**
 * ThemeToggle — switches the `data-theme` attribute on <html> between
 * "light" (default) and "dark", persisting the choice to localStorage.
 * A blocking inline script in the root layout applies the stored theme
 * before hydration to avoid a flash of the wrong theme.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // localStorage may be unavailable (private browsing); theme still
      // applies for this session via the DOM attribute set above.
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs border border-line-strong bg-bg text-fg transition-colors hover:bg-bg-soft"
    >
      {theme === null ? (
        <span className="block h-5 w-5" />
      ) : isDark ? (
        <Sun size={18} strokeWidth={2} />
      ) : (
        <Moon size={18} strokeWidth={2} />
      )}
    </button>
  );
}
