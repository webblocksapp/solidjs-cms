import { useSolidI18next } from '@utils';
import * as resources from './locales';
import i18next from 'i18next';

const { initSolidI18next } = useSolidI18next();

i18next.use(initSolidI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,
});
