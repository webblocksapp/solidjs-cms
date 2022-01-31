import { DivElement } from '@app-types';
import * as bootstrap from 'bootstrap';
import { Component, createEffect, createSignal, mergeProps, onMount } from 'solid-js';

export type CollapseHandler = { toggle: () => void };
export interface CollapseProps extends DivElement {
  expanded?: boolean;
  setHandler: (handler: CollapseHandler) => CollapseHandler;
}

export const Collapse: Component<CollapseProps> = (props) => {
  const [expand, setExpand] = createSignal<boolean>();
  props = mergeProps({ expanded: true }, props);

  let div: HTMLDivElement | undefined;
  let collapsableArea: bootstrap.Collapse | undefined;

  const _toggle = (flag?: boolean) => {
    flag && collapsableArea?.show();
    flag === false && collapsableArea?.hide();
  };

  const toggle = () => {
    if (!div?.classList.contains('collapsing')) {
      setExpand(!expand());
    }
  };

  onMount(() => {
    collapsableArea = new bootstrap.Collapse(div as any, { toggle: false });
    setExpand(props?.expanded);
    props.setHandler({ toggle });
  });

  createEffect(() => _toggle(expand()));

  return (
    <div {...props} classList={{ collapse: props.expanded === false, 'collapse show': props.expanded }} ref={div} />
  );
};
