import { Component, createEffect } from 'solid-js';
import { SizingProps, Style } from '@app-types';
import { parseSize, useMergeStyle } from '@utils';

export const withSizing = <T extends { class?: string; style?: Style }>(BaseComponent: Component<T>) => {
  return (props: T & SizingProps) => {
    const { style, mergeStyle } = useMergeStyle();

    const fullHeight = () => {
      return props.fullHeight ? '100%' : undefined;
    };

    const fullWidth = () => {
      return props.fullWidth ? '100%' : undefined;
    };

    createEffect(() =>
      mergeStyle(props.style, {
        width: fullWidth() || parseSize(props.width),
        height: fullHeight() || parseSize(props.height),
        maxWidth: parseSize(props.maxWidth),
        maxHeight: parseSize(props.maxHeight),
      })
    );

    return <BaseComponent {...props} style={style()} />;
  };
};
