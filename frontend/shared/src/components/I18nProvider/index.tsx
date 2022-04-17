import i18next, { TFunction } from 'i18next';
import { Component, createContext, createSignal, useContext } from 'solid-js';
import { I18nContext as I18nContextType } from '@app-types';

const I18nContext = createContext<I18nContextType>({} as any);
export const useI18nContext = () => useContext(I18nContext);

export interface I18nProviderProps {
  i18n: Promise<TFunction>;
}

export const I18nProvider: Component<I18nProviderProps> = (props) => {
  const [i18n, setI18n] = createSignal(i18next, { equals: false });

  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang).then(() => {
      setI18n(i18next);
    });
  };

  return <I18nContext.Provider value={{ i18n, changeLanguage }}>{props.children}</I18nContext.Provider>;
};
