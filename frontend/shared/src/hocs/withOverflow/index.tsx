import { OverflowProps } from '@app-types';
import { Component, createEffect, createSignal, mergeProps } from 'solid-js';

export const withOverflow = <T extends { class?: string }>(BaseComponent: Component<T>) => {
  return (props: T & OverflowProps) => {
    const [overflowClass, setOverflowClass] = createSignal<string>('');
    props = mergeProps({ class: '' }, props);

    const computeOverflowClass = (value?: OverflowProps['overflow']) => {
      setOverflowClass(() => (value ? ` overflow-${value} ` : ''));
    };

    createEffect(() => computeOverflowClass(props.overflow));

    return <BaseComponent {...props} class={props.class + overflowClass()} />;
  };
};
