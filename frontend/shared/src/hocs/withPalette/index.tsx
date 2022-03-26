import { Component, createEffect } from 'solid-js';
import { CssClassProps, PaletteProps } from '@app-types';
import { useMergeClassList } from '@utils';

export const withPalette = <T extends CssClassProps>(BaseComponent: Component<T>) => {
  return (props: T & PaletteProps) => {
    const { classList, mergeClassList } = useMergeClassList();

    createEffect(() =>
      mergeClassList(props.classList, {
        'bg-body': props.bgcolor === 'body',
        'bg-danger': props.bgcolor === 'danger',
        'bg-dark': props.bgcolor === 'dark',
        'bg-info': props.bgcolor === 'info',
        'bg-light': props.bgcolor === 'light',
        'bg-primary': props.bgcolor === 'primary',
        'bg-secondary': props.bgcolor === 'secondary',
        'bg-success': props.bgcolor === 'success',
        'bg-transparent': props.bgcolor === 'transparent',
        'bg-warning': props.bgcolor === 'warning',
        'bg-white': props.bgcolor === 'white',
        'text-body': props.color === 'body',
        'text-danger': props.color === 'danger',
        'text-dark': props.color === 'dark',
        'text-info': props.color === 'info',
        'text-light': props.color === 'light',
        'text-muted': props.color === 'muted',
        'text-primary': props.color === 'primary',
        'text-secondary': props.color === 'secondary',
        'text-success': props.color === 'success',
        'text-warning': props.color === 'warning',
        'text-white': props.color === 'white',
      })
    );

    return <BaseComponent {...props} classList={classList()} />;
  };
};
