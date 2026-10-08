import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },

    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1295px",
      },
    },

    extend: {
      colors: {
        // Deep obsidian dark theme (seamless match with Hero #000000)
        background: "#08070D",
        secondary: "#100D1C",
        surface: "#181326",
        "surface-hover": "#221C35",

        // Text
        foreground: "#F0F0F6",
        muted: "#ACA6B8",

        // Primary electric violet (replacing removed gold palette)
        primary: "#7C71FF",
        "primary-dark": "#5548E0",
        "primary-light": "#DDD8FF",
        cream: "#DDD8FF",

        // Violet accent
        accent: "#695DFF",
        "accent-dark": "#443ACC",
        "accent-light": "#9C93FF",

        // Green
        success: "#065F46",
        "success-light": "#DCEFE6",

        // Borders
        border: "rgba(240, 240, 246, 0.08)",
        "border-light": "rgba(240, 240, 246, 0.05)",
        "border-primary": "rgba(124, 113, 255, 0.30)",
        "border-accent": "rgba(105, 93, 255, 0.35)",

        // Harmonized dark aliases
        "border-white": "rgba(240, 240, 246, 0.08)",
        "black-800": "#08070D",
        "black-700": "rgba(240, 240, 246, 0.8)",
        "black-600": "#ACA6B8",
        "black-500": "#181326",
        "black-300": "rgba(240, 240, 246, 0.15)",
      },

      fontFamily: {
        sans: ["var(--font-dmsans)", "DM Sans", "sans-serif"],
        Inter: ["var(--font-inter)", "Inter", "sans-serif"],
        Syne: ["var(--font-syne)", "Syne", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },

      keyframes: {
        moveUp: {
          "0%": {
            opacity: "1",
            transform: "translateX(0px) translateY(0px) scale(1)",
          },
          "25%": {
            opacity: "0",
            transform: "translateX(10px) translateY(-10px) scale(0.9)",
          },
          "26%": {
            opacity: "0",
            transform: "translateX(-10px) translateY(10px) scale(0.9)",
          },
          "55%": {
            opacity: "1",
            transform: "translateX(0px) translateY(0px) scale(1)",
          },
        },

        animateSpin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },

      animation: {
        "arrow-move-up": "moveUp 0.8s linear",
        "spin-slow": "animateSpin 7s linear infinite",
      },
    },
  },

  plugins: [],
};

export default config;
