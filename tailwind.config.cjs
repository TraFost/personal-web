/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: "#57C5B6",
        gray: "#3E3E3F",
        "gray-1": "#8F8F8F",
        "gray-2": "#353535",
        "teal-blue": "#537FE7",
        "contrast-green": "#13FF00",
        "gray-2": "#202020",
        current: "currentColor",
      },
      gap: {
        custom: "4.688rem",
      },
      borderRadius: {
        custom: "0% 100% 100% 0% / 100% 100% 0% 0% ",
      },
    },
  },
  plugins: [],
};
