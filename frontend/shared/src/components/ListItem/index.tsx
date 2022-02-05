import { Component, createEffect, createSignal, JSX, mergeProps } from 'solid-js';

export interface ListItemProps extends JSX.HTMLAttributes<any> {
  component?: 'a' | 'li' | 'button';
  border?: boolean;
  active?: boolean;
}

export const ListItem: Component<ListItemProps> = (props) => {
  const [borderClass, setBorderClass] = createSignal<string>('');
  const [activeClass, setActiveClass] = createSignal<string>('');

  props = mergeProps({ class: '', component: 'li' }, props);

  const computeBorderClass = (flag?: boolean) => {
    setBorderClass(() => (flag ? '' : ' border-0 '));
  };

  const computeActiveClass = (flag?: boolean) => {
    setActiveClass(() => (flag ? ' active ' : ''));
  };

  const derivedClass = () => ' list-group-item ' + borderClass() + activeClass();

  createEffect(() => computeBorderClass(props.border));
  createEffect(() => computeActiveClass(props.active));

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
