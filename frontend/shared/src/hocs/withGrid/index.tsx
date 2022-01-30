import { GridProps, Style } from '@app-types';
import { useMergeStyle } from '@utils';
import { Component, createEffect } from 'solid-js';

export const withGrid = <T extends { class?: string; style?: Style }>(BaseComponent: Component<T>) => {
  return (props: T & GridProps) => {
    const { style, mergeStyle } = useMergeStyle();

    createEffect(() =>
      mergeStyle(props.style, {
        'grid-template-columns': props.gridTemplateColumns,
        'grid-template-rows': props.gridTemplateRows,
      })
    );

    return <BaseComponent {...props} style={style()} />;
  };
};
