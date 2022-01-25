import { Component } from 'solid-js';
import {
  BorderProps,
  DisplayProps,
  DivElement,
  FlexboxProps,
  PaletteProps,
  PositionsProps,
  ShadowsProps,
  SizingProps,
} from '@app-types';
import { withBorder, withDisplay, withFlex, withPalette, withPosition, withShadow, withSizing } from '@hocs';

export interface BoxProps
  extends BorderProps,
    DisplayProps,
    DivElement,
    FlexboxProps,
    PaletteProps,
    PositionsProps,
    ShadowsProps,
    SizingProps {}

let Box: Component<BoxProps> = (props) => {
  return <div {...props}>{props.children}</div>;
};

Box = withBorder(Box);
Box = withDisplay(Box);
Box = withFlex(Box);
Box = withPalette(Box);
Box = withPosition(Box);
Box = withShadow(Box);
Box = withSizing(Box);

export { Box };
