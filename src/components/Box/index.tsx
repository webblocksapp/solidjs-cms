import { Component, createEffect, createSignal } from 'solid-js';
import { Display } from '@app-types';

export interface BoxProps {
  display?: Display;
}

export const Box: Component<BoxProps> = ({ children, ...props }) => {
  const [getDisplay, setDisplay] = createSignal();

  const computeDisplay = (display: Display) => {};

  createEffect(() => {
    console.log('Hello world');
  });

  console.log('Initialized');

  return <div>{children}</div>;
};
