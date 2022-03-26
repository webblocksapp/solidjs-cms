import { CssClassProps, OverflowProps } from '@app-types';
import { useMergeClassList } from '@utils';
import { Component, createEffect } from 'solid-js';

export const withOverflow = <T extends CssClassProps>(BaseComponent: Component<T>) => {
  return (props: T & OverflowProps) => {
    const { classList, mergeClassList } = useMergeClassList();

    createEffect(() =>
      mergeClassList(props.classList, {
        'overflow-auto': props.overflow == 'auto',
        'overflow-hidden': props.overflow == 'hidden',
        'overflow-visible': props.overflow == 'visible',
        'overflow-scroll': props.overflow == 'scroll',
      })
    );

    return <BaseComponent {...props} classList={classList()} />;
  };
};
