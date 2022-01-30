import { Component, createSignal, createEffect, mergeProps } from 'solid-js';
import { PaletteProps } from '@app-types';

export const withPalette = <T extends { class?: string }>(BaseComponent: Component<T>) => {
  return (props: T & PaletteProps) => {
    const [bgcolorClass, setBgcolorClass] = createSignal<string>('');
    const [colorClass, setColorClass] = createSignal<string>();
    props = mergeProps({ class: '' }, props);

    const computeBgcolorClass = (value?: PaletteProps['bgcolor']) => {
      setBgcolorClass(() => (value ? ` bg-${value} ` : ''));
    };

    const computeColorClass = (value?: PaletteProps['color']) => {
      setColorClass(() => (value ? ` text-${value} ` : ''));
    };

    createEffect(() => computeBgcolorClass(props.bgcolor));
    createEffect(() => computeColorClass(props.color));

    return <BaseComponent {...props} class={props.class + bgcolorClass() + colorClass()} />;
  };
};
