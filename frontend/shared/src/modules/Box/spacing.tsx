import { Component } from 'solid-js';
import { Box } from '@components';

export const Spacing: Component = () => {
  return (
    <div class="p-3">
      <Box>
        <Box>A</Box>
        <Box>B</Box>
      </Box>
    </div>
  );
};
