import { Properties } from 'csstype';

export interface SizingProps {
  width?: Properties['width'];
  maxWidth?: Properties['maxWidth'];
  minWidth?: Properties['minWidth'];
  height?: Properties['height'];
  maxHeight?: Properties['maxHeight'];
  minHeight?: Properties['minHeight'];
  boxSizing?: Properties['boxSizing'];
}