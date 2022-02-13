import { RouteDefinition } from 'solid-app-router';
import { Basic } from '@modules/Select/basic';

export const selectRoutes: RouteDefinition[] = [
  {
    path: '/select',
    children: [
      {
        path: '/basic',
        component: Basic,
      },
    ],
  },
];
