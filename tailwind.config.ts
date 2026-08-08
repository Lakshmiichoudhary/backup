import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      colors: {
        background: {
          main: "var(--bg-main)",
          secondary: "var(--bg-secondary)",
        },

        text: {
          primary: "var(--text-primary)",
        },

        brand: {
          DEFAULT: "var(--brand-main)",
        },

        neutral: {
          100: "var(--neutral-100)",
          80: "var(--neutral-80)",
          60: "var(--neutral-60)",
          25: "var(--neutral-25)",
          50: "var(--neutral-50)",
          10: "var(--neutral-10)",
          8: "var(--neutral-8)",
          5: "var(--neutral-5)",
        },
      },
      backgroundImage: {
        radial: "var(--radial-gradient)",
        "hero-bottom-fade": "var(--hero-fade-gradient)",
        "text-gradient":"var(--text-gradient)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(-4%)" },
          "100%": { transform: "translateX(-201%)" },
        },
      },

      animation: {
        scroll: "scroll 10s linear infinite",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        mxl: "1442px",
      },
      letterSpacing: {
        sm28: "0.28px",
        md32: "0.32px",
        lg36: "0.36px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
