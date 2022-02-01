import { Component, createEffect, createSignal, JSX, mergeProps } from 'solid-js';

export interface ListItemProps extends JSX.HTMLAttributes<any> {
  component?: 'a' | 'li' | 'button';
  border?: boolean;
}

export const ListItem: Component<ListItemProps> = (props) => {
  const [borderClass, setBorderClass] = createSignal<string>('');

  props = mergeProps({ class: '', component: 'li' }, props);

  const computeBorderClass = (flag?: boolean) => {
    setBorderClass(() => (flag ? '' : ' border-0 '));
  };

  const derivedClass = () => ' list-group-item ' + borderClass();

  createEffect(() => computeBorderClass(props.border));

  return (
    <>
      {props.component === 'a' && <a {...props} class={props.class + derivedClass()} />}
      {props.component === 'li' && <li {...props} class={props.class + derivedClass()} />}
      {props.component === 'button' && (
        <button {...props} type="button" class={props.class + ' list-group-item-action ' + derivedClass()} />
      )}
    </>
  );
};
