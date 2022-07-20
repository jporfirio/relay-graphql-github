/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "Avenir", "Helvetica", "Arial"],
    },
    fontSize: {
      base: 10,
    },
    textColor: { base: "white" },
  },
  plugins: [],
};
