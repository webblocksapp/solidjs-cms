import { Accessor } from 'solid-js';

export type TreeMenu = {
  label: string;
  path: string;
  children?: TreeMenu[];
  expand?: boolean;
};
