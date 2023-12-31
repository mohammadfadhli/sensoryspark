const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}","./node_modules/flowbite/**/*.js"],
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: false,
  theme: {
    colors: {
      black: "#27272D",
      yellow: "#FFF584",
      green: {
        DEFAULT: "#D5CB6F",
      },
      orange: {
        DEFAULT: "#F58B2E",
        25: "#FFF2BF",
      },
    },
    fontFamily: {
      mono: ["Consolas"],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    }
  },
  variants: {
    extend: {
    },
  },
};