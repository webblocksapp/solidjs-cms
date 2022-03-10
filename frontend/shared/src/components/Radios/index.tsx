import { CheckboxInputEvent, FormFieldComponent, SelectableOption } from '@app-types';
import { Box, Input, Label, ValidationFeedback } from '@components';
import { BaseFieldProps, withBaseField } from '@hocs';
import { Component, For, onMount, batch } from 'solid-js';
import { createStore } from 'solid-js/store';

export interface RadiosProps extends BaseFieldProps {
  options: SelectableOption[];
  onChange?: (event: CheckboxInputEvent) => void;
}

const BaseRadios: Component<RadiosProps> = (props) => {
  const [store, setStore] = createStore<{ options: SelectableOption[] }>({ options: [...props.options] });

  const toggleCheck = (value: any) => {
    batch(() => {
      setStore(
        'options',
        (item) => item.value == value,
        'checked',
        () => true
      );

      setStore(
        'options',
        (item) => item.value != value,
        'checked',
        () => false
      );
    });
  };

  const onChange = (event: CheckboxInputEvent) => {
    const value = event.currentTarget.value;
    toggleCheck(value);
    props.formHandlerOnChange(value);
    props.onChange && props.onChange(event);
  };

  /**
   * Initializes the checked values when the component is mounted if a value prop is given.
   */
  const initCheckedValue = () => {
    if (!props.value) return;
    toggleCheck(props.value);
  };

  onMount(() => {
    initCheckedValue();
  });

  return (
    <>
      <Box class={`${props.class}${props.feedbackClass}`}>
        <For each={store.options}>
          {(item, index) => (
            <Box class="form-check">
              <Input
                checked={item.checked}
                class={props.feedbackClass + ' form-check-input '}
                id={`${props.id}-${index()}`}
                name={props.name}
                onChange={onChange}
                type="radio"
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
};

export const Radios = withBaseField(BaseRadios) as FormFieldComponent<RadiosProps>;
