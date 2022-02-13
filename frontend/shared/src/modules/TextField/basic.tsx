import { Component, createEffect } from 'solid-js';
import { TextField } from '@components';
import { useFormHandler, yup } from '@utils';
import { SchemaOf } from 'yup';

type FormSchema = {
  email: string;
  age: number;
  contact: {
    email: string;
    phone: number;
  };
};

export const Basic: Component = () => {
  const schema: SchemaOf<FormSchema> = yup.object({
    email: yup.string().required().email(),
    age: yup.number().required(),
    contact: yup
      .object({
        email: yup.string().required(),
        phone: yup.number().required(),
      })
      .required(),
  });

  const formHandler = useFormHandler(schema);

  return (
    <div class="p-3">
      <TextField
        name="email"
        label="Email"
        placeholder="mail@example.com"
        helperText="Don't share your email"
        formHandler={formHandler}
      />
    </div>
  );
};
