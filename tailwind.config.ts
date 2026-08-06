import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        card: "var(--card)",
        "card-border": "var(--card-border)",
        text: "var(--text)",
        "text-dim": "var(--text-dim)",
        accent1: "var(--accent-1)",
        accent2: "var(--accent-2)",
        accent3: "var(--accent-3)",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(120deg, var(--accent-2), var(--accent-1) 55%, var(--accent-3))",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        auroraShift: {
          "0%": { transform: "translate(0,0) rotate(0deg)" },
          "100%": { transform: "translate(-3%,4%) rotate(8deg)" },
        },
        scrollDrop: {
          "to": { top: "100%" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        aurora: "auroraShift 22s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
