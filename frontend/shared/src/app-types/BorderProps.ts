import { BorderScale, OneZero } from '@app-types';

export interface BorderProps {
  border?: BorderScale;
  borderTop?: OneZero;
  borderLeft?: OneZero;
  borderRight?: OneZero;
  borderBottom?: OneZero;
  borderColor?: BorderScale;
  borderTopColor?: BorderScale;
  borderRightColor?: BorderScale;
  borderBottomColor?: BorderScale;
  borderLeftColor?: BorderScale;
  borderRadius?: BorderScale;
}
