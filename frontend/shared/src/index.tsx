import { render } from 'solid-js/web';
import './libs';
import App from './App';
import { Router } from 'solid-app-router';
import { I18nProvider, ThemeProvider } from '@components';
import { i18n } from './i18n';

render(
  () => (
    <Router>
      <ThemeProvider>
        <I18nProvider i18n={i18n}>
          <App />
        </I18nProvider>
      </ThemeProvider>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
