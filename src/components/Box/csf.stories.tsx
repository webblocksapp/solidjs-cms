import { Box } from './index';

export default {
  title: 'Components/Box',
  component: Box,
};

export const Basic = () => <Box />;

Basic.args = {
  display: 'block',
};
