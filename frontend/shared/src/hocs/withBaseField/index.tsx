import { FeedbackStatus, FormHandler } from '@app-types';
import { batch, Component, createEffect, createSignal, createUniqueId, mergeProps, onMount } from 'solid-js';

export interface BaseFieldProps {
  class?: string;
  disabled?: boolean;
  errorMessage?: string;
  feedbackClass?: string;
  formHandler?: FormHandler;
  formHandlerOnInput: (value: any) => void;
  formHandlerOnChange: (value: any) => void;
  formHandlerOnSelect: (value: any) => void;
  formHandlerOnBlur: (value: any) => void;
  formHandlerOnClear: () => void;
  formHandlerOnClose: (value: any) => void;
  helperText?: string;
  id?: string;
  label?: string;
  message?: string;
  name?: string;
  setValue: (value: any) => void;
  status?: FeedbackStatus;
  validMessage?: string;
  value?: any | Array<any>;
}

export const withBaseField = <T,>(BaseComponent: Component<T>) => {
  return (props: T & BaseFieldProps) => {
    const id = createUniqueId();
    const [message, setMessage] = createSignal<string | undefined>('');
    const [status, setStatus] = createSignal<FeedbackStatus | undefined>();
    const [feedbackClass, setFeedbackClass] = createSignal<string>('');
    const [value, setValue] = createSignal<any>();
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
      setValue(value);
      props.formHandler && props.formHandler.setFieldValue(props.name, value);
    };

    const formHandlerOnChange = (value: any) => {
      setValue(value);
      props.formHandler && props.formHandler.setFieldValue(props.name, value);
    };

    const formHandlerOnSelect = (value: any) => {
      setValue(value);
      props.formHandler && props.formHandler.setFieldValue(props.name, value);
    };

    const formHandlerOnClear = () => {
      setValue('');
      props.formHandler && props.formHandler.setFieldValue(props.name, '');
    };

    const formHandlerOnBlur = (value: any) => {
      setValue(value);
      props.formHandler && props.formHandler.setFieldValue(props.name, value);
    };

    const formHandlerOnClose = (value: any) => {
      setValue(value);
      props.formHandler && props.formHandler.setFieldValue(props.name, value);
    };

    const initDefaultValue = () => {
      if (props.formHandler) {
        setValue(props.value || props.formHandler.getFieldValue(props.name));
      } else {
        setValue(props.value);
      }
    };

    createEffect(() => batch(() => computeFeedBack(props.errorMessage, props.validMessage)));

    /**
     * Computes the error feedback if a form handler has been assigned.
     */
    createEffect(() => batch(() => props.formHandler && computeFeedBack(props.formHandler.getFieldError(props.name))));

    onMount(() => {
      initDefaultValue();
    });

    return (
      <BaseComponent
        {...props}
        value={value()}
        setValue={setValue}
        feedbackClass={feedbackClass()}
        formHandlerOnInput={formHandlerOnInput}
        formHandlerOnChange={formHandlerOnChange}
        formHandlerOnSelect={formHandlerOnSelect}
        formHandlerOnClear={formHandlerOnClear}
        formHandlerOnBlur={formHandlerOnBlur}
        formHandlerOnClose={formHandlerOnClose}
        id={id}
        message={message()}
        status={status()}
      />
    );
  };
};
