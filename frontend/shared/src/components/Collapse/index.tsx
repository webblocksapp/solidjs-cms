import { DivElement } from '@app-types';
import * as bootstrap from 'bootstrap';
import { Component, createEffect, mergeProps, onMount } from 'solid-js';

export type CollapseHandler = { toggle: () => void };
export interface CollapseProps extends DivElement {
  expand?: boolean;
}

export const Collapse: Component<CollapseProps> = (props) => {
  let div: HTMLDivElement | undefined;
  let collapsableArea: bootstrap.Collapse | undefined;
  props = mergeProps({ class: 'collapse' }, props);

  const toggle = (flag?: boolean) => {
    flag === true && show();
    flag === false && hide();
  };

  const show = () => {
    collapsableArea?.show();
  };

  const hide = () => {
    collapsableArea?.hide();
  };

  onMount(() => {
    collapsableArea = new bootstrap.Collapse(div as any, { toggle: false });
    props.expand && div?.classList.add('show');
    div?.addEventListener('shown.bs.collapse', function () {
      props.expand === false && collapsableArea?.hide();
    });
    div?.addEventListener('hidden.bs.collapse', function () {
      props.expand === true && collapsableArea?.show();
    });
    toggle(props.expand);
  });

  createEffect(() => {
    toggle(props.expand);
  });

  return <div {...props} ref={div} />;
};
