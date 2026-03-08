import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import ca from './locales/ca.json';

const getDefaultLanguage = (): string => {
  const saved = localStorage.getItem('language');
  if (saved) return saved;

  const browserLangs = navigator.languages || [navigator.language];
  for (const lang of browserLangs) {
    const code = lang.toLowerCase();
    if (code.startsWith('ca')) return 'ca';
    if (code.startsWith('es')) return 'es';
  }
  return 'en';
};

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, es: { translation: es }, ca: { translation: ca } },
  lng: getDefaultLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
