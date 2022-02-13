import { FeedbackStatus, FormHandler } from '@app-types';
import { batch, Component, createEffect, createSignal, createUniqueId, mergeProps } from 'solid-js';

export interface BaseFieldProps {
  class?: string;
  disabled?: boolean;
  errorMessage?: string;
  feedbackClass?: string;
  formHandler?: FormHandler;
  formHandlerOnInput: (value: any) => void;
  formHandlerOnSelect: (value: any) => void;
  formHandlerOnClear: () => void;
  helperText?: string;
  id?: string;
  message?: string;
  name?: string;
  status?: FeedbackStatus;
  validMessage?: string;
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

    const formHandlerOnInput = (value: any) => {
      props.formHandler && props.formHandler.setFieldValue(props.name, value);
    };

    const formHandlerOnSelect = (value: any) => {
      props.formHandler && props.formHandler.setFieldValue(props.name, value);
    };

    const formHandlerOnClear = () => {
      props.formHandler && props.formHandler.setFieldValue(props.name, '');
    };

    createEffect(() => batch(() => computeFeedBack(props.errorMessage, props.validMessage)));

    /**
     * Computes the error feedback if a form handler has been assigned.
     */
    createEffect(() => batch(() => props.formHandler && computeFeedBack(props.formHandler.getFieldError(props.name))));

    return (
      <BaseComponent
        {...props}
        feedbackClass={feedbackClass()}
        formHandlerOnInput={formHandlerOnInput}
        formHandlerOnSelect={formHandlerOnSelect}
        formHandlerOnClear={formHandlerOnClear}
        id={id}
        message={message()}
        status={status()}
      />
    );
  };
};
