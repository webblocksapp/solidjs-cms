import { Box, BoxProps } from '@components';
import { Component, mergeProps } from 'solid-js';

export interface SidebarProps extends BoxProps {}

export const Sidebar: Component<SidebarProps> = (props) => {
  props = mergeProps({ fullHeight: true, gridArea: 'sidebar' }, props);
  return <Box {...props} />;
};
