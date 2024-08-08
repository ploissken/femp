import { registerPlugins } from "@/plugins";
import { createI18n } from "vue-i18n";
import portuguese from "./locales/portuguese.json";
import english from "./locales/english.json";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const i18n = createI18n({
  locale: "pt",
  fallbackLocale: "pt",
  messages: {
    en: english,
    pt: portuguese,
  },
});

const app = createApp(App);

registerPlugins(app);

app.use(i18n);
app.mount("#app");
