import { Component } from 'solid-js';
import {
  BorderProps,
  Display,
  DisplayProps,
  DivElement,
  FlexboxProps,
  PaletteProps,
  PositionsProps,
  ShadowsProps,
} from '@app-types';
import { withBorder, withDisplay, withPalette, withFlex, withPosition } from '@hocs';
import { withShadow } from 'hocs/withShadow';

export interface BoxProps
  extends ShadowsProps,
    PositionsProps,
    FlexboxProps,
    DisplayProps,
    BorderProps,
    PaletteProps,
    DivElement {
  display?: Display;
}

let Box: Component<BoxProps> = (props) => {
  return <div {...props}>{props.children}</div>;
};

Box = withBorder(Box);
Box = withPalette(Box);
Box = withDisplay(Box);
Box = withFlex(Box);
Box = withPosition(Box);
Box = withShadow(Box);

export { Box };
