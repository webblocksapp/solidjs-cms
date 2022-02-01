import { Box, BoxProps } from '@components';
import { Component, mergeProps } from 'solid-js';

interface ContentProps extends BoxProps {}

export const Content: Component<ContentProps> = (props) => {
  props = mergeProps({ gridArea: 'content', overflow: 'auto' }, props);
  return <Box {...props} />;
};
