import { RouteDefinition } from 'solid-app-router';
import { Basic } from '@modules/Radios';

export const radiosRoutes: RouteDefinition[] = [
  {
    path: '/radios',
    children: [
      {
        path: '/basic',
        component: Basic,
      },
    ],
  },
];
