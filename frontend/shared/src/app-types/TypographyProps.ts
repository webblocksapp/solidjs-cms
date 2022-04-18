import { JSX } from 'solid-js';
import { FontSizeScale } from '@app-types';

export interface TypographyProps {
  fontFamily?: JSX.CSSProperties['font-family'];
  fontSize?: FontSizeScale;
  fontStyle?: JSX.CSSProperties['font-style'];
  fontWeight?: JSX.CSSProperties['font-weight'];
  letterSpacing?: JSX.CSSProperties['letter-spacing'];
  lineHeight?: 1 | 'sm' | 'base' | 'lg';
  monospace?: boolean;
  reset?: boolean;
  textAlign?: JSX.CSSProperties['text-align'];
  textDecoration?: JSX.CSSProperties['text-decoration'];
  textOverflow?: 'wrap' | 'nowrap' | 'break';
  textTransform?: JSX.CSSProperties['text-transform'];
}
