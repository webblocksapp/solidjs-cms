import { Component } from 'solid-js';
import { TextField } from '@components';
import { useFormHandler, yup } from '@utils';
import { SchemaOf, ValidationError } from 'yup';
import { CommonObject } from '@app-types';

type FormSchema = {
  name: string;
  age: number;
  contact: {
    email: string;
    phone: number;
  };
};

export const Basic: Component = () => {
  const schema: SchemaOf<FormSchema> = yup.object({
    name: yup.string().required(),
    age: yup.number().required(),
    contact: yup
      .object({
        email: yup.string().required(),
        phone: yup.number().required(),
      })
      .required(),
  });

  const formHandler = useFormHandler(schema);

  const test = async () => {
    try {
      await schema.validate({ name: '' }, { abortEarly: false });
    } catch (validationErrors) {
      if (validationErrors instanceof ValidationError) {
        const allErrors: CommonObject = {};
        for (let validationError of validationErrors.inner) {
          if (validationError.path === undefined) {
            continue;
          }
          allErrors[validationError.path] = validationError.errors[0];
        }
      }
    }
  };

  test();

  return (
    <div class="p-3">
      <TextField
        label="Email"
        placeholder="mail@example.com"
        helperText="Don't share your email"
        errorMessage="Email is invalid"
        validMessage="Email is OK"
      />
    </div>
  );
};
