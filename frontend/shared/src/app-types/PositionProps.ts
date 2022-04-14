import { Properties } from 'csstype';
import { PositionScale } from '@app-types';

export interface PositionProps {
  position?: Properties['position'];
  zIndex?: Properties['zIndex'];
  top?: PositionScale;
  right?: PositionScale;
  bottom?: PositionScale;
  left?: PositionScale;
}