import { Component, createEffect, createSignal, mergeProps } from 'solid-js';
import { SizingProps, Style } from '@app-types';
import { isBs5Size, parseSize, useMergeStyle } from '@utils';

export const withSizing = <T extends { class?: string; style?: Style }>(BaseComponent: Component<T>) => {
  return (props: T & SizingProps) => {
    const [widthClass, setWidthClass] = createSignal<string>('');
    const { style, mergeStyle } = useMergeStyle();
    props = mergeProps({ class: '' }, props);

    /**
     * Computes the sizing class with the given sizing scale value.
     * @param scale
     */
    const computeWidthClass = (scale?: SizingProps['width']) => {
      let className: string = '';
      if (typeof scale === 'string' && isBs5Size(scale)) {
        className = ` w-${scale.replace('%', '')} `;
      } else {
        mergeStyle(props.style, { width: parseSize(props?.width) });
      }
      setWidthClass(className);
    };

    createEffect(() => computeWidthClass(props.width));

    return <BaseComponent {...props} class={props.class + widthClass()} style={style()} />;
  };
};
