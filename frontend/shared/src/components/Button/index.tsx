import { ButtonElement, PaletteColor, Variant } from '@app-types';
import { Component, createEffect } from 'solid-js';
import { useMergeClassList } from '@utils';

export interface ButtonProps extends ButtonElement {
  color?: PaletteColor;
  variant?: Variant;
}

export const Button: Component<ButtonProps> = (props) => {
  const { classList, mergeClassList } = useMergeClassList();

  createEffect(() => {
    const variantClass = props.variant === 'contained' ? '' : 'outline-';
    const colorClass = props.color ? `btn-${variantClass}${props.color}` : '';
    mergeClassList(props.classList, { [colorClass]: true, btn: true });
  });

  return <button {...props} classList={classList()} />;
};
