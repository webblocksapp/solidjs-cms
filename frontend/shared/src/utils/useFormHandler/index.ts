import { CommonObject } from '@app-types';
import { createEffect, createSignal, batch } from 'solid-js';
import { createStore } from 'solid-js/store';
import { SchemaOf, ValidationError } from 'yup';

export const useFormHandler = <T extends CommonObject>(yupSchema: SchemaOf<T>, defaultFormData?: T) => {
  const [formData, setFormData] = createStore<CommonObject>(defaultFormData as CommonObject);
  const [formErrors, setFormErrors] = createStore<CommonObject>({});
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
      setFormErrors(path(), '');
    } catch (error) {
      if (error instanceof ValidationError) {
        setFormErrors(path(), error.message);
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
        const allErrors: CommonObject = {};
        for (let validationError of validationErrors.inner) {
          if (validationError.path === undefined) {
            continue;
          }
          allErrors[validationError.path] = validationError.errors[0];
        }
        setFormErrors(allErrors);
      }
    }
  };

  const getFieldValue = (path: string = '') => {
    if (!path) return;
    return formData[path];
  };

  const getFormData = () => {
    return formData as T;
  };

  const getFieldError = (path: string = ''): string => {
    return formErrors[path] || '';
  };

  createEffect(() => validateField());

  return {
    setFieldValue,
    getFormData,
    getFieldError,
    getFieldValue,
    validate,
  };
};
