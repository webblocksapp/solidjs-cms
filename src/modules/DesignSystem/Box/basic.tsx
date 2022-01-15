import { Component, createEffect, createSignal } from 'solid-js';
import { Box, BoxProps } from '@components';

export const Basic: Component = () => {
  const [args, setArgs] = createSignal<BoxProps>({});

  const handleChange = (event: Event) => {
    const { name, value } = event.target as HTMLInputElement;
    setArgs({ ...args(), [name]: value });
  };

  return (
    <div class="p-3">
      <Box {...args()}>
        <Box>A</Box>
        <Box>B</Box>
      </Box>
      <hr />
      <select name="display" onChange={(event) => handleChange(event)}>
        <option>block</option>
        <option>flex</option>
      </select>

      <select name="bgcolor" onChange={(event) => handleChange(event)}>
        <option value="">Select a bgcolor</option>
        <option>primary</option>
        <option>secondary</option>
        <option>success</option>
        <option>danger</option>
        <option>warning</option>
        <option>info</option>
      </select>

      <select name="border" onChange={(event) => handleChange(event)}>
        <option value="">Select a border</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <select name="borderTop" onChange={(event) => handleChange(event)}>
        <option value="">Border top</option>
        <option>0</option>
        <option>1</option>
      </select>

      <select name="borderBottom" onChange={(event) => handleChange(event)}>
        <option value="">Border bottom</option>
        <option>0</option>
        <option>1</option>
      </select>

      <select name="borderRight" onChange={(event) => handleChange(event)}>
        <option value="">Border right</option>
        <option>0</option>
        <option>1</option>
      </select>

      <select name="borderLeft" onChange={(event) => handleChange(event)}>
        <option value="">Border left</option>
        <option>0</option>
        <option>1</option>
      </select>
    </div>
  );
};
