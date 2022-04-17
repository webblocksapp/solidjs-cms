import { Namespace } from '@app-types';
import { useI18nContext } from '@components';
import { StringMap, TOptions } from 'i18next';

/**
 * i18next useTranslation hook
 */
export const useTranslation = (ns: Namespace = []) => {
  const { i18n } = useI18nContext();

  const t = (key: string | string[], options?: TOptions<StringMap>) => i18n().t(key, { ns, ...options });

  return {
    t,
  };
};
