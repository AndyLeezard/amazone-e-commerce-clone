module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
        eaeaea: {
          light: "#eaeaea",
          DEFAULT: "#eaeaea",
        },
        footerbg: {
          light: "#232F3E",
          DEFAULT: "#232F3E",
        },
        footerbutton_focus: {
          light: "#485769",
          DEFAULT: "#485769",
        },
        footerbutton: {
          light: "#37475A",
          DEFAULT: "#37475A",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
