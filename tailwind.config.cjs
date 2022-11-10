/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        yellow: {
          400: "#ffd43a",
          500: "#e18700",
        },
        blue: {
          300: "#3366ff",
        },
      },
    },
  },
  plugins: [],
};
