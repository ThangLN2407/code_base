// src/i18n.js
import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import loginEN from './locales/en/login.json'
import loginKR from './locales/kr/login.json'
import errorEN from './locales/en/login.json'
import errorKR from './locales/kr/login.json'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        login: loginEN,
        error: errorEN,
      },
      kr: {
        login: loginKR,
        error: errorKR,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
