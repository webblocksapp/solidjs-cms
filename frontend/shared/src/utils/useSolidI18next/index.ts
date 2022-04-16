import { i18n, ThirdPartyModule } from 'i18next';

let i18nInstance: i18n;
let initialized = false;

export const useSolidI18next = () => {
  const initSolidI18next: ThirdPartyModule = {
    type: '3rdParty',
    init(instance: i18n) {
      setI18n(instance);
    },
  };

  const setI18n = (instance: i18n) => {
    i18nInstance = instance;
    setEvents();
  };

  const getI18n = () => {
    return i18nInstance;
  };

  const setEvents = () => {
    i18nInstance.on('initialized', () => {
      initialized = true;
    });
  };

  return {
    initSolidI18next,
    getI18n,
    initialized,
  };
};
