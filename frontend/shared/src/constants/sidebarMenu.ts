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
  {
    label: 'TextField',
    path: '/text-field',
    children: [{ label: 'Basic', path: '/text-field/basic' }],
  },
  {
    label: 'Select',
    path: '/select',
    children: [{ label: 'Basic', path: '/select/basic' }],
  },
];
