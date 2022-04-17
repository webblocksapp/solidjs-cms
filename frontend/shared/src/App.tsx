import { Component } from 'solid-js';
import { useRoutes } from 'solid-app-router';
import { mainRoutes } from '@routes';
import { I18nProvider } from '@components';
import { i18n } from './i18n';

const App: Component = () => {
  return <I18nProvider i18n={i18n}>{useRoutes(mainRoutes)}</I18nProvider>;
};

export default App;
