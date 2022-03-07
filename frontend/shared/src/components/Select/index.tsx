import { Component, onMount, For, createEffect, splitProps, mergeProps } from 'solid-js';
import { BaseFieldProps, withBaseField } from '@hocs';
import { Box, HelperText, Label, ValidationFeedback } from '@components';
import { FormFieldComponent, Select2ClearEvent, Select2SelectEvent, Select2CloseEvent } from '@app-types';
import { Options as Select2Props } from 'select2';
import { SELECT2_OPTIONS } from '@constants';
import { SelectableOption } from 'app-types/SelectableOption';
import $ from 'jquery';

export interface SelectProps extends Select2Props, BaseFieldProps {
  label?: string;
  search?: boolean;
  options: SelectableOption[];
  onSelect?: (event: Select2SelectEvent) => void;
  onClear?: (event: Select2ClearEvent) => void;
  onClose?: (event: Select2CloseEvent) => void;
}

const BaseSelect: Component<SelectProps> = (props) => {
  let [config] = splitProps(props, SELECT2_OPTIONS);
  config = mergeProps(config, {
    placeholder: config.placeholder || '',
    allowClear: true,
    theme: config.theme || 'bootstrap-5',
    width: config.width || '100%',
    multiple: config.multiple || false,
    minimumResultsForSearch: props.search ? config.minimumResultsForSearch : -1,
  });

  let select: HTMLSelectElement | undefined;

  const initSelect2 = () => {
    if (select === undefined) {
      return;
    }

    /**
     * Initializes select2 with default configs
     */
    $(select).select2({ ...config });

    /**
     * Initializes select2 select event
     */
    $(select).on('select2:select', (event) => {
      onSelect(event);
    });

    /**
     * Initializes select2 clear event
     */
    $(select).on('select2:clear', (event) => {
      onClear(event);
    });

    /**
     * Initializes select2 close event
     */
    $(select).on('select2:close', (event) => {
      onClose(event);
    });
  };

  const onSelect = (event: Select2SelectEvent) => {
    props.formHandlerOnSelect(getData());
    props.onSelect && props.onSelect(event);
  };

  const onClear = (event: Select2ClearEvent) => {
    props.formHandlerOnClear();
    props.onClear && props.onClear(event);
  };

  const onClose = (event: Select2CloseEvent) => {
    !getData() && props.formHandlerOnClose(getData());
    props.onClose && props.onClose(event);
  };

  /**
   * Returns the current selected data from select2 component.
   */
  const getData = () => {
    if (!select) return null;

    const data = $(select).select2('data');

    if (props.multiple) {
      return data.length ? data.map((option) => option.id) : null;
    } else {
      const option = data[0] || null;
      return option.id;
    }
  };

  const appendInvalidClass = () => {
    if (select === undefined) {
      return;
    }

    switch (props.status) {
      case 'invalid':
        $(select).select2({ ...config, selectionCssClass: 'form-control is-invalid' } as any);
        break;
      case 'valid':
        props.message && $(select).select2({ ...config, selectionCssClass: 'form-control is-valid' } as any);
        break;
      default:
        $(select).select2({ ...config, selectionCssClass: '' } as any);
        break;
    }
  };

  onMount(() => {
    initSelect2();
  });

  createEffect(() => appendInvalidClass());

  return (
    <>
      {props.label && (
        <Label class="form-label" for={props.id}>
          {props.label}
        </Label>
      )}
      <Box fullWidth class={props.feedbackClass}>
        <select ref={select} id={props.id}>
          {props.multiple ? <></> : <option></option>}
          <For each={props.options}>{(item) => <option value={item.value}>{item.viewValue}</option>}</For>
        </select>
      </Box>
      {props.helperText && <HelperText>{props.helperText}</HelperText>}
      <ValidationFeedback status={props.status} message={props.message} />
    </>
  );
};

export const Select = withBaseField(BaseSelect) as FormFieldComponent<SelectProps>;
