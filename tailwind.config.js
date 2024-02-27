/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        'xl': '1200px'
      }
    },
    colors: {
      primary: {
        900: "#1F271B",
      },
      secondary: {
        900: "#FFD23F",
        800: "#EE4266",
      },
      slate: {
        200: "#F3FCF0",
      },
      gray: colors.coolGray,
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [],
};
