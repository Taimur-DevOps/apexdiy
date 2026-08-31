/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: "426px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        // Raw brand tokens (fixed across themes)
        primary: "var(--color-primary)",
        "primary-deep": "var(--color-primary-deep)",
        "on-primary": "var(--color-on-primary)",
        error: "var(--color-error)",
        warning: "var(--color-warning)",
        success: "var(--color-success)",
        info: "var(--color-info)",
        link: "var(--color-link)",

        // Raw surface/text tokens (still available directly if needed)
        canvas: "var(--color-canvas)",
        "surface-soft": "var(--color-surface-soft)",
        "surface-dark": "var(--color-surface-dark)",
        "surface-deep": "var(--color-surface-deep)",
        hairline: "var(--color-hairline)",
        "hairline-strong": "var(--color-hairline-strong)",
        "divider-dark": "var(--color-divider-dark)",
        // Map semantic text tokens to theme-aware CSS variables so text
        // colors flip correctly between light/dark themes. This prevents
        // dark-mode text remaining dark on a dark background (FAQ issue).
        ink: "var(--fg)",
        body: "var(--fg-secondary)",
        charcoal: "var(--fg-muted)",
        mute: "var(--fg-muted)",
        ash: "var(--color-ash)",
        stone: "var(--color-stone)",
        "on-dark": "var(--color-on-dark)",
        "on-dark-mute": "var(--color-on-dark-mute)",

        // Semantic theme-aware tokens (flip between light/dark via [data-theme])
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        "bg-invert": "var(--bg-invert)",
        "bg-invert-deep": "var(--bg-invert-deep)",
        fg: "var(--fg)",
        "fg-secondary": "var(--fg-secondary)",
        "fg-muted": "var(--fg-muted)",
        "fg-invert": "var(--fg-invert)",
        "fg-invert-mute": "var(--fg-invert-mute)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
      },
      fontFamily: {
        sans: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "3px",
        md: "4px",
        pill: "46px",
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        xxl: "32px",
        xxxl: "40px",
        section: "80px",
        "section-mobile": "40px",
      },
      maxWidth: {
        container: "1440px",
      },
      letterSpacing: {
        button: "0.144px",
        "button-sm": "0.13px",
      },
      lineHeight: {
        display: "0.95",
      },
    },
  },
  plugins: [],
};
