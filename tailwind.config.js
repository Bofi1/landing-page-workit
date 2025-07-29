/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["'Fraunces'", "sans-serif"],
        manrope: ["'Manrope'", "sans-serif"],
        playfair: ["'Playfair'", "sans-serif"],
      },
      colors: {
        mygreen: "#43FEA3",
        mypurple: "#2E004F",
        mypurplelight: "#FBF8FE",
      },
      screens: {
        iphone: "375px",
      },
    },
  },
  plugins: [],
};
