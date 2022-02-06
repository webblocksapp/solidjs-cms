import { RouteDefinition } from 'solid-app-router';
import { MainLayout } from '@layouts';
import { boxRoutes } from './boxRoutes';
import { textFieldRoutes } from './textFieldRoutes';
import { collapseRoutes } from './collapseRoutes';
import { gridRoutes } from './gridRoutes';

export const mainRoutes: RouteDefinition[] = [
  {
    path: '',
    component: MainLayout,
    children: [...boxRoutes, ...textFieldRoutes, ...collapseRoutes, ...gridRoutes],
  },
];
