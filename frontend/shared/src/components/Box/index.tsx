import { Component, createEffect, createSignal } from 'solid-js';
import { BorderProps, Display, DivElement, PaletteProps } from '@app-types';
import { withBorder, withPalette } from '@hocs';

export interface BoxProps extends BorderProps, PaletteProps, DivElement {
  display?: Display;
}

let Box: Component<BoxProps> = (props) => {
  const [displayClass, setDisplayClass] = createSignal<string>('d-block');

  /**
   * Computes the bootstrap display class with the given css rule display
   * @param {Display} display
   */
  const computeDisplayClass = (display?: Display) => {
    setDisplayClass(() => (display ? ` d-${display} ` : ' d-block '));
  };

  createEffect(() => computeDisplayClass(props.display));

  return (
    <div {...props} class={props.class + displayClass()}>
      {props.children}
    </div>
  );
};

Box = withBorder(Box);
Box = withPalette(Box);

export { Box };
