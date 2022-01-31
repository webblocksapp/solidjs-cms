import { Box, Link, Navbar, Collapse, Button, CollapseHandler } from '@components';
import { Component, createSignal } from 'solid-js';

export const MainLayout: Component = () => {
  const [collapseHandler, setCollapseHandler] = createSignal<CollapseHandler>();

  return (
    <Box fullHeight display="grid" gridTemplateRows="auto 1fr auto">
      <Navbar>
        <Link href="/">Home</Link>
      </Navbar>
      <Box>
        <Button onClick={() => collapseHandler()?.toggle()}>Expand</Button>
        <Collapse expanded={true} setHandler={setCollapseHandler}>
          <ul>
            <li>Hello world</li>
            <li>Hello world</li>
            <li>Hello world</li>
            <li>Hello world</li>
            <li>Hello world</li>
            <li>Hello world</li>
            <li>Hello world</li>
          </ul>
        </Collapse>
      </Box>
      <Box>Footer</Box>
    </Box>
  );
};
