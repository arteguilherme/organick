// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "vue3-carousel-nuxt",
    "nuxt-icon",
    "@pinia/nuxt",
  ],
  tailwindcss: {
    // Options
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
  },
  nitro: {
    plugins: ["~/server/db/index.ts"],
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Yellowtail&display=swap",
        },
      ],
    },
  },
  build: {
    transpile: ["@headlessui/vue", "@headlessui/tailwindcss"],
  },
});
