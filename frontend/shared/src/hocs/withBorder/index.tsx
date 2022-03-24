import { Component, mergeProps } from 'solid-js';
import { BorderProps } from '@app-types';

export const withBorder = <T extends { class?: string }>(BaseComponent: Component<T>) => {
  return (props: T & BorderProps) => {
    props = mergeProps({ class: '' }, props);

    return (
      <BaseComponent
        {...props}
        class={props.class}
        classList={{
          border: props.border,
          'border-1': props.border == 1,
          'border-2': props.border == 2,
          'border-3': props.border == 3,
          'border-4': props.border == 4,
          'border-5': props.border == 5,
          'border-top': props.borderTop,
          'border-top-0': props.borderTop == 0,
          'border-end': props.borderRight,
          'border-right-0': props.borderRight == 0,
          'border-bottom': props.borderBottom,
          'border-bottom-0': props.borderBottom == 0,
          'border-start': props.borderLeft,
          'border-start-0': props.borderLeft == 0,
        }}
      />
    );
  };
};
