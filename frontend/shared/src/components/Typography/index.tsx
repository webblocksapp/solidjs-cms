import { TypographyComponent } from '@app-types';
import { withTypography } from '@hocs';
import { Component } from 'solid-js';

export interface TypographyProps {
  class?: string;
  component?: TypographyComponent;
}

let Typography: Component<TypographyProps> = (props) => {
  return (
    <>
      {props.component === undefined && <p {...props} class={props.class} />}
      {props.component === 'p' && <p {...props} class={props.class} />}
      {props.component === 'h1' && <h1 {...props} class={props.class} />}
      {props.component === 'h2' && <h2 {...props} class={props.class} />}
      {props.component === 'h3' && <h3 {...props} class={props.class} />}
      {props.component === 'h4' && <h4 {...props} class={props.class} />}
      {props.component === 'h5' && <h5 {...props} class={props.class} />}
      {props.component === 'h6' && <h6 {...props} class={props.class} />}
      {props.component === 'span' && <span {...props} class={props.class} />}
      {props.component === 'small' && <small {...props} class={props.class} />}
      {props.component === 'mark' && <mark {...props} class={props.class} />}
      {props.component === 's' && <s {...props} class={props.class} />}
      {props.component === 'u' && <u {...props} class={props.class} />}
      {props.component === 'b' && <b {...props} class={props.class} />}
      {props.component === 'i' && <i {...props} class={props.class} />}
      {props.component === 'blockquote' && <blockquote {...props} class={' blockquote ' + props.class} />}
      {props.component === 'figcaption' && <figcaption {...props} class={' blockquote-footer ' + props.class} />}
    </>
  );
};

Typography = withTypography(Typography);

export { Typography };
