import { FormFieldComponent, InputElement, InputChangeEvent, InputFocusEvent } from '@app-types';
import { HelperText, Input, Label, ValidationFeedback } from '@components';
import { BaseFieldProps, withBaseField } from '@hocs';
import { Component } from 'solid-js';

export interface TextFieldProps extends BaseFieldProps {
  class?: string;
  label?: string;
  type?: InputElement['type'];
  placeholder?: InputElement['placeholder'];
  helperText?: string;
  onChange?: (event: InputChangeEvent) => void;
  onBlur?: (event: InputFocusEvent) => void;
}

const BaseTextField: Component<TextFieldProps> = (props) => {
  const onChange = (event: InputChangeEvent) => {
    props.onChange && props.onChange(event);
  };

  const onBlur = (event: InputFocusEvent) => {
    props.onBlur && props.onBlur(event);
  };

  return (
    <>
      {props.label && (
        <Label class="form-label" for={props.id}>
          {props.label}
        </Label>
      )}
      <Input
        onChange={onChange}
        onBlur={onBlur}
        type={props.type}
        class={'form-control' + props.feedbackClass}
        id={props.id}
        placeholder={props.placeholder}
      />
      {props.helperText && <HelperText>{props.helperText}</HelperText>}
      <ValidationFeedback status={props.status} message={props.message} />
    </>
  );
};

export const TextField = withBaseField(BaseTextField) as FormFieldComponent<TextFieldProps>;
