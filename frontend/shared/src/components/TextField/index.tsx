import { FormFieldComponent, InputElement, InputFocusEvent } from '@app-types';
import { Box, HelperText, Input, Label, ValidationFeedback } from '@components';
import { BaseFieldProps, withBaseField } from '@hocs';
import { InputInputEvent } from 'app-types/InputInputEvent';

export interface TextFieldProps extends BaseFieldProps {
  type?: InputElement['type'];
  placeholder?: InputElement['placeholder'];
  onInput?: (event: InputInputEvent) => void;
  onBlur?: (event: InputFocusEvent) => void;
}

export const TextField = withBaseField((props: TextFieldProps) => {
  const onInput = (event: InputInputEvent) => {
    props.formHandlerOnInput(event.currentTarget.value);
    props.onInput && props.onInput(event);
  };

  const onBlur = (event: InputFocusEvent) => {
    props.formHandlerOnBlur(event.currentTarget.value);
    props.onBlur && props.onBlur(event);
  };

  return (
    <Box class={props.class}>
      {props.label && (
        <Label class="form-label" for={props.id}>
          {props.label}
        </Label>
      )}
      <Input
        onInput={onInput}
        onBlur={onBlur}
        type={props.type}
        class={'form-control'}
        classList={props.feedbackClassList}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
      />
      {props.helperText && <HelperText>{props.helperText}</HelperText>}
      <ValidationFeedback status={props.status} message={props.message} />
    </Box>
  );
}) as FormFieldComponent<TextFieldProps>;
