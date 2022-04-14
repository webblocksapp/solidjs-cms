import { Component } from 'solid-js';
import {
  DisplayProps,
  DivElement,
  FlexboxProps,
  GridProps,
  OverflowProps,
  PaletteProps,
  PositionProps,
  ShadowProps,
  SizingProps,
  SpacingProps,
  TypographyProps,
} from '@app-types';
import {
  withBorder,
  withDisplay,
  withFlex,
  withGrid,
  withOverflow,
  withPalette,
  withPosition,
  withShadow,
  withSizing,
  withSpacing,
  withTypography,
} from '@hocs';

export interface BaseBoxProps extends DivElement {}
export interface BoxProps
  extends BaseBoxProps,
    DisplayProps,
    FlexboxProps,
    GridProps,
    OverflowProps,
    PaletteProps,
    PositionProps,
    ShadowProps,
    SizingProps,
    SpacingProps,
    TypographyProps {}

export const BaseBox: Component<BaseBoxProps> = (props) => <div {...props}>{props.children}</div>;
export const Box = withBorder(
  withDisplay(
    withFlex(
      withGrid(withOverflow(withPalette(withPosition(withShadow(withSizing(withSpacing(withTypography(BaseBox))))))))
    )
  )
);
