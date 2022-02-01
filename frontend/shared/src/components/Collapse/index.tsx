import { DivElement } from '@app-types';
import * as bootstrap from 'bootstrap';
import { Component, createEffect, onMount } from 'solid-js';

export type CollapseHandler = { toggle: () => void };
export interface CollapseProps extends DivElement {
  expand?: boolean;
}

export const Collapse: Component<CollapseProps> = (props) => {
  let div: HTMLDivElement | undefined;
  let collapsableArea: bootstrap.Collapse | undefined;

  const toggle = (flag?: boolean) => {
    if (!div?.classList.contains('collapsing')) {
      flag !== undefined && collapsableArea?.toggle();
    }
  };

  onMount(() => {
    collapsableArea = new bootstrap.Collapse(div as any, { toggle: false });
    props.expand === false && div?.classList.add('collapse');
    props.expand === true && div?.classList.add('collapse', 'show');
  });

  createEffect(() => toggle(props.expand));

  return <div {...props} ref={div} />;
};
