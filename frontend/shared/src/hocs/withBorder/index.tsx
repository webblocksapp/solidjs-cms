import { Component, createSignal, createEffect } from 'solid-js';
import { BorderProps, BorderScale, OneZero } from '@app-types';

/**
 * HoC which adds border props.
 */
export const withBorder = <T extends { class?: string }>(BaseComponent: Component<T>) => {
  return (props: T & BorderProps) => {
    const [borderWidthClass, setBorderScaleClass] = createSignal<string>('');
    const [borderClass, setBorderClass] = createSignal<string>('');
    const [borderTopClass, setBorderTopClass] = createSignal<string>('');
    const [borderRightClass, setBorderRightClass] = createSignal<string>('');
    const [borderBottomClass, setBorderBottomClass] = createSignal<string>('');
    const [borderLeftClass, setBorderLeftClass] = createSignal<string>('');

    /**
     * Computes the bootstrap border width
     * @param {BorderScale} width
     */
    const computeBorderScaleClass = (width?: BorderScale) => {
      setBorderScaleClass(() => (width ? ` border-${width} ` : ''));
    };

    /**
     * Computes the bootstrap border class with the given border width
     * @param {BorderScale} width
     */
    const computeBorderClass = (width?: BorderScale) => {
      computeBorderScaleClass(width);
      setBorderClass(() => (width ? ` border ` : ''));
    };

    /**
     * Computes the bootstrap border top class
     * @param {OneZero} flag
     */
    const computeBorderTopClass = (flag?: OneZero) => {
      setBorderTopClass(() => (props.borderTop ? ` border-top-${flag} ` : ''));
    };

    /**
     * Computes the bootstrap border right class
     * @param {OneZero} flag
     */
    const computeBorderRightClass = (flag?: OneZero) => {
      setBorderRightClass(() => (props.borderRight ? ` border-end-${flag} ` : ''));
    };

    /**
     * Computes the bootstrap border bottom class
     * @param {OneZero} flag
     */
    const computeBorderBottomClass = (flag?: OneZero) => {
      setBorderBottomClass(() => (props.borderBottom ? ` border-bottom-${flag} ` : ''));
    };

    /**
     * Computes the bootstrap border left class
     * @param {OneZero} flag
     */
    const computeBorderLeftClass = (flag?: OneZero) => {
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
