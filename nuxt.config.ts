import pt from "./locales/pt.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "vuetify-nuxt-module",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
  ],
  css: ["@/assets/scss/global.css"],
  googleFonts: {
    families: {
      Montserrat: [400, 600, 700],
    },
    display: "swap",
  },
  i18n: {
    langDir: "../locales",
    defaultLocale: "pt",
    locales: [{ code: "pt", name: "Portugues", file: "pt.json" }],
  },
});
