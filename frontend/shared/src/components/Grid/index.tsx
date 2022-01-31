import { Component, createEffect, createSignal } from 'solid-js';
import { SpacingScale, ColSize } from '@app-types';

export interface GridProps {
  container?: boolean;
  spacing?: SpacingScale;
  rowSpacing?: SpacingScale;
  columnSpacing?: SpacingScale;
  item?: boolean;
  xs?: ColSize;
  sm?: ColSize;
  md?: ColSize;
  lg?: ColSize;
  xl?: ColSize;
  xxl?: ColSize;
}

export const Grid: Component<GridProps> = (props) => {
  const [containerClass, setContainerClass] = createSignal<string>('');
  const [spacingClass, setSpacingClass] = createSignal<string>('');
  const [rowSpacingClass, setRowSpacingClass] = createSignal<string>('');
  const [columnSpacingClass, setColumnSpacingClass] = createSignal<string>('');
  const [xsColClass, setXsColClass] = createSignal<string>('');
  const [smColClass, setSmColClass] = createSignal<string>('');
  const [mdColClass, setMdColClass] = createSignal<string>('');
  const [lgColClass, setLgColClass] = createSignal<string>('');
  const [xlColClass, setXlColClass] = createSignal<string>('');
  const [xxlColClass, setXxlColClass] = createSignal<string>('');

  const computeContainerClass = (flag?: boolean) => {
    setContainerClass(() => (flag ? ' row ' : ''));
  };

  const computeSpacingClass = (spacing?: SpacingScale) => {
    setSpacingClass(() => (spacing ? ` g-${spacing} ` : ''));
  };

  const computeRowSpacingClass = (spacing?: SpacingScale) => {
    setRowSpacingClass(() => (spacing ? ` gy-${spacing} ` : ''));
  };

  const computeColumnSpacingClass = (spacing?: SpacingScale) => {
    setColumnSpacingClass(() => (spacing ? ` gx-${spacing} ` : ''));
  };

  const computeXsColClass = (colSize?: number, item?: boolean) => {
    setXsColClass(() => {
      if (colSize && props.item) {
        return `col-${colSize}`;
      } else if (item) {
        return `col-12`;
      }

      return '';
    });
  };

  const computeSmColClass = (colSize?: number) => {
    setSmColClass(() => (colSize && props.item ? ` col-sm-${colSize} ` : ''));
  };

  const computeMdColClass = (colSize?: number) => {
    setMdColClass(() => (colSize && props.item ? ` col-md-${colSize} ` : ''));
  };

  const computeLgColClass = (colSize?: number) => {
    setLgColClass(() => (colSize && props.item ? ` col-lg-${colSize} ` : ''));
  };

  const computeXlColClass = (colSize?: number) => {
    setXlColClass(() => (colSize && props.item ? ` col-xl-${colSize} ` : ''));
  };

  const computeXxlColClass = (colSize?: number) => {
    setXxlColClass(() => (colSize && props.item ? ` col-xxl-${colSize} ` : ''));
  };

  createEffect(() => computeContainerClass(props.container));
  createEffect(() => computeSpacingClass(props.spacing));
  createEffect(() => computeRowSpacingClass(props.rowSpacing));
  createEffect(() => computeColumnSpacingClass(props.columnSpacing));
  createEffect(() => computeXsColClass(undefined, props.item));
  createEffect(() => computeXsColClass(props.xs));
  createEffect(() => computeSmColClass(props.sm));
  createEffect(() => computeMdColClass(props.md));
  createEffect(() => computeLgColClass(props.lg));
  createEffect(() => computeXlColClass(props.xl));
  createEffect(() => computeXxlColClass(props.xxl));

  return (
    <div
      class={
        containerClass() +
        spacingClass() +
        rowSpacingClass() +
        columnSpacingClass() +
        xsColClass() +
        smColClass() +
        mdColClass() +
        lgColClass() +
        xlColClass() +
        xxlColClass()
      }
    >
      {props.children}
    </div>
  );
};
