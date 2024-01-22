// src/i18n.js
import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import indexEn from '../src/locales/en'
import indexKr from '../src/locales/kr'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources: {
      en: { ...indexEn },
      kr: { ...indexKr },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
