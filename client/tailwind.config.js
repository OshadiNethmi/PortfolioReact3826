/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#16151C",
        "secondary": "#B784B7",
        "tertiary": "#800080",
      }
    },
    screens: {
      lg: { max: "2023px" },
      sm: { max: "639px" },
    }
  },
  plugins: [],
}

