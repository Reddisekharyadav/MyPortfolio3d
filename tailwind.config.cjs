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
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
