import { Component, createEffect, createSignal, JSX, mergeProps } from 'solid-js';

export interface ListItemProps extends JSX.HTMLAttributes<any> {
  component?: 'a' | 'li';
  border?: boolean;
}

export const ListItem: Component<ListItemProps> = (props) => {
  const [borderClass, setBorderClass] = createSignal<string>('');
  props = mergeProps({ class: '', component: 'li' }, props);

  const computeBorderClass = (flag?: boolean) => {
    setBorderClass(() => (flag ? '' : ' border-0 '));
  };

  createEffect(() => computeBorderClass(props.border));

  return (
    <>
      {props.component === 'a' && <a {...props} class={props.class + ' list-item list-group-item' + borderClass()} />}
      {props.component === 'li' && <li {...props} class={props.class + ' list-item list-group-item' + borderClass()} />}
    </>
  );
};
