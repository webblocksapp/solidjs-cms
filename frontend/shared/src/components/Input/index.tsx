import { InputElement } from '@app-types';
import { Component } from 'solid-js';

export interface InputProps extends InputElement {}

export const Input: Component<InputProps> = (props) => {
  return <input {...props} />;
};
