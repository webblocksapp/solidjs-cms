import { Component } from 'solid-js';
import { TextField, Grid } from '@components';
import { useFormHandler, yup } from '@utils';
import { SchemaOf } from 'yup';

type FormSchema = {
  email: string;
};

export const Basic: Component = () => {
  const schema: SchemaOf<FormSchema> = yup.object({
    email: yup.string().required().email(),
    email2: yup.string().required().email(),
  });

  const formHandler = useFormHandler(schema, { email: 'test@gmail.com' });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name="email"
          label="Email"
          placeholder="mail@example.com"
          helperText="Don't share your email"
          formHandler={formHandler}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="email2"
          label="Email"
          placeholder="mail@example.com"
          helperText="Don't share your email"
          formHandler={formHandler}
        />
      </Grid>
    </Grid>
  );
};
