import { Component } from 'solid-js';
import { Select } from '@components';
import { useFormHandler, yup } from '@utils';
import { SchemaOf } from 'yup';

type FormSchema = {
  country: string;
};

export const Basic: Component = () => {
  const schema: SchemaOf<FormSchema> = yup.object({
    country: yup.string().required(),
  });

  const formHandler = useFormHandler(schema);

  return (
    <div class="p-3">
      <Select
        label="Country"
        name="country"
        options={[
          { value: 'CO', viewValue: 'Colombia' },
          { value: 'AR', viewValue: 'Argentina' },
        ]}
        formHandler={formHandler}
      />
    </div>
  );
};
