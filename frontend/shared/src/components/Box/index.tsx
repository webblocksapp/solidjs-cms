import { Component } from 'solid-js';
import {
  BorderProps,
  DisplayProps,
  DivElement,
  FlexboxProps,
  GridProps,
  OverflowProps,
  PaletteProps,
  PositionsProps,
  ShadowsProps,
  SizingProps,
  SpacingProps,
  TypographyProps,
} from '@app-types';
import {
  withBorder,
  withDisplay,
  withFlex,
  withGrid,
  withPalette,
  withPosition,
  withShadow,
  withSizing,
  withSpacing,
  withTypography,
} from '@hocs';
import { Properties } from 'csstype';
import { withOverflow } from 'hocs/withOverflow';

export interface BoxProps
  extends BorderProps,
    DisplayProps,
    DivElement,
    FlexboxProps,
    GridProps,
    OverflowProps,
    PaletteProps,
    PositionsProps,
    ShadowsProps,
    SizingProps,
    SpacingProps,
    TypographyProps {
  gridTemplateColumns?: Properties['gridTemplateColumns'];
  gridTemplateRows?: Properties['gridTemplateRows'];
}

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
Box = withSpacing(Box);
Box = withTypography(Box);
Box = withGrid(Box);
Box = withOverflow(Box);

export { Box };
