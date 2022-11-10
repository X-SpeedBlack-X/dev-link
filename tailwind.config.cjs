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
      animation: {
        Pop: "animatePop 1s ease-in-out ",
      },

      keyframes: {
        animatePop: {
          "0%": { opacity: 0, transform: "scale(0.7, 0.7)" },
          "100%": { opacity: 1, transform: "scale(1,1)" },
        },
      },
    },
  },
  plugins: [],
};
