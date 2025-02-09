import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--foreground)",
            a: {
              color: "#1a73e8",
              "&:hover": {
                color: "#1557b0",
              },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: "-0.025em",
            },
            h2: {
              fontWeight: "600",
              letterSpacing: "-0.025em",
            },
            h3: {
              fontWeight: "600",
              letterSpacing: "-0.025em",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} as const;

export default config;
