import { PaletteColor, ThemeMode, DeviceSize } from '@app-types';
import { Box } from '@components';
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

  props = mergeProps({ class: '', mode: 'light', bgColor: 'light', expand: 'lg' }, props);

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
    <Box gridArea="navbar" {...props} class={props.class + ' navbar ' + bgColorClass() + modeClass() + expandClass()}>
      <Box px={3} py={1}>
        {props.brand}
      </Box>
    </Box>
  );
};
