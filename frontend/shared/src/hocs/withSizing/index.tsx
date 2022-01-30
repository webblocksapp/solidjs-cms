import { Component, createEffect, createSignal, mergeProps } from 'solid-js';
import { SizingProps, Style } from '@app-types';
import { isBs5Size, parseSize, useMergeStyle } from '@utils';

export const withSizing = <T extends { class?: string; style?: Style }>(BaseComponent: Component<T>) => {
  return (props: T & SizingProps) => {
    const [widthClass, setWidthClass] = createSignal<string>('');
    const [fullHeightClass, setFullHeightClass] = createSignal<string>('');
    const [fullWidthClass, setFullWidthClass] = createSignal<string>('');
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

    const computeFullHeightClass = (flag?: boolean) => {
      setFullHeightClass(() => (flag ? ' h-100 ' : ''));
    };

    const computeFullWidthClass = (flag?: boolean) => {
      setFullWidthClass(() => (flag ? ' w-100 ' : ''));
    };

    createEffect(() => computeWidth(props.width));
    createEffect(() => computeFullHeightClass(props.fullHeight));
    createEffect(() => computeFullWidthClass(props.fullWidth));

    return (
      <BaseComponent
        {...props}
        class={props.class + widthClass() + fullHeightClass() + fullWidthClass()}
        style={style()}
      />
    );
  };
};
