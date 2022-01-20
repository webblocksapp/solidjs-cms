import { Properties } from 'csstype';

export interface FlexboxProps {
  flexDirection?: Properties['flexDirection'];
  flexWrap?: Properties['flexWrap'];
  justifyContent?: Properties['justifyContent'];
  alignItems?: Properties['alignItems'];
  alignContent?: Properties['alignContent'];
  order?: Properties['order'];
  flex?: Properties['flex'];
  flexGrow?: Properties['flexGrow'];
  flexShrink?: Properties['flexShrink'];
  alignSelf?: Properties['alignSelf'];
}
