import { Typography } from '@components';
import { Component, mergeProps } from 'solid-js';

export interface HelperTextProps {
  class?: string;
}

export const HelperText: Component<HelperTextProps> = (props) => {
  props = mergeProps({ class: '' }, props);
  return (
    <Typography component="small" class={props.class + ' form-text text-muted '}>
      {props.children}
    </Typography>
  );
};
