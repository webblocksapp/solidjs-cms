import { Component, createSignal } from 'solid-js';
import { Box, BoxProps } from '@components';

export const Basic: Component = () => {
  const [args, setArgs] = createSignal<BoxProps>({});

  const handleChange = (event: Event) => {
    const { name, value } = event.target as HTMLInputElement;
    setArgs({ ...args(), [name]: value });
  };

  const handleStyleChange = (event: Event) => {
    const { name, value } = event.target as HTMLInputElement;
    const styles = [{ background: 'blue' }, { background: 'green' }];
    setArgs({ ...args(), [name]: value ? styles[Number(value)] : {} });
  };

  return (
    <div class="p-3">
      <Box {...args()}>
        <Box padding={2} p={4}>
          A
        </Box>
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

      <select name="style" onChange={(event) => handleStyleChange(event)}>
        <option value="">Select a style</option>
        <option value={0}>Style 1</option>
        <option value={1}>Style 2</option>
      </select>

      <select name="zIndex" onChange={(event) => handleChange(event)}>
        <option value="">Select a zIndex</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <select name="width" onChange={(event) => handleChange(event)}>
        <option value="">Select a width</option>
        <option>100</option>
        <option>200</option>
        <option>300</option>
        <option>400</option>
        <option>25%</option>
        <option>50%</option>
        <option>75%</option>
        <option>100%</option>
        <option>30%</option>
        <option>40%</option>
      </select>

      <select name="position" onChange={(event) => handleChange(event)}>
        <option value="">Select a position</option>
        <option>absolute</option>
        <option>relative</option>
      </select>

      <select name="padding" onChange={(event) => handleChange(event)}>
        <option value="">Select a padding</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <select name="fontSize" onChange={(event) => handleChange(event)}>
        <option value="">Select a font size</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>
    </div>
  );
};
