import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tr from './locales/tr.json';
import zh from './locales/zh.json';
import en from './locales/en.json'


const resources = {
  en: { translation: en },
  tr: { translation: tr },
  zh: { translation: zh }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr', 
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
