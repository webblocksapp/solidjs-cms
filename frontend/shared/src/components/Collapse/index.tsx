import { DivElement } from '@app-types';
import * as bootstrap from 'bootstrap';
import { Component, createEffect, createSignal, onMount } from 'solid-js';

export interface CollapseProps extends DivElement {
  in?: boolean;
}

export const Collapse: Component<CollapseProps> = (props) => {
  let div: HTMLDivElement | undefined;
  let collapsableArea: bootstrap.Collapse | undefined;

  const toggle = (flag?: boolean) => {
    flag && collapsableArea?.show();
    flag === false && collapsableArea?.hide();
  };

  onMount(() => {
    collapsableArea = new bootstrap.Collapse(div as any, { toggle: false });
    toggle(props?.in);
  });

  createEffect(() => toggle(props?.in));

  return <div {...props} classList={{ collapse: props.in === false }} ref={div} />;
};
