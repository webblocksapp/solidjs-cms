import { FeedbackStatus } from '@app-types';
import { batch, Component, createEffect, createSignal, createUniqueId, mergeProps } from 'solid-js';

export interface BaseFieldProps {
  id?: string;
  errorMessage?: string;
  validMessage?: string;
  message?: string;
  status?: FeedbackStatus;
  feedbackClass?: string;
}

export const withBaseField = <T,>(BaseComponent: Component<T>) => {
  return (props: T & BaseFieldProps) => {
    const id = createUniqueId();
    const [message, setMessage] = createSignal<string | undefined>('');
    const [status, setStatus] = createSignal<FeedbackStatus | undefined>();
    const [feedbackClass, setFeedbackClass] = createSignal<string>('');
    props = mergeProps({ class: '' }, props);

    const computeFeedBack = (errorMessage?: string, validMessage?: string) => {
      if (errorMessage) {
        setMessage(errorMessage);
        setStatus('invalid');
        setFeedbackClass(' is-invalid ');
      } else if (validMessage) {
        setMessage(validMessage);
        setStatus('valid');
        setFeedbackClass(' is-valid ');
      } else {
        setMessage('');
        setStatus();
        setFeedbackClass('');
      }
    };

    createEffect(() => batch(() => computeFeedBack(props.errorMessage, props.validMessage)));

    return <BaseComponent {...props} id={id} message={message()} status={status()} feedbackClass={feedbackClass()} />;
  };
};
