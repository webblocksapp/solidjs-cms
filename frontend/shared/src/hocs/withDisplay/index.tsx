import { Component, createSignal, createEffect } from 'solid-js';
import { Display, DisplayProps } from '@app-types';

export const withDisplay = <T extends { class?: string }>(BaseComponent: Component<T>) => {
  return (props: T & DisplayProps) => {
    const [displayClass, setDisplayClass] = createSignal<string>('d-block');

    /**
     * Computes the bootstrap display class with the given css rule display
     * @param {Display} display
     */
    const computeDisplayClass = (display?: Display) => {
      setDisplayClass(() => (display ? ` d-${display} ` : ' d-block '));
    };

    createEffect(() => computeDisplayClass(props.display));

    return <BaseComponent {...props} class={props.class + displayClass()} />;
  };
};
