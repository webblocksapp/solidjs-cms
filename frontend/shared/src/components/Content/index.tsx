import { Box, BoxProps } from '@components';
import { Component, mergeProps } from 'solid-js';

interface HeaderProps extends BoxProps {}

export const Content: Component<HeaderProps> = (props) => {
  props = mergeProps({ gridArea: 'content', overflow: 'auto' }, props);
  return <Box {...props} />;
};
