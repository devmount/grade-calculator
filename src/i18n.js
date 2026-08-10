import { createI18n } from 'vue-i18n';
import de from '@/locales/de.json';
import en from '@/locales/en.json';

export const STORAGE_KEY = 'locale';
const SUPPORTED_LOCALES = ['de', 'en'];
const DEFAULT_LOCALE = 'de';

function detectLocale () {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED_LOCALES.includes(saved)) {
    return saved;
  }
  const browserLocales = navigator.languages || [navigator.language];
  const match = browserLocales
    .map(l => l.slice(0, 2).toLowerCase())
    .find(l => SUPPORTED_LOCALES.includes(l));
  return match || DEFAULT_LOCALE;
}

export default createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: { de, en },
});
