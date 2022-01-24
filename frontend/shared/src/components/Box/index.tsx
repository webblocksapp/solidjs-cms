import { Component } from 'solid-js';
import { BorderProps, Display, DisplayProps, DivElement, FlexboxProps, PaletteProps } from '@app-types';
import { withBorder, withDisplay, withPalette, withFlex } from '@hocs';

export interface BoxProps extends FlexboxProps, DisplayProps, BorderProps, PaletteProps, DivElement {
  display?: Display;
}

let Box: Component<BoxProps> = (props) => {
  return <div {...props}>{props.children}</div>;
};

Box = withBorder(Box);
Box = withPalette(Box);
Box = withDisplay(Box);
Box = withFlex(Box);

export { Box };
