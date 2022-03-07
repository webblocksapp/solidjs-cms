import { CheckboxInputEvent, FormFieldComponent, SelectableOption } from '@app-types';
import { BaseFieldProps, withBaseField } from '@hocs';
import { Component, For, onMount } from 'solid-js';
import { Box, Input, Label } from '@components';
import { createStore } from 'solid-js/store';

export interface BaseCheckboxesProps extends BaseFieldProps {
  options: SelectableOption[];
  value?: Array<any>;
  onChange?: (event: CheckboxInputEvent) => void;
}

export const BaseCheckboxes: Component<BaseCheckboxesProps> = (props) => {
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

  const initCheckedValues = () => {
    if (!props.value?.length) return;

    props.value.forEach((item) => {
      toggleCheck(item);
    });
  };

  const computeValues = (event: CheckboxInputEvent) => {
    let currentValues = [...(props?.value || [])];

    if (event.currentTarget.checked) {
      currentValues = currentValues.filter((value) => value !== event.currentTarget.value);
    } else {
      currentValues.push(event.currentTarget.value);
    }

    props.setValue(currentValues);
    return currentValues;
  };

  onMount(() => {
    initCheckedValues();
  });

  return (
    <For each={store.options}>
      {(item, index) => (
        <Box class="form-check">
          <Input
            class="form-check-input"
            type="checkbox"
            value={item.value}
            id={`${props.id}-${index()}`}
            onChange={onChange}
            checked={item.checked}
          />
          <Label class="form-check-label" for={`${props.id}-${index()}`}>
            {item.viewValue}
          </Label>
        </Box>
      )}
    </For>
  );
};

export const Checkboxes = withBaseField(BaseCheckboxes) as FormFieldComponent<BaseCheckboxesProps>;
