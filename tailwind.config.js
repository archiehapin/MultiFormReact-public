/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        a_Marine_blue: "#02295a",
        a_Purplish_blue: "#473dff",
        a_Pastel_blue: "#adbeff",
        a_Light_blue: "#bfe2fd",
        a_Strawberry_red: "#ed3548",
        a_Cool_gray: "#9699ab",
        a_Light_gray: "#d6d9e6",
        a_Magnolia: "#f0f6ff",
        a_Alabaster: "#fafbff",
      },
    },
  },
  plugins: [],
};
