import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enCommon from "./locales/en/common.json";
import ptCommon from "./locales/pt/common.json";
import esCommon from "./locales/es/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enCommon,
      },
      pt: {
        translation: ptCommon,
      },
      es: {
        translation: esCommon,
      },
    },
    fallbackLng: "pt",
    debug: false,
    lng: "pt",

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
