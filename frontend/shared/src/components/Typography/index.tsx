import { TypographyComponent, TypographyProps as BaseTypographyProps, PaletteProps, CssClassProps } from '@app-types';
import { withPalette, withTypography } from '@hocs';
import { Component } from 'solid-js';

export interface TypographyProps extends BaseTypographyProps, PaletteProps, CssClassProps {
  class?: string;
  component?: TypographyComponent;
}

let Typography: Component<TypographyProps> = (props) => {
  return (
    <>
      {props.component === undefined && <p {...props} />}
      {props.component === 'p' && <p {...props} />}
      {props.component === 'h1' && <h1 {...props} />}
      {props.component === 'h2' && <h2 {...props} />}
      {props.component === 'h3' && <h3 {...props} />}
      {props.component === 'h4' && <h4 {...props} />}
      {props.component === 'h5' && <h5 {...props} />}
      {props.component === 'h6' && <h6 {...props} />}
      {props.component === 'span' && <span {...props} />}
      {props.component === 'small' && <small {...props} />}
      {props.component === 'mark' && <mark {...props} />}
      {props.component === 's' && <s {...props} />}
      {props.component === 'u' && <u {...props} />}
      {props.component === 'b' && <b {...props} />}
      {props.component === 'i' && <i {...props} />}
      {props.component === 'blockquote' && <blockquote {...props} class={' blockquote ' + props.class} />}
      {props.component === 'figcaption' && <figcaption {...props} class={' blockquote-footer ' + props.class} />}
    </>
  );
};

Typography = withTypography(Typography);
Typography = withPalette(Typography);

export { Typography };
