import { Component, createSignal, createEffect, mergeProps } from 'solid-js';
import { DisplayProps } from '@app-types';

export const withDisplay = <T extends { class?: string }>(BaseComponent: Component<T>) => {
  return (props: T & DisplayProps) => {
    const [displayClass, setDisplayClass] = createSignal<string>('d-block');
    props = mergeProps({ class: '' }, props);

    const computeDisplayClass = (display?: DisplayProps['display']) => {
      setDisplayClass(() => (display ? ` d-${display} ` : ' d-block '));
    };

    createEffect(() => computeDisplayClass(props.display));

    return <BaseComponent {...props} class={props.class + displayClass()} />;
  };
};