import { RouteDefinition } from 'solid-app-router';
import { Basic, Spacing } from '@modules/Box';

export const boxRoutes: RouteDefinition[] = [
  {
    path: '/box',
    children: [
      {
        path: '/basic',
        component: Basic,
      },
      {
        path: '/spacing',
        component: Spacing,
      },
    ],
  },
];
