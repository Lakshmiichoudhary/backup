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
          surface: "var(--bg-surface)",
          green: "var(--bg-green)",
        },

        text: {
          primary: "var(--text-primary)",
          secondary : "var(--text-secondary)",
          main : "var(--text-main)",
        },

        brand: {
          DEFAULT: "var(--brand-main)",
        },

        neutral: {
          100: "var(--neutral-100)",
          90: "var(--neutral-90)",
          80: "var(--neutral-80)",
          70: "var(--neutral-70)",
          60: "var(--neutral-60)",
          25: "var(--neutral-25)",
          20: "var(--neutral-20)",
          16: "var(--neutral-16)",
          50: "var(--neutral-50)",
          10: "var(--neutral-10)",
          8: "var(--neutral-8)",
          5: "var(--neutral-5)",
          55: "var(--neutral-55)",
        },
      },
      backgroundImage: {
        radial: "var(--radial-gradient)",
        "hero-bottom-fade": "var(--hero-fade-gradient)",
        "text-gradient":"var(--text-gradient)",
        "secondary-gradient":"var(--secondary-gradient)",
        "text2-gradient":"var(--text2-gradient)",
        "header-gradient":"var(--header-gradient)",
        "icon-gradient":"var(--icon-gradient)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow: {
        "blue-glow": "0 24px 70px -18px rgba(2, 136, 209, 0.35)",
        "box-shadow":" 0 10px 40px -12px rgba(0, 0, 0, 0.60)",
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
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
