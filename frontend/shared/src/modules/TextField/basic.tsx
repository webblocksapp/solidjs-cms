import { Component } from 'solid-js';
import { TextField } from '@components';

export const Basic: Component = () => {
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
