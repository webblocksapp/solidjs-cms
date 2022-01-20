import { Properties } from 'csstype';

export interface GridProps {
  gap?: Properties['gap'];
  columnGap?: Properties['columnGap'];
  rowGap?: Properties['rowGap'];
  gridColumn?: Properties['gridColumn'];
  gridRow?: Properties['gridRow'];
  gridAutoFlow?: Properties['gridAutoFlow'];
  gridAutoColumns?: Properties['gridAutoColumns'];
  gridAutoRows?: Properties['gridAutoRows'];
  gridTemplateColumns?: Properties['gridTemplateColumns'];
  gridTemplateRows?: Properties['gridTemplateRows'];
  gridTemplateAreas?: Properties['gridTemplateAreas'];
  gridArea?: Properties['gridArea'];
}
