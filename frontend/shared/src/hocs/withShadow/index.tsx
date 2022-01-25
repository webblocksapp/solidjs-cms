import { Component, createEffect, createSignal, mergeProps } from 'solid-js';
import { ShadowsProps } from '@app-types';

export const withShadow = <T extends { class?: string }>(BaseComponent: Component<T>) => {
  return (props: T & ShadowsProps) => {
    const [boxShadowClass, setBoxShadowClass] = createSignal<string>('');
    props = mergeProps({ class: '' }, props);

    /**
     * Computes the shadow class with the given shadow scale value.
     * @param scale
     */
    const computeBoxShadowClass = (scale: ShadowsProps['boxShadow']) => {
      setBoxShadowClass(() => {
        switch (scale) {
          case 0:
            return ' shadow-none ';
          case 1:
            return ' shadow-sm ';
          case 2:
            return ' shadow ';
          case 3:
            return ' shadow-lg ';
          default:
            return '';
        }
      });
    };

    createEffect(() => computeBoxShadowClass(props.boxShadow));

    return <BaseComponent {...props} class={props.class + boxShadowClass()} />;
  };
};
