import { CommonObject } from '@app-types';
import { createStore, DeepReadonly, Part } from 'solid-js/store';
import { SchemaOf } from 'yup';

export const useFormHandler = <T extends CommonObject>(yupSchema: SchemaOf<T>, defaultFormData?: T) => {
  const [formData, setFormData] = createStore<T>(defaultFormData as any);

  const setFieldValue = (path: string, value: any, validate: boolean = true) => {
    validate && yupSchema.validateAt(path, value);
    setFormData(path as Part<DeepReadonly<T>>, value);
  };

  return {
    setFieldValue,
    formData,
  };
};
