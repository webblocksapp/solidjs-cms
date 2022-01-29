import { Properties } from 'csstype';
import { FontSizeScale } from '@app-types';

export interface TypographyProps {
  fontFamily?: Properties['fontFamily'];
  fontSize?: FontSizeScale;
  fontStyle?: Properties['fontStyle'];
  fontWeight?: Properties['fontWeight'];
  letterSpacing?: Properties['letterSpacing'];
  lineHeight?: Properties['lineHeight'];
  monospace?: boolean;
  textAlign?: Properties['textAlign'];
  textDecoration?: Properties['textDecoration'];
  textOverflow?: 'wrap' | 'nowrap' | 'break';
  textTransform?: Properties['textTransform'];
}
