import { Component } from 'solid-js';
import { OmitBaseFieldProps } from '@app-types';

export type FormFieldComponent<T> = Component<OmitBaseFieldProps<T>>;
