/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderColor: {
        darkOne: "#17191D",
        darkTwo: "#35373C",
        darkThree: "#46484D",
        lightOne: "#E1E1E1",
        lightTwo: "#F8F8F8",
        lightThree: "#E7E7E7",
        theme: "#00ff00",
      },
      backgroundColor: {
        darkOne: "#17191D",
        darkTwo: "#35373C",
        darkThree: "#46484D",
        lightOne: "#E1E1E1",
        lightTwo: "#F8F8F8",
        lightThree: "#E7E7E7",
        theme: "#00ff00",
      },
      textColor: {
        theme: "#FF0B40",
      },
    },
  },
  plugins: [],
};
