import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        esports: {
          cyan: {
            400: "#22d3ee",
            500: "#06b6d4",
            600: "#0891b2",
          },
          purple: {
            600: "#9333ea",
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
