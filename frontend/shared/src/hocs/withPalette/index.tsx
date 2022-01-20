import { Component, createSignal, createEffect } from 'solid-js';
import { PaletteColor, PaletteProps } from '@app-types';

/**
 * HoC which adds color props
 */
export const withPalette = <T extends { class?: string }>(
  BaseComponent: Component<T>
) => {
  return (props: T & PaletteProps) => {
    const [bgcolorClass, setBgcolorClass] = createSignal<string>('');

    /**
     * Computes the bootstrap background color class
     * @param {PaletteColor} bgcolor
     */
    const computeBgcolorClass = (bgcolor?: PaletteColor) => {
      setBgcolorClass(() => (bgcolor ? ` bg-${bgcolor} ` : ''));
    };

    createEffect(() => computeBgcolorClass(props.bgcolor));

    return <BaseComponent {...props} class={props.class + bgcolorClass()} />;
  };
};
