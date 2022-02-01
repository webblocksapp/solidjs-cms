import { TreeMenu } from '@app-types';

export const SIDEBAR_MENU: TreeMenu[] = [
  {
    label: 'Box',
    path: '/box',
    children: [
      { label: 'Basic', path: '/box/basic' },
      { label: 'Spacing', path: '/box/spacing' },
    ],
  },
  {
    label: 'Grid',
    path: '/grid',
    children: [{ label: 'Basic', path: '/grid/basic' }],
  },
  {
    label: 'Collapse',
    path: '/collapse',
    children: [{ label: 'Basic', path: '/collapse/basic' }],
  },
];
