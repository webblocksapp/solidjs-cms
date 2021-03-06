import { CommonObject, FormField } from '@app-types';
import { createEffect, createSignal, batch } from 'solid-js';
import { createStore } from 'solid-js/store';
import { SchemaOf, ValidationError } from 'yup';

export const useFormHandler = <T extends CommonObject>(yupSchema: SchemaOf<T>, defaultFormData?: T) => {
  const [formData, setFormData] = createStore<CommonObject>(defaultFormData as CommonObject);
  const [formFields, setFormFields] = createStore<{ [x: string]: FormField }>({});
  const [path, setPath] = createSignal<string>('');

  /**
   * Sets an specific field value of the form data according to the given path.
   */
  const setFieldValue = async (path: string = '', value: any) => {
    if (!path) {
      return;
    }

    batch(() => {
      setPath(path);
      setFormData(path, value);
    });
  };

  /**
   * Validates a single field of the form.
   */
  const validateField = async () => {
    try {
      await yupSchema.validateAt(path(), formData);
      setFormFields(path(), (formField) => ({ ...formField, isInvalid: false, errorMessage: '' }));
    } catch (error) {
      if (error instanceof ValidationError) {
        const message = error.message;
        setFormFields(path(), (formField) => ({ ...formField, isInvalid: true, errorMessage: message }));
      } else {
        console.error(error);
      }
    }
  };

  /**
   * Validates the whole form data.
   */
  const validate = async () => {
    try {
      await yupSchema.validate(formData, { abortEarly: false });
    } catch (validationErrors) {
      if (validationErrors instanceof ValidationError) {
        for (let validationError of validationErrors.inner) {
          const { path, errors } = validationError;
          if (path === undefined) {
            continue;
          }
          setFormFields(path, (formField) => ({ ...formField, isInvalid: true, message: errors[0] }));
        }
      }
    }
  };

  const getFieldValue = (path: string = '') => {
    if (!path) return;
    return formData[path];
  };

  /**
   * Gets the form data object.
   */
  const getFormData = () => {
    return formData as T;
  };

  /**
   * Extracts the error message from the formField according to the given path.
   */
  const getFieldError = (path: string = ''): string => {
    return formFields[path]?.errorMessage || '';
  };

  /**
   * Initializes the default state of a field.
   * By default the field is initialized as invalid.
   */
  const initFormField = (path: string = '', value: any, field?: HTMLElement) => {
    if (!path) return;
    setFormFields(path, {
      isInvalid: true,
      errorMessage: '',
      field,
      initialValue: value || '',
      touched: false,
      dirty: false,
    });
  };

  /**
   * Checks on all the fields if there is an invalidated field.
   * If yes the form is invalid.
   */
  const isFormInvalid = () => {
    for (let key in formFields) {
      if (formFields[key].isInvalid) {
        return true;
      }
    }

    return false;
  };

  /**
   * Marks a field as touched when the user interacted with it.
   */
  const touchField = () => {
    setFormFields(path(), (field) => ({ ...field, touched: true }));
  };

  /**
   * Marks a field as dirty if initial value is different from current value.
   */
  const dirtyField = () => {
    setFormFields(path(), (field) => {
      if (JSON.stringify(formData[path()]) !== JSON.stringify(field.initialValue)) {
        return { ...field, dirty: true };
      }

      return { ...field, dirty: false };
    });
  };

  /**
   * Checks if the form has changes when is found a dirty field.
   */
  const formHasChanges = () => {
    for (let key in formFields) {
      if (formFields[key].dirty) {
        return true;
      }
    }

    return false;
  };

  createEffect(() => {
    validateField();
    touchField();
    dirtyField();
  });

  return {
    formHasChanges,
    getFieldError,
    getFieldValue,
    getFormData,
    initFormField,
    isFormInvalid,
    setFieldValue,
    validate,
  };
};
