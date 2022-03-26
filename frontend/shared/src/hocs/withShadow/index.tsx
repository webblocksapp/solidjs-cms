import { Component, createEffect } from 'solid-js';
import { CssClassProps, ShadowsProps } from '@app-types';
import { useMergeClassList } from '@utils';

export const withShadow = <T extends CssClassProps>(BaseComponent: Component<T>) => {
  return (props: T & ShadowsProps) => {
    const { classList, mergeClassList } = useMergeClassList();

    createEffect(() =>
      mergeClassList(props.classList, {
        'shadow-none': props.boxShadow == 0,
        'shadow-sm': props.boxShadow == 1,
        shadow: props.boxShadow == 2,
        'shadow-lg': props.boxShadow == 3,
      })
    );

    return <BaseComponent {...props} classList={classList()} />;
  };
};
