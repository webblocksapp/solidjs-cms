import { render } from 'solid-js/web';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
