/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "storyblok/**/*.{vue,js}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./assets/css/",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
};
