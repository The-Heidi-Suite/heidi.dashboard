import { initReactI18next } from 'react-i18next';
import { getDataFromBrowserStorage } from '@lib/browserStorage';
import SupportedLanguage from '@local-type/SupportedLang';
import i18n from 'i18next';

import rawDe from '@/translation/de.json';
import rawEn from '@/translation/en.json';
import { TranslationSchema } from '@/translation/translation';

const loadTranslation = <T extends TranslationSchema>(data: T) => data;

const en = loadTranslation(rawEn);
const de = loadTranslation(rawDe);

const fallbackLng = 'en';
const defaultLanguage = getDataFromBrowserStorage('i18nextLng') || fallbackLng;
const resources: Record<SupportedLanguage, { translation: TranslationSchema }> =
  {
    en: { translation: en },
    de: { translation: de },
  };

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng,
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
