import { Component, createEffect, createSignal } from 'solid-js';
import { Spacing, ColSize } from '@app-types';

export interface GridProps {
  container?: boolean;
  spacing?: Spacing;
  rowSpacing?: Spacing;
  columnSpacing?: Spacing;
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

  //Implements the gutters class which adds spacing at x and y.
  const computeContainerClass = (flag?: boolean) => {
    setContainerClass(() => (flag ? ' row ' : ''));
  };

  //Implements the gutters class which adds spacing at x and y.
  const computeSpacingClass = (spacing?: Spacing) => {
    setSpacingClass(() => (spacing ? ` g-${spacing} ` : ''));
  };

  //Implements the gutters class which adds spacing at y (Between rows).
  const computeRowSpacingClass = (spacing?: Spacing) => {
    setRowSpacingClass(() => (spacing ? ` gy-${spacing} ` : ''));
  };

  //Implements the gutters class which adds spacing at x (Between cols).
  const computeColumnSpacingClass = (spacing?: Spacing) => {
    setColumnSpacingClass(() => (spacing ? ` gx-${spacing} ` : ''));
  };

  //Implements the xs col class
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

  //Implements the sm col class
  const computeSmColClass = (colSize?: number) => {
    setSmColClass(() => (colSize && props.item ? ` col-sm-${colSize} ` : ''));
  };

  //Implements the sm col class
  const computeMdColClass = (colSize?: number) => {
    setMdColClass(() => (colSize && props.item ? ` col-md-${colSize} ` : ''));
  };

  //Implements the lg col class
  const computeLgColClass = (colSize?: number) => {
    setLgColClass(() => (colSize && props.item ? ` col-lg-${colSize} ` : ''));
  };

  //Implements the xl col class
  const computeXlColClass = (colSize?: number) => {
    setXlColClass(() => (colSize && props.item ? ` col-xl-${colSize} ` : ''));
  };

  //Implements the xxl col class
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
