import { Component, createSignal } from 'solid-js';
import { Typography, TypographyProps } from '@components';

export const Basic: Component = () => {
  const [args, setArgs] = createSignal<TypographyProps>({});

  const handleChange = (event: Event) => {
    const { name, value } = event.target as HTMLInputElement;
    setArgs({ ...args(), [name]: value });
  };

  return (
    <div class="p-3">
      <Typography {...args()}>Hello world!</Typography>
      <hr />

      <select name="fontSize" onChange={(event) => handleChange(event)}>
        <option value="">Select a font size</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>

      <select name="component" onChange={(event) => handleChange(event)}>
        <option value="">Select a component</option>
        <option>h1</option>
        <option>h2</option>
        <option>h3</option>
        <option>h4</option>
        <option>h5</option>
        <option>h6</option>
        <option>p</option>
        <option>span</option>
        <option>small</option>
        <option>mark</option>
        <option>s</option>
        <option>u</option>
        <option>b</option>
        <option>i</option>
        <option>blockquote</option>
        <option>figcaption</option>
      </select>

      <select name="textAlign" onChange={(event) => handleChange(event)}>
        <option value="">Select an alignment</option>
        <option>left</option>
        <option>center</option>
        <option>right</option>
      </select>

      <select name="color" onChange={(event) => handleChange(event)}>
        <option value="">Select a color</option>
        <option>primary</option>
        <option>secondary</option>
        <option>success</option>
        <option>danger</option>
        <option>info</option>
        <option>warning</option>
      </select>
    </div>
  );
};
