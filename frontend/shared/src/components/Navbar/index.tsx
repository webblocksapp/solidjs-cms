import { PaletteColor, ThemeMode, DeviceSize } from '@app-types';
import { Box, Button, Typography } from '@components';
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
    <Box {...props} class={props.class + ' navbar ' + bgColorClass() + modeClass() + expandClass()}>
      <Box px={3} py={1}>
        {props.brand}
        <Button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          {props.togglerIcon ? props.togglerIcon : <Typography component="span" class="navbar-toggler-icon" />}
        </Button>
        <Box class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Box pt={2} class="navbar-nav">
            {props.children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
