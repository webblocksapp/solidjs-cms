import { SpacingProps, SpacingScale } from '@app-types';
import { Component, createEffect, createSignal, mergeProps } from 'solid-js';

export const withSpacing = <T extends { class?: string }>(BaseComponent: Component<T>) => {
  return (props: T & SpacingProps) => {
    const [marginClass, setMarginClass] = createSignal<string>('');
    const [marginTopClass, setMarginTopClass] = createSignal<string>('');
    const [marginRightClass, setMarginRightClass] = createSignal<string>('');
    const [marginBottomClass, setMarginBottomClass] = createSignal<string>('');
    const [marginLeftClass, setMarginLeftClass] = createSignal<string>('');
    const [marginXClass, setMarginXClass] = createSignal<string>('');
    const [marginYClass, setMarginYClass] = createSignal<string>('');
    const [paddingClass, setPaddingClass] = createSignal<string>('');
    const [paddingTopClass, setPaddingTopClass] = createSignal<string>('');
    const [paddingRightClass, setPaddingRightClass] = createSignal<string>('');
    const [paddingBottomClass, setPaddingBottomClass] = createSignal<string>('');
    const [paddingLeftClass, setPaddingLeftClass] = createSignal<string>('');
    const [paddingXClass, setPaddingXClass] = createSignal<string>('');
    const [paddingYClass, setPaddingYClass] = createSignal<string>('');
    props = mergeProps({ class: '' }, props);

    const computeMarginClass = (scale?: SpacingScale) => {
      setMarginClass(() => (scale ? ` m-${scale} ` : ''));
    };

    const computeMarginTopClass = (scale?: SpacingScale) => {
      setMarginTopClass(() => (scale ? ` mt-${scale} ` : ''));
    };

    const computeMarginRightClass = (scale?: SpacingScale) => {
      setMarginRightClass(() => (scale ? ` me-${scale} ` : ''));
    };

    const computeMarginBottomClass = (scale?: SpacingScale) => {
      setMarginBottomClass(() => (scale ? ` mb-${scale} ` : ''));
    };

    const computeMarginLeftClass = (scale?: SpacingScale) => {
      setMarginLeftClass(() => (scale ? ` ml-${scale} ` : ''));
    };

    const computeMarginXClass = (scale?: SpacingScale) => {
      setMarginXClass(() => (scale ? ` mx-${scale} ` : ''));
    };

    const computeMarginYClass = (scale?: SpacingScale) => {
      setMarginYClass(() => (scale ? ` my-${scale} ` : ''));
    };

    const computePaddingClass = (scale?: SpacingScale) => {
      setPaddingClass(() => (scale ? ` p-${scale} ` : ''));
    };

    const computePaddingTopClass = (scale?: SpacingScale) => {
      setPaddingTopClass(() => (scale ? ` pt-${scale} ` : ''));
    };

    const computePaddingRightClass = (scale?: SpacingScale) => {
      setPaddingRightClass(() => (scale ? ` pr-${scale} ` : ''));
    };

    const computePaddingBottomClass = (scale?: SpacingScale) => {
      setPaddingBottomClass(() => (scale ? ` pb-${scale} ` : ''));
    };

    const computePaddingLeftClass = (scale?: SpacingScale) => {
      setPaddingLeftClass(() => (scale ? ` pl-${scale} ` : ''));
    };

    const computePaddingXClass = (scale?: SpacingScale) => {
      setPaddingXClass(() => (scale ? ` px-${scale} ` : ''));
    };

    const computePaddingYClass = (scale?: SpacingScale) => {
      setPaddingYClass(() => (scale ? ` py-${scale} ` : ''));
    };

    createEffect(() => computeMarginClass(props.m || props.margin));
    createEffect(() => computeMarginTopClass(props.mt || props.marginTop));
    createEffect(() => computeMarginRightClass(props.mr || props.marginRight));
    createEffect(() => computeMarginBottomClass(props.mb || props.marginBottom));
    createEffect(() => computeMarginLeftClass(props.ml || props.marginLeft));
    createEffect(() => computeMarginXClass(props.mx || props.marginX));
    createEffect(() => computeMarginYClass(props.my || props.marginY));
    createEffect(() => computePaddingClass(props.p || props.padding));
    createEffect(() => computePaddingTopClass(props.pt || props.paddingTop));
    createEffect(() => computePaddingRightClass(props.pr || props.paddingRight));
    createEffect(() => computePaddingBottomClass(props.pb || props.paddingBottom));
    createEffect(() => computePaddingLeftClass(props.pl || props.paddingLeft));
    createEffect(() => computePaddingXClass(props.px || props.paddingX));
    createEffect(() => computePaddingYClass(props.py || props.paddingY));

    return (
      <BaseComponent
        {...props}
        class={
          props.class +
          marginClass() +
          marginTopClass() +
          marginRightClass() +
          marginBottomClass() +
          marginLeftClass() +
          marginXClass() +
          marginYClass() +
          paddingClass() +
          paddingTopClass() +
          paddingRightClass() +
          paddingBottomClass() +
          paddingLeftClass() +
          paddingXClass() +
          paddingYClass()
        }
      />
    );
  };
};
