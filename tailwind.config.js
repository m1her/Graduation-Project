/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
// import { withMT } from "@material-tailwind/react/src/utils/withMT";
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/auth/**/*.{js,ts,jsx,tsx}",
    "./src/app/web/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#4375FF",
          DEFAULT: "#0044FF",
          dark: "#002a9d",
        },
        gray: {
          dark: "#707070",
          DEFAULT: "#00000029", // better to be hexadecimal
          light: "#F3F4F6",
        },
        red: {
          DEFAULT: "#EE404C",
        },
      },
    },
  },
  plugins: [require("flowbite")],
};
