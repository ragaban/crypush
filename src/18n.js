import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// I18Next Init
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'de',
  resources: { en: { translation: require('./locales/en/translation.json')}, de: { translation: require('./locales/de/translation.json')}},
  debug: true,
  detection: {
    order: ['queryString', 'cookie', "localStorage"],
    cache: ['localStorage']
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18n

