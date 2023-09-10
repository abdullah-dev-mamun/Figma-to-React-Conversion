/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      // => @media (min-width: 600px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1680px",
      // => @media (min-width: 1600px) { ... }
    },
    extend: {
      fontFamily: {
        TatsamBook: "TatsamBook",
        sans: ["Nunito", "TatsamBook", ...fontFamily.sans],
      },
      colors: {
        brand: {
          primary: "#F75757",
          secondary: "#ed7014",
          tertiary: "#fa8128",
        },
        dark: {
          tertiary: "#2B2E36",
          primary: "#32363F",
          secondary: "#424242",
          semiLight: "#949494",
          light: "#ddd",
        },
        grayishCyan: "#b0cad1",
        success: "#78d25b",
        navyBlue: "#6257f7",
      },
    },
  },
  variants: {},
  plugins: [],
};
