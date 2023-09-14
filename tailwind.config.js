import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ..._fontFamily.sans],
        "yellow-tail": ['"Yellowtail", "cursive"'],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
