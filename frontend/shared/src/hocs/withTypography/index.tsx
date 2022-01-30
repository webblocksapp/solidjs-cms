import { TypographyProps } from '@app-types';
import { Component, createEffect, createSignal, mergeProps } from 'solid-js';

export const withTypography = <T extends { class?: string }>(
  BaseComponent: Component<T>,
  defaultProps?: Partial<T>
) => {
  return (props: T & TypographyProps) => {
    const [fontSizeClass, setFontSizeClass] = createSignal<string>('');
    const [fontStyleClass, setFontStyleClass] = createSignal<string>('');
    const [fontWeightClass, setFontWeightClass] = createSignal<string>('');
    const [lineHeightClass, setLineHeightClass] = createSignal<string>('');
    const [textAlignClass, setTextAlignClass] = createSignal<string>('');
    const [textTransformClass, setTextTransformClass] = createSignal<string>('');
    const [textOverflowClass, setTextOverflowClass] = createSignal<string>('');
    const [monospaceClass, setMonospaceClass] = createSignal<string>('');
    const [textDecorationClass, setTextDecorationClass] = createSignal<string>('');
    props = mergeProps({ class: '', ...defaultProps }, props);

    const computeFontSizeClass = (value?: TypographyProps['fontSize']) => {
      setFontSizeClass(() => (value ? `fs-${value}` : ''));
    };

    const computeFontStyleClass = (value?: TypographyProps['fontStyle']) => {
      setFontStyleClass(() => (value ? ` fst-${value} ` : ''));
    };

    const computeFontWeightClass = (value?: TypographyProps['fontWeight']) => {
      setFontWeightClass(() => (value ? ` fw-${value} ` : ''));
    };

    const computeLineHeightClass = (value?: TypographyProps['lineHeight']) => {
      setLineHeightClass(() => (value ? ` lh-${value} ` : ''));
    };

    const computeTextAlignClass = (value?: TypographyProps['textAlign']) => {
      value = value === 'right' ? 'end' : value;
      setTextAlignClass(() => (value ? ` text-${value} ` : ''));
    };

    const computeTextTransformClass = (value?: TypographyProps['textTransform']) => {
      setTextTransformClass(() => (value ? ` text-${value} ` : ''));
    };

    const computeTextOverflowClass = (value?: TypographyProps['textOverflow']) => {
      setTextOverflowClass(() => (value ? ` text-${value} ` : ''));
    };

    const computeMonospaceClass = (flag?: boolean) => {
      setMonospaceClass(() => (flag ? ` text-monospace ` : ''));
    };

    const computeTextDecorationClass = (value?: TypographyProps['textDecoration']) => {
      setTextDecorationClass(() => (value ? ` text-decoration-${value} ` : ''));
    };

    createEffect(() => computeFontSizeClass(props.fontSize));
    createEffect(() => computeFontStyleClass(props.fontStyle));
    createEffect(() => computeFontWeightClass(props.fontWeight));
    createEffect(() => computeLineHeightClass(props.lineHeight));
    createEffect(() => computeTextAlignClass(props.textAlign));
    createEffect(() => computeTextTransformClass(props.textTransform));
    createEffect(() => computeTextOverflowClass(props.textOverflow));
    createEffect(() => computeMonospaceClass(props.monospace));
    createEffect(() => computeTextDecorationClass(props.textDecoration));

    return (
      <BaseComponent
        {...props}
        class={
          props.class +
          fontSizeClass() +
          fontStyleClass() +
          fontWeightClass() +
          lineHeightClass() +
          textAlignClass() +
          textTransformClass() +
          textOverflowClass() +
          monospaceClass() +
          textDecorationClass()
        }
      />
    );
  };
};
