import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
/* import Backend from 'i18next-http-backend'; */

i18n
  /* .use(Backend) */
  .use(initReactI18next)
  .init({
    lng: 'tr', // başlangıç dili olarak 'tr' seçilmiştir.
    fallbackLng: 'tr', 
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', 
    },
  });

export default i18n;
