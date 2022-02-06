export type TreeMenu = {
  label: string;
  path: string;
  children?: TreeMenu[];
  expand?: boolean;
  active?: boolean;
};
