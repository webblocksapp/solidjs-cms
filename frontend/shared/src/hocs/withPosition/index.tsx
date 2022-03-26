import { Component, createEffect } from 'solid-js';
import { CssClassProps, PositionsProps, Style } from '@app-types';
import { useMergeClassList, useMergeStyle } from '@utils';

export const withPosition = <T extends CssClassProps & { style?: Style }>(BaseComponent: Component<T>) => {
  return (props: T & PositionsProps) => {
    const { style, mergeStyle } = useMergeStyle();
    const { classList, mergeClassList } = useMergeClassList();

    createEffect(() => mergeStyle(props.style, { 'z-index': props.zIndex }));
    createEffect(() =>
      mergeClassList(props.classList, {
        'position-static': props.position === 'static',
        'position-relative': props.position === 'relative',
        'position-absolute': props.position === 'absolute',
        'position-fixed': props.position === 'fixed',
        'position-sticky': props.position === 'sticky',
      })
    );

    return <BaseComponent {...props} style={style()} classList={classList()} />;
  };
};
