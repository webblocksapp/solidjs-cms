import { RouteDefinition } from 'solid-app-router';
import { Basic } from '@modules/Checkboxes';

export const checkboxesRoutes: RouteDefinition[] = [
  {
    path: '/checkboxes',
    children: [
      {
        path: '/basic',
        component: Basic,
      },
    ],
  },
];
