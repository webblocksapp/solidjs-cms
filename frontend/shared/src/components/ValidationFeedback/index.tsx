import { FeedbackStatus } from '@app-types';
import { Typography } from '@components';
import { Component, createEffect, createSignal, Show } from 'solid-js';

export interface ValidationFeedbackProps {
  status?: FeedbackStatus;
  message?: string;
}

export const ValidationFeedback: Component<ValidationFeedbackProps> = (props) => {
  const [statusClass, setStatusClass] = createSignal<string>('');

  const computeStatusClass = (value?: FeedbackStatus) => {
    setStatusClass(() => {
      switch (value) {
        case 'valid':
          return 'valid-feedback';
        case 'invalid':
          return 'invalid-feedback';
        default:
          return '';
      }
    });
  };

  createEffect(() => computeStatusClass(props.status));

  return (
    <Show when={props.message} fallback={<></>}>
      <Typography component="span" class={statusClass()}>
        {props.message}
      </Typography>
    </Show>
  );
};
