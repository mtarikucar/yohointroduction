import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tr from './locales/tr.json';
import zhsmpl from './locales/zh-cn.json';
import en from './locales/en.json'
import zhtrd from "./locales/zh-hant.json"


const resources = {
  en: { translation: en },
  tr: { translation: tr },
  zhsmpl: { translation: zhsmpl },
  zhtrd: { translation: zhtrd }
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
