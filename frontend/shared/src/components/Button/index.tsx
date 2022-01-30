import { ButtonElement } from '@app-types';
import { Component, mergeProps } from 'solid-js';

export interface ButtonProps extends ButtonElement {}

export const Button: Component<ButtonProps> = (props) => {
  props = mergeProps({ class: 'btn' }, props);

  return <button {...props} class={props.class} />;
};
