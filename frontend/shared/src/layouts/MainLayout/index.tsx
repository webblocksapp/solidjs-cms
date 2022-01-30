import { Box, Link, Navbar } from '@components';
import { Component } from 'solid-js';

export const MainLayout: Component = () => {
  return (
    <Box fullHeight display="grid" gridTemplateRows="auto 1fr auto">
      <Navbar>
        <Link href="/">Home</Link>
      </Navbar>
      <Box>Content</Box>
      <Box>Footer</Box>
    </Box>
  );
};
