import { RouteDefinition } from 'solid-app-router';
import { Basic } from '@modules/Box/basic';

export const boxRoutes: RouteDefinition[] = [
  {
    path: '/box',
    component: Basic,
    children: [
      {
        path: '/basic',
        component: Basic,
      },
    ],
  },
];
