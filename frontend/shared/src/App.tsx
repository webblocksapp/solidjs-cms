import { Component } from 'solid-js';
import { useRoutes } from 'solid-app-router';
import { mainRoutes } from '@routes';

const App: Component = () => {
  return useRoutes(mainRoutes);
};

export default App;
