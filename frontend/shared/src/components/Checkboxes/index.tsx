import { CheckboxInputEvent, FormFieldComponent, SelectableOption } from '@app-types';
import { BaseFieldProps, withBaseField } from '@hocs';
import { For, onMount } from 'solid-js';
import { Box, Input, Label, ValidationFeedback } from '@components';
import { createStore } from 'solid-js/store';

export interface CheckboxesProps extends BaseFieldProps {
  options: SelectableOption[];
  value?: Array<any>;
  onChange?: (event: CheckboxInputEvent) => void;
}

export const Checkboxes = withBaseField((props: CheckboxesProps) => {
  const [store, setStore] = createStore<{ options: SelectableOption[] }>({ options: [...props.options] });

  const toggleCheck = (value: any) => {
    setStore(
      'options',
      (item) => item.value == value,
      'checked',
      (checked) => !checked
    );
  };

  const onChange = (event: CheckboxInputEvent) => {
    const value = computeValues(event);
    toggleCheck(event.currentTarget.value);
    props.formHandlerOnChange(value);
    props.onChange && props.onChange(event);
  };

  /**
   * Initializes the checked values when the component is mounted if a value prop is given.
   */
  const initCheckedValues = () => {
    if (!props.value?.length) return;

    props.value.forEach((item) => {
      toggleCheck(item);
    });
  };

  /**
   * Generates the array of values according to the checked values on the checkboxes.
   */
  const computeValues = (event: CheckboxInputEvent) => {
    let currentValues = [...(props?.value || [])];

    if (event.currentTarget.checked) {
      currentValues.push(event.currentTarget.value);
    } else {
      currentValues = currentValues.filter((value) => value != event.currentTarget.value);
    }

    props.setValue(currentValues);
    return currentValues;
  };

  onMount(() => {
    initCheckedValues();
  });

  return (
    <>
      <Box class={props.class} classList={props.feedbackClassList}>
        <For each={store.options}>
          {(item, index) => (
            <Box class="form-check">
              <Input
                checked={item.checked}
                class={'form-check-input'}
                classList={props.feedbackClassList}
                id={`${props.id}-${index()}`}
                name={props.name}
                onChange={onChange}
                type="checkbox"
                value={item.value}
              />
              <Label class="form-check-label" for={`${props.id}-${index()}`}>
                {item.viewValue}
              </Label>
            </Box>
          )}
        </For>
      </Box>
      <ValidationFeedback status={props.status} message={props.message} />
    </>
  );
}) as FormFieldComponent<CheckboxesProps>;
