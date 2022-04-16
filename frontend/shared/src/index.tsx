import { render } from 'solid-js/web';
import './index.css';
import './libs';
import './i18n';
import App from './App';
import { Router } from 'solid-app-router';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
