import i18next from 'i18next';
import * as resources from './locales';

i18next.init(
  {
    resources,
    fallbackLng: 'en',
    ns: ['file1', 'file2'],
    defaultNS: 'file1',
    debug: true,
  },
  (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key');
  }
);
