import { i18n } from 'i18next';
import { Accessor } from 'solid-js';

export type I18nContext = {
  i18n: Accessor<i18n>;
  changeLanguage: (lang: string) => void;
};
