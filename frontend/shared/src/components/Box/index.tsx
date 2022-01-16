import { Component, createEffect, createSignal } from 'solid-js';
import { Color, Display, BorderWidth, OneZero } from '@app-types';

export interface BoxProps {
  display?: Display;
  bgcolor?: Color;
  border?: BorderWidth;
  borderTop?: OneZero;
  borderRight?: OneZero;
  borderBottom?: OneZero;
  borderLeft?: OneZero;
}

export const Box: Component<BoxProps> = (props) => {
  const [displayClass, setDisplayClass] = createSignal<string>('d-block');
  const [bgcolorClass, setBgcolorClass] = createSignal<string>('');
  const [borderWidthClass, setBorderWidthClass] = createSignal<string>('');
  const [borderClass, setBorderClass] = createSignal<string>('');
  const [borderTopClass, setBorderTopClass] = createSignal<string>('');
  const [borderRightClass, setBorderRightClass] = createSignal<string>('');
  const [borderBottomClass, setBorderBottomClass] = createSignal<string>('');
  const [borderLeftClass, setBorderLeftClass] = createSignal<string>('');

  //Computes the bootstrap display class with the given css rule display
  const computeDisplayClass = (display?: Display) => {
    setDisplayClass(() => (display ? ` d-${display} ` : ' d-block '));
  };

  //Computes the bootstrap background color class
  const computeBgcolorClass = (bgcolor?: Color) => {
    setBgcolorClass(() => (bgcolor ? ` bg-${bgcolor} ` : ''));
  };

  //Computes the bootstrap border width
  const computeBorderWidthClass = (width?: BorderWidth) => {
    setBorderWidthClass(() => (width ? ` border-${width} ` : ''));
  };

  //Computes the bootstrap border class with the given border width
  const computeBorderClass = (width?: BorderWidth) => {
    computeBorderWidthClass(width);
    setBorderClass(() => (width ? ` border ` : ''));
  };

  //Computes the bootstrap border top class
  const computeBorderTopClass = (flag?: OneZero) => {
    setBorderTopClass(() => (props.borderTop ? ` border-top-${flag} ` : ''));
  };

  //Computes the bootstrap border right class
  const computeBorderRightClass = (flag?: OneZero) => {
    setBorderRightClass(() =>
      props.borderRight ? ` border-end-${flag} ` : ''
    );
  };

  //Computes the bootstrap border bottom class
  const computeBorderBottomClass = (flag?: OneZero) => {
    setBorderBottomClass(() =>
      props.borderBottom ? ` border-bottom-${flag} ` : ''
    );
  };

  //Computes the bootstrap border left class
  const computeBorderLeftClass = (flag?: OneZero) => {
    setBorderLeftClass(() =>
      props.borderLeft ? ` border-start-${flag} ` : ''
    );
  };

  createEffect(() => computeDisplayClass(props.display));
  createEffect(() => computeBgcolorClass(props.bgcolor));
  createEffect(() => computeBorderClass(props.border));
  createEffect(() => computeBorderTopClass(props.borderTop));
  createEffect(() => computeBorderRightClass(props.borderRight));
  createEffect(() => computeBorderBottomClass(props.borderBottom));
  createEffect(() => computeBorderLeftClass(props.borderLeft));

  return (
    <div
      class={
        displayClass() +
        bgcolorClass() +
        borderWidthClass() +
        borderClass() +
        borderTopClass() +
        borderRightClass() +
        borderBottomClass() +
        borderLeftClass()
      }
    >
      {props.children}
    </div>
  );
};
