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
        "aqua-gradient":
          "linear-gradient(rgb(236, 251, 249) 0%, rgb(229, 252, 222) 100%)",
        "rose-gradient":
          "linear-gradient(rgb(255, 245, 252) 0%, rgb(245, 209, 235) 100%)",
        "pink-aqua-gradient": "linear-gradient(90deg,#F7E9F3 0%,#E0DFFC 100%);",
      },
      translate: {
        "1/2": "50%",
      },
      fontFamily: {
        source: ["Source Serif 4", "Georgia", "serif"],
      },
      colors: {
        primary: "#d145bf",
        yellow: "#deb566",
        darkblue: "#0d0c22",
      },
      backgroundColor: {
        primary: "#0d0c22",
        primaryBtn: "#1a1a2e",
      },

      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "infinite-scroll-reverse":
          "infinite-scroll-reverse 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-reverse": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
