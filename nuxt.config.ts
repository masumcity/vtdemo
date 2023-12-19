export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      title: "Value-Top",
      htmlAttrs: {
        class: 'scroll-smooth dark'
      },
      meta: [{ name: "description", content: "Value-Top" }],
    },
  },
  css: ["~/assets/css/flowbite.min.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@pinia/nuxt",["@storyblok/nuxt", { accessToken: "HLsGNL9hSukkrEnOwmZSsQtt" }], "nuxt-gtag"],
  gtag: {
    id: 'G-TVGE546J5W'
  },
  plugins: [{ src: "~/assets/js/flowbite.js", mode: 'client' }],
  ssr: true
});
