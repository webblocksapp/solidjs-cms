import { Component } from 'solid-js';
import { useRoutes } from 'solid-app-router';
import { routes } from '@routes';

const App: Component = () => {
  return useRoutes(routes);
};

export default App;
