import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "subscription-bg": "linear-gradient(72deg,#f8d5d0 0%,#f5c9ef 100%)",
      },
      translate: {
        "1/2": "50%",
      },
      fontFamily: {
        source: ["Source Serif 4", "Georgia", "serif"],
      },
      colors: {
        primary: "#d145bf",
      },
      backgroundColor: {
        primary: "#0d0c22",
        primaryBtn: "#1a1a2e",
      },

      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
