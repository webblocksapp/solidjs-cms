import { RouteDefinition } from 'solid-app-router';
import { MainLayout } from '@layouts';

export const routes: RouteDefinition[] = [
  {
    path: '',
    component: MainLayout,
  },
];
