import { Component, createEffect, createSignal, mergeProps } from 'solid-js';
import { PositionScale, PositionsProps, Style } from '@app-types';
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

    /**
     * Computes the position class with the given css rule value.
     * @param position
     */
    const computePositionClass = (position?: PositionsProps['position']) => {
      setPositionClass(() => (position ? ` position-${position} ` : ''));
    };

    /**
     * Computes the position class with the given position scale value.
     * @param position
     */
    const computeTopClass = (top?: PositionScale) => {
      setTopClass(() => (top ? ` top-${top} ` : ''));
    };

    /**
     * Computes the position class with the given position scale value.
     * @param position
     */
    const computeRightClass = (right?: PositionScale) => {
      setRightClass(() => (right ? ` end-${right} ` : ''));
    };

    /**
     * Computes the position class with the given position scale value.
     * @param position
     */
    const computeBottomClass = (bottom?: PositionScale) => {
      setBottomClass(() => (bottom ? ` bottom-${bottom} ` : ''));
    };

    /**
     * Computes the position class with the given position scale value.
     * @param position
     */
    const computeLeftClass = (left?: PositionScale) => {
      setLeftClass(() => (left ? ` left-${left} ` : ''));
    };

    /**
     * Computes the zIndex style with the given css rule value.
     * @param position
     */
    const computeZIndexStyle = (zIndex?: PositionsProps['zIndex']) => {
      mergeStyle(props.style, { 'z-index': zIndex });
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
