import { Namespace } from '@app-types';
import { useSolidI18next } from '@utils';
import { StringMap, TOptions } from 'i18next';

/**
 * i18next useTranslation hook
 */
export const useTranslation = (ns: Namespace = []) => {
  const { getI18n } = useSolidI18next();
  const i18n = getI18n();

  const t = (key: string | string[], options?: TOptions<StringMap>) => i18n.t(key, { ns, ...options });

  return {
    t,
  };
};
