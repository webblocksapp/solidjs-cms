import { PaletteColor, ThemeMode, DeviceSize } from '@app-types';
import { Component, createEffect, createSignal, JSXElement, mergeProps } from 'solid-js';

export interface NavbarProps {
  bgColor?: PaletteColor;
  brand?: JSXElement;
  class?: string;
  mode?: ThemeMode;
  togglerIcon?: JSXElement;
  expand?: DeviceSize;
}

export const Navbar: Component<NavbarProps> = (props) => {
  const [bgColorClass, setBgColorClass] = createSignal<string>('');
  const [modeClass, setModeClass] = createSignal<string>('');
  const [expandClass, setExpandClass] = createSignal<string>('');

  props = mergeProps({ mode: 'light', bgColor: 'light', expand: 'lg' }, props);

  const computeBgColorClass = (value?: PaletteColor) => {
    setBgColorClass(() => (value ? ` bg-${value} ` : ''));
  };

  const computeModeClass = (value?: ThemeMode) => {
    setModeClass(() => (value ? ` navbar-${value} ` : ''));
  };

  const computeExpandClass = (value?: DeviceSize) => {
    setExpandClass(() => (value ? ` navbar-expand-${value} ` : ''));
  };

  createEffect(() => computeBgColorClass(props.bgColor));
  createEffect(() => computeModeClass(props.mode));
  createEffect(() => computeExpandClass(props.expand));

  return (
    <nav {...props} class={props.class + ' navbar ' + bgColorClass() + modeClass() + expandClass()}>
      <div class="container-fluid">
        {props.brand}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          {props.togglerIcon ? props.togglerIcon : <span class="navbar-toggler-icon"></span>}
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">{props.children}</div>
        </div>
      </div>
    </nav>
  );
};
