import { Component, createSignal, createEffect, mergeProps } from 'solid-js';
import { BorderProps } from '@app-types';

export const withBorder = <T extends { class?: string }>(BaseComponent: Component<T>) => {
  return (props: T & BorderProps) => {
    const [borderWidthClass, setBorderScaleClass] = createSignal<string>('');
    const [borderClass, setBorderClass] = createSignal<string>('');
    const [borderTopClass, setBorderTopClass] = createSignal<string>('');
    const [borderRightClass, setBorderRightClass] = createSignal<string>('');
    const [borderBottomClass, setBorderBottomClass] = createSignal<string>('');
    const [borderLeftClass, setBorderLeftClass] = createSignal<string>('');
    props = mergeProps({ class: '' }, props);

    const computeBorderScaleClass = (width?: BorderProps['border']) => {
      setBorderScaleClass(() => (width ? ` border-${width} ` : ''));
    };

    const computeBorderClass = (width?: BorderProps['border']) => {
      computeBorderScaleClass(width);
      setBorderClass(() => (width ? ` border ` : ''));
    };

    const computeBorderTopClass = (flag?: BorderProps['borderTop']) => {
      setBorderTopClass(() => (props.borderTop ? ` border-top-${flag} ` : ''));
    };

    const computeBorderRightClass = (flag?: BorderProps['borderRight']) => {
      setBorderRightClass(() => (props.borderRight ? ` border-end-${flag} ` : ''));
    };

    const computeBorderBottomClass = (flag?: BorderProps['borderBottom']) => {
      setBorderBottomClass(() => (props.borderBottom ? ` border-bottom-${flag} ` : ''));
    };

    const computeBorderLeftClass = (flag?: BorderProps['borderLeft']) => {
      setBorderLeftClass(() => (props.borderLeft ? ` border-start-${flag} ` : ''));
    };

    createEffect(() => computeBorderClass(props.border));
    createEffect(() => computeBorderTopClass(props.borderTop));
    createEffect(() => computeBorderRightClass(props.borderRight));
    createEffect(() => computeBorderBottomClass(props.borderBottom));
    createEffect(() => computeBorderLeftClass(props.borderLeft));

    return (
      <BaseComponent
        {...props}
        class={
          props.class +
          borderWidthClass() +
          borderClass() +
          borderTopClass() +
          borderRightClass() +
          borderBottomClass() +
          borderLeftClass()
        }
      />
    );
  };
};
