import { Component, createEffect, createSignal, JSX, mergeProps } from 'solid-js';

export interface ListProps extends JSX.HTMLAttributes<any> {
  component?: 'div' | 'ul' | 'ol';
  numbered?: boolean;
}

export const List: Component<ListProps> = (props) => {
  const [numberedClass, setNumberedClass] = createSignal<string>('');
  props = mergeProps({ class: '', component: 'ul' }, props);

  const computeNumberedClass = (flag?: boolean) => {
    setNumberedClass(() => (flag ? ' list-group-numbered ' : ''));
  };

  createEffect(() => computeNumberedClass(props.numbered));

  return (
    <>
      {props.component === 'div' && <div {...props} class={props.class + ' list-group ' + numberedClass()} />}
      {props.component === 'ul' && <ul {...props} class={props.class + ' list-group ' + numberedClass()} />}
      {props.component === 'ol' && <ol {...props} class={props.class + ' list-group list-group-numbered '} />}
    </>
  );
};
