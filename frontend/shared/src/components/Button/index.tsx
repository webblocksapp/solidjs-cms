import { ButtonElement, PaletteColor, Variant } from '@app-types';
import { Component, createEffect, createSignal, mergeProps } from 'solid-js';

export interface ButtonProps extends ButtonElement {
  color?: PaletteColor;
  variant?: Variant;
}

export const Button: Component<ButtonProps> = (props) => {
  const [colorClass, setColorClass] = createSignal<string>('');
  props = mergeProps({ class: 'btn' }, props);

  const computeColorClass = (value?: PaletteColor, variant: Variant = 'contained') => {
    const variantClass = variant === 'contained' ? '' : 'outline-';
    setColorClass(() => (value ? ` btn-${variantClass}${value} ` : ''));
  };

  createEffect(() => computeColorClass(props.color, props.variant));

  return <button {...props} class={props.class + colorClass()} />;
};
