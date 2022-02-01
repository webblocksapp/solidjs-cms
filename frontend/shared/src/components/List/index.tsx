import { Component, createEffect, createSignal, JSX, mergeProps } from 'solid-js';

export interface ListProps extends JSX.HTMLAttributes<any> {
  component?: 'div' | 'ul' | 'ol';
  numbered?: boolean;
  flush?: boolean;
}

export const List: Component<ListProps> = (props) => {
  const [numberedClass, setNumberedClass] = createSignal<string>('');
  const [flushClass, setFlushClass] = createSignal<string>('');
  props = mergeProps({ class: '', component: 'ul' }, props);

  const computeNumberedClass = (flag?: boolean, component?: string) => {
    setNumberedClass(() => (flag || component === 'ol' ? ' list-group-numbered ' : ''));
  };

  const computeFlushClass = (flag?: boolean) => {
    setFlushClass(() => (flag ? ' list-group-flush ' : ''));
  };

  const derivedClass = () => ' list-group ' + numberedClass() + flushClass();

  createEffect(() => computeNumberedClass(props.numbered, props.component));
  createEffect(() => computeFlushClass(props.flush));

  return (
    <>
      {props.component === 'div' && <div {...props} class={props.class + derivedClass()} />}
      {props.component === 'ul' && <ul {...props} class={props.class + derivedClass()} />}
      {props.component === 'ol' && <ol {...props} class={props.class + derivedClass()} />}
    </>
  );
};
