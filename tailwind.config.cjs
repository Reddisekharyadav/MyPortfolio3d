/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0e27",
        secondary: "#64ffda",
        tertiary: "#0d1b2a",
        "black-100": "#1b263b",
        "black-200": "#0d1321",
        "white-100": "#e0e1dd",
        "accent-cyan": "#00d9ff",
        "accent-green": "#39ff14",
        "accent-blue": "#1e3a8a",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #00d9ff33",
        glow: "0 0 20px rgba(0, 217, 255, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        sans: ["Outfit", "Poppins", "sans-serif"],
        display: ["Syne", "Outfit", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
        "orb-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(40px, -30px) scale(1.08)" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 6s ease infinite",
        shine: "shine 1.4s ease-in-out infinite",
        "orb-drift": "orb-drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
