import { RouteDefinition } from 'solid-app-router';
import { Basic } from '@modules/Grid/basic';

export const gridRoutes: RouteDefinition[] = [
  {
    path: '/grid',
    component: Basic,
    children: [
      {
        path: '/basic',
        component: Basic,
      },
    ],
  },
];
