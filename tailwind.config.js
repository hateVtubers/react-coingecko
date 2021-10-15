module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "port-gore": {
          DEFAULT: "#17183B",
          50: "#7073C7",
          100: "#5E61C0",
          200: "#4245A9",
          300: "#343684",
          400: "#252760",
          500: "#17183B",
          600: "#090916",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
