import { RouteDefinition } from 'solid-app-router';
import { Basic } from '@modules/Collapse/basic';

export const collapseRoutes: RouteDefinition[] = [
  {
    path: '/collapse',
    component: Basic,
    children: [
      {
        path: '/basic',
        component: Basic,
      },
    ],
  },
];
