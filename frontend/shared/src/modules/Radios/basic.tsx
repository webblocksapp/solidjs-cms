import { Component } from 'solid-js';
import { Radios, Grid } from '@components';
import { useFormHandler, yup } from '@utils';
import { SchemaOf } from 'yup';

type FormSchema = {
  favoriteFood: number;
};

export const Basic: Component = () => {
  const schema: SchemaOf<FormSchema> = yup.object({
    favoriteFood: yup.number().required(),
  });

  const formHandler = useFormHandler(schema);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Radios
          name="favoriteFood"
          label="Favorite food"
          formHandler={formHandler}
          options={[
            { value: 1, viewValue: 'Pizza' },
            { value: 2, viewValue: 'Hamburger' },
          ]}
          value={1}
        />
      </Grid>
    </Grid>
  );
};
