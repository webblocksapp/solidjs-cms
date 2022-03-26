import { Properties } from 'csstype';
import { FontSizeScale } from '@app-types';

export interface TypographyProps {
  fontFamily?: Properties['fontFamily'];
  fontSize?: FontSizeScale;
  fontStyle?: Properties['fontStyle'];
  fontWeight?: Properties['fontWeight'];
  letterSpacing?: Properties['letterSpacing'];
  lineHeight?: 1 | 'sm' | 'base' | 'lg';
  monospace?: boolean;
  reset?: boolean;
  textAlign?: Properties['textAlign'];
  textDecoration?: Properties['textDecoration'];
  textOverflow?: 'wrap' | 'nowrap' | 'break';
  textTransform?: Properties['textTransform'];
}
