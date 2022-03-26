import { CssClassProps, TypographyProps } from '@app-types';
import { useMergeClassList } from '@utils';
import { Component, createEffect } from 'solid-js';

export const withTypography = <T extends CssClassProps>(BaseComponent: Component<T>) => {
  return (props: T & TypographyProps) => {
    const { classList, mergeClassList } = useMergeClassList();

    createEffect(() =>
      mergeClassList(props.classList, {
        'fs-1': props.fontSize == 1,
        'fs-2': props.fontSize == 2,
        'fs-3': props.fontSize == 3,
        'fs-4': props.fontSize == 4,
        'fs-5': props.fontSize == 5,
        'fs-6': props.fontSize == 6,
        'fst-italic': props.fontStyle === 'italic',
        'fst-normal': props.fontStyle === 'normal',
        'fw-bolder': props.fontWeight === 'bolder',
        'fw-light': props.fontWeight === 'light',
        'fw-lighter': props.fontWeight === 'lighter',
        'fw-normal': props.fontWeight === 'normal',
        'lh-1': props.lineHeight == 1,
        'lh-sm': props.lineHeight === 'sm',
        'lh-base': props.lineHeight === 'base',
        'lh-lg': props.lineHeight == 'lg',
        'font-monospace': props.monospace,
        reset: props.reset,
        'text-decoration-underline': props.textDecoration === 'underline',
        'text-decoration-line-through': props.textDecoration === 'line-through',
        'text-decoration-none': props.textDecoration === 'none',
        'text-wrap': props.textOverflow === 'wrap',
        'text-nowrap': props.textOverflow === 'nowrap',
        'text-break': props.textOverflow === 'break',
        'text-lowercase': props.textTransform === 'lowercase',
        'text-uppercase': props.textTransform === 'uppercase',
        'text-capitalize': props.textTransform === 'capitalize',
      })
    );

    return <BaseComponent {...props} classList={classList()} />;
  };
};
