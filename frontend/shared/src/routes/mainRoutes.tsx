import { RouteDefinition } from 'solid-app-router';
import { MainLayout } from '@layouts';
import { boxRoutes } from './boxRoutes';
import { textFieldRoutes } from './textFieldRoutes';

export const mainRoutes: RouteDefinition[] = [
  {
    path: '',
    component: MainLayout,
    children: [...boxRoutes, ...textFieldRoutes],
  },
];
