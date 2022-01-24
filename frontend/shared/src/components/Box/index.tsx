import { Component } from 'solid-js';
import { BorderProps, Display, DivElement, PaletteProps } from '@app-types';
import { withBorder, withDisplay, withPalette } from '@hocs';

export interface BoxProps extends BorderProps, PaletteProps, DivElement {
  display?: Display;
}

let Box: Component<BoxProps> = (props) => {
  return <div {...props}>{props.children}</div>;
};

Box = withBorder(Box);
Box = withPalette(Box);
Box = withDisplay(Box);

export { Box };
