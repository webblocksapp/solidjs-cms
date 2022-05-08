import { Button, ButtonProps } from './index';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = (args: ButtonProps) => <Button {...args}>Button</Button>;
Primary.args = {
  disabled: true,
};
