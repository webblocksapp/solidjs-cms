import { Component, createEffect, createSignal } from 'solid-js';
import { FlexboxProps } from '@app-types';
import { Properties } from 'csstype';

export const withFlex = <T extends { class?: Properties['flexDirection'] }>(BaseComponent: Component<T>) => {
  return (props: T & FlexboxProps) => {
    const [flexDirectionClass, setFlexDirectionClass] = createSignal<string>('');
    const [flexWrapClass, setFlexWrapClass] = createSignal<string>('');
    const [justifyContentClass, setJustifyContentClass] = createSignal<string>('');
    const [alignItemsClass, setAlignItemsClass] = createSignal<string>('');
    const [alignContentClass, setAlignContentClass] = createSignal<string>('');
    const [orderClass, setOrderClass] = createSignal<string>('');
    const [flexGrowClass, setFlexGrowClass] = createSignal<string>('');
    const [flexShrinkClass, setFlexShrinkClass] = createSignal<string>('');
    const [alignSelfClass, setAlignSelfClass] = createSignal<string>('');

    /**
     * Computes the flex direction class with the given css rule value.
     * @param flexDirection
     */
    const computeFlexDirectionClass = (flexDirection?: Properties['flexDirection']) => {
      setFlexDirectionClass(() => (flexDirection ? ` flex-${flexDirection} ` : ''));
    };

    /**
     * Computes the flex wrap class with the given css rule value.
     * @param flexWrap
     */
    const computeFlexWrapClass = (flexWrap?: Properties['flexWrap']) => {
      setFlexWrapClass(() => (flexWrap ? ` flex-${flexWrap} ` : ''));
    };

    /**
     * Computes the justify content class with the given css rule value.
     * @param justifyContent
     */
    const computeJustifyContentClass = (justifyContent?: Properties['justifyContent']) => {
      setJustifyContentClass(() => (justifyContent ? ` justify-content-${justifyContent} ` : ''));
    };

    /**
     * Computes the align items class with the given css rule value.
     * @param alignItems
     */
    const computeAlignItemsClass = (alignItems?: Properties['alignItems']) => {
      setAlignItemsClass(() => (alignItems ? ` align-items-${alignItems} ` : ''));
    };

    /**
     * Computes the align content class with the given css rule value.
     * @param alignContent
     */
    const computeAlignContentClass = (alignContent?: Properties['alignContent']) => {
      setAlignContentClass(() => (alignContent ? ` align-content-${alignContent} ` : ''));
    };

    /**
     * Computes the flex order class with the given css rule value.
     * @param order
     */
    const computeOrderClass = (order?: Properties['order']) => {
      setOrderClass(() => (order ? ` order-${order} ` : ''));
    };

    /**
     * Computes the flex grow class with the given css rule value.
     * @param flexGrow
     */
    const computeFlexGrowClass = (flexGrow?: Properties['flexGrow']) => {
      setFlexGrowClass(() => (flexGrow ? ` flex-grow-${flexGrow} ` : ''));
    };

    /**
     * Computes the flex shrink class with the given css rule value.
     * @param flexShrink
     */
    const computeFlexShrinkClass = (flexShrink?: Properties['flexShrink']) => {
      setFlexShrinkClass(() => (flexShrink ? ` flex-shrink-${flexShrink} ` : ''));
    };

    /**
     * Computes the align self class with the given css rule value.
     * @param alignSelf
     */
    const computeAlignSelfClass = (alignSelf?: Properties['alignSelf']) => {
      setAlignSelfClass(() => (alignSelf ? ` align-self-${alignSelf} ` : ''));
    };

    createEffect(() => computeFlexDirectionClass(props.flexDirection));
    createEffect(() => computeFlexWrapClass(props.flexWrap));
    createEffect(() => computeJustifyContentClass(props.justifyContent));
    createEffect(() => computeAlignItemsClass(props.alignItems));
    createEffect(() => computeAlignContentClass(props.alignContent));
    createEffect(() => computeOrderClass(props.order));
    createEffect(() => computeFlexGrowClass(props.flexGrow));
    createEffect(() => computeFlexShrinkClass(props.flexShrink));
    createEffect(() => computeAlignSelfClass(props.alignSelf));

    return (
      <BaseComponent
        {...props}
        class={
          props.class +
          flexDirectionClass() +
          flexWrapClass() +
          justifyContentClass() +
          alignItemsClass() +
          alignContentClass() +
          orderClass() +
          flexGrowClass() +
          flexShrinkClass() +
          alignSelfClass()
        }
      />
    );
  };
};
