import * as resources from './locales';
import i18next from 'i18next';

export const i18n = i18next.init({
  resources,
  fallbackLng: 'en',
  debug: true,
});
