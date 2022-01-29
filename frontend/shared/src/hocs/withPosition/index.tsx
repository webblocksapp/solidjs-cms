import { Component, createEffect, createSignal, mergeProps } from 'solid-js';
import { PositionsProps, Style } from '@app-types';
import { useMergeStyle } from '@utils';

export const withPosition = <T extends { class?: string; style?: Style }>(BaseComponent: Component<T>) => {
  return (props: T & PositionsProps) => {
    const [positionClass, setPositionClass] = createSignal<string>('');
    const [topClass, setTopClass] = createSignal<string>('');
    const [rightClass, setRightClass] = createSignal<string>('');
    const [bottomClass, setBottomClass] = createSignal<string>('');
    const [leftClass, setLeftClass] = createSignal<string>('');
    const { style, mergeStyle } = useMergeStyle();
    props = mergeProps({ class: '' }, props);

    const computePositionClass = (position?: PositionsProps['position']) => {
      setPositionClass(() => (position ? ` position-${position} ` : ''));
    };

    const computeTopClass = (top?: PositionsProps['top']) => {
      setTopClass(() => (top ? ` top-${top} ` : ''));
    };

    const computeRightClass = (right?: PositionsProps['right']) => {
      setRightClass(() => (right ? ` end-${right} ` : ''));
    };

    const computeBottomClass = (bottom?: PositionsProps['bottom']) => {
      setBottomClass(() => (bottom ? ` bottom-${bottom} ` : ''));
    };

    const computeLeftClass = (left?: PositionsProps['left']) => {
      setLeftClass(() => (left ? ` left-${left} ` : ''));
    };

    const computeZIndexStyle = (zIndex?: PositionsProps['zIndex']) => {
      zIndex && mergeStyle(props.style, { 'z-index': zIndex });
    };

    createEffect(() => computePositionClass(props.position));
    createEffect(() => computeTopClass(props.top));
    createEffect(() => computeRightClass(props.right));
    createEffect(() => computeBottomClass(props.bottom));
    createEffect(() => computeLeftClass(props.left));
    createEffect(() => computeZIndexStyle(props.zIndex));

    return (
      <BaseComponent
        {...props}
        style={style()}
        class={props.class + positionClass() + topClass() + rightClass() + bottomClass() + leftClass()}
      />
    );
  };
};
