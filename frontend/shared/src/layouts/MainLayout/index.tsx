import { Box, Link, Navbar, Collapse, Button } from '@components';
import { Component, createSignal } from 'solid-js';

export const MainLayout: Component = () => {
  const [expand, setExpand] = createSignal<boolean>(false);

  return (
    <Box fullHeight display="grid" gridTemplateRows="auto 1fr auto">
      <Navbar>
        <Link href="/">Home</Link>
      </Navbar>
      <Box>
        <Button onClick={() => setExpand(!expand())}>Expand</Button>
        <Collapse in={expand()}></Collapse>
      </Box>
      <Box>Footer</Box>
    </Box>
  );
};
