/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d4145a",
        secondary: "#fbb034",
        dark: "#0f0f0f"
      }
    }
  },
  plugins: []
};