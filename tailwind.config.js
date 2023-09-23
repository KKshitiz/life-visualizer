/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        10: "repeat(10, minmax(0, 1fr))",
        36: "repeat(36, minmax(0, 1fr))",
        52: "repeat(52, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
