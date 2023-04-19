const {resolve} = require("path");

module.exports = {
  important: true,
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  resolve: {
    alias: {
      tailwindcss: resolve(__dirname, 'node_modules/tailwindcss'),
    },
  }
}
