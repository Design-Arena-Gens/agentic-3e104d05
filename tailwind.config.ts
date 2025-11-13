import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#05060F",
        "midnight-glow": "#1F2937",
        "plasma-blue": "#5D5FEF",
        "plasma-cyan": "#3BD6FF",
        "plasma-pink": "#FF5EDF",
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-aurora":
          "radial-gradient(circle at 10% 20%, rgba(93,95,239,0.45), transparent 55%), radial-gradient(circle at 80% 0%, rgba(59,214,255,0.35), transparent 45%), radial-gradient(circle at 50% 80%, rgba(255,94,223,0.35), transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 6s ease-in-out infinite",
        "float-md": "float 12s ease-in-out infinite",
        "orbit-lg": "orbit 22s linear infinite",
        "aurora-shift": "aurora 16s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(0)" },
          "50%": { transform: "rotate(180deg) translateX(12px)" },
          "100%": { transform: "rotate(360deg) translateX(0)" },
        },
        aurora: {
          "0%": {
            transform: "translate3d(-10%, -5%, 0) scale(1.1)",
          },
          "50%": {
            transform: "translate3d(5%, 10%, 0) scale(1.05)",
          },
          "100%": {
            transform: "translate3d(12%, -8%, 0) scale(1.12)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
