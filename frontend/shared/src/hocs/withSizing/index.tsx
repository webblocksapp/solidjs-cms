import { Component, createEffect, createSignal, mergeProps } from 'solid-js';
import { SizingProps, Style } from '@app-types';
import { isBs5Size, parseSize, useMergeStyle } from '@utils';

export const withSizing = <T extends { class?: string; style?: Style }>(BaseComponent: Component<T>) => {
  return (props: T & SizingProps) => {
    const [widthClass, setWidthClass] = createSignal<string>('');
    const { style, mergeStyle } = useMergeStyle();
    props = mergeProps({ class: '' }, props);

    const computeWidth = (width?: SizingProps['width']) => {
      let className: string = '';

      if (width === undefined) {
        return;
      } else if (typeof width === 'string' && isBs5Size(width)) {
        className = ` w-${width.replace('%', '')} `;
      } else {
        mergeStyle(props.style, { width: parseSize(width) });
      }
      setWidthClass(className);
    };

    createEffect(() => computeWidth(props.width));

    return <BaseComponent {...props} class={props.class + widthClass()} style={style()} />;
  };
};
