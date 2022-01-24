import { Component, createEffect, createSignal, JSX } from 'solid-js';
import { PositionScale, PositionsProps } from '@app-types';
import { Properties } from 'csstype';

export const withPosition = <T extends { class?: string; style?: string | JSX.CSSProperties }>(
  BaseComponent: Component<T>
) => {
  return (props: T & PositionsProps) => {
    const [positionClass, setPositionClass] = createSignal<string>('');
    const [topClass, setTopClass] = createSignal<string>('');
    const [rightClass, setRightClass] = createSignal<string>('');
    const [bottomClass, setBottomClass] = createSignal<string>('');
    const [leftClass, setLeftClass] = createSignal<string>('');

    /**
     * Computes the position class with the given css rule value.
     * @param position
     */
    const computePositionClass = (position?: Properties['position']) => {
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

    createEffect(() => computePositionClass(props.position));
    createEffect(() => computeTopClass(props.top));
    createEffect(() => computeRightClass(props.right));
    createEffect(() => computeBottomClass(props.bottom));
    createEffect(() => computeLeftClass(props.left));

    return (
      <BaseComponent
        {...props}
        style={
          typeof props.style === 'object'
            ? { ...props.style, zIndex: props.zIndex }
            : `${props.style} z-index: ${props.zIndex}`
        }
        class={props.class + positionClass() + topClass() + rightClass() + bottomClass() + leftClass()}
      />
    );
  };
};
