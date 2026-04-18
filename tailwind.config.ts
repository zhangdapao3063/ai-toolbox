import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
      },
      animation: {
        "blob-float": "blobFloat 20s ease-in-out infinite alternate",
        "fade-slide-down": "fadeSlideDown 0.6s ease both",
        "card-reveal": "cardReveal 0.5s ease forwards",
        "pulse-slow": "pulse 2s ease-in-out infinite",
      },
      keyframes: {
        blobFloat: {
          "0%":   { transform: "translate(0, 0) scale(1)" },
          "33%":  { transform: "translate(60px, -40px) scale(1.1)" },
          "66%":  { transform: "translate(-30px, 50px) scale(0.95)" },
          "100%": { transform: "translate(-20px, 20px) scale(1.05)" },
        },
        fadeSlideDown: {
          from: { opacity: "0", transform: "translateY(-16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        cardReveal: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(99, 102, 241, 0.4)",
        "glow-sm": "0 0 16px rgba(99, 102, 241, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
