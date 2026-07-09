import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F3EC",
        ink: "#201D18",
        leather: "#8C5A3C",
        sage: "#6B6F4C",
        stone: "#D8CBB8",
        surface: "#EFE7D8",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.2em",
      },
    },
  },
};

export default config;
