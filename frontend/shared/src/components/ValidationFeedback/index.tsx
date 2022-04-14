import { CommonObject, FeedbackStatus } from '@app-types';
import { Typography } from '@components';
import { Component, createEffect, createSignal, Show } from 'solid-js';

export interface ValidationFeedbackProps {
  status?: FeedbackStatus;
  message?: string;
}

export const ValidationFeedback: Component<ValidationFeedbackProps> = (props) => {
  const [statusClassList, setStatusClassList] = createSignal<CommonObject>({});

  createEffect(() => {
    setStatusClassList({
      'valid-feedback': props.status === 'valid',
      'invalid-feedback': props.status === 'invalid',
    });
  });

  return (
    <Show when={props.message} fallback={<></>}>
      <Typography component="span" classList={statusClassList()}>
        {props.message}
      </Typography>
    </Show>
  );
};
