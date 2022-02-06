import { RouteDefinition } from 'solid-app-router';
import { Basic } from '@modules/TextField/basic';

export const textFieldRoutes: RouteDefinition[] = [
  {
    path: '/text-field',
    children: [
      {
        path: '/basic',
        component: Basic,
      },
    ],
  },
];
