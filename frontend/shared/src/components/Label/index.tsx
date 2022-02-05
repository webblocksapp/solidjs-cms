import { LabelElement } from 'app-types/LabelElement';
import { Component } from 'solid-js';

export interface LabelProps extends LabelElement {}

export const Label: Component<LabelProps> = (props) => {
  return <label {...props} />;
};
