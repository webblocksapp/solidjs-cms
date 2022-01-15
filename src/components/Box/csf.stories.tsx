import { Box, BoxProps } from './index';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    display: {
      control: {
        options: ['block', 'flex'],
        type: 'radio',
      },
    },
  },
};

export const Basic = (args: BoxProps) => <Box {...args}>Hello world</Box>;

Basic.args = {
  display: 'block',
};
