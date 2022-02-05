import { RouteDefinition } from 'solid-app-router';
import { Basic } from '@modules/TextField/basic';

export const textFieldRoutes: RouteDefinition[] = [
  {
    path: '/text-field',
    component: Basic,
    children: [
      {
        path: '/basic',
        component: Basic,
      },
    ],
  },
];
