import { Component, createSignal, createEffect, mergeProps } from 'solid-js';
import { PaletteColor, PaletteProps } from '@app-types';

export const withPalette = <T extends { class?: string }>(BaseComponent: Component<T>) => {
  return (props: T & PaletteProps) => {
    const [bgcolorClass, setBgcolorClass] = createSignal<string>('');
    props = mergeProps({ class: '' }, props);

    const computeBgcolorClass = (bgcolor?: PaletteColor) => {
      setBgcolorClass(() => (bgcolor ? ` bg-${bgcolor} ` : ''));
    };

    createEffect(() => computeBgcolorClass(props.bgcolor));

    return <BaseComponent {...props} class={props.class + bgcolorClass()} />;
  };
};
