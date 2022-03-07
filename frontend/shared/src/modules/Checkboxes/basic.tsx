import { Component } from 'solid-js';
import { Checkboxes, Grid } from '@components';
import { useFormHandler, yup } from '@utils';
import { SchemaOf } from 'yup';

type FormSchema = {
  favoriteFoods: string[];
};

export const Basic: Component = () => {
  const schema: SchemaOf<FormSchema> = yup.object({
    favoriteFoods: yup.array().min(1),
  });

  const formHandler = useFormHandler(schema);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Checkboxes
          name="favoriteFoods"
          label="Favorite foods"
          helperText="Don't share your email"
          formHandler={formHandler}
          options={[
            { value: 1, viewValue: 'Pizza' },
            { value: 2, viewValue: 'Hamburger' },
          ]}
          value={[1]}
        />
      </Grid>
    </Grid>
  );
};
