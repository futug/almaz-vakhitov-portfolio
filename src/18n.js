import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationTR from "./locales/tr/translation.json";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "ru",
        debug: true,
        detection: {
            order: ["queryString", "cookie"],
            caches: ["cookie"],
        },
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: translationEN,
            },
            ru: {
                translation: translationRU,
            },
            tr: {
                translation: translationTR,
            },
        },
    });
export default i18n;
