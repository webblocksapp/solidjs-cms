import { Box, Navbar, Content, Sidebar, Collapse, Button } from '@components';
import { Component, createSignal } from 'solid-js';

export const MainLayout: Component = () => {
  const [expand, setExpand] = createSignal<boolean>(true);

  return (
    <Box fullHeight display="grid" gridTemplateColumns="210px 1fr" gridTemplateAreas="'sidebar main-content'">
      <Sidebar boxShadow={2} zIndex={2} bgcolor="light">
        Sidebar
      </Sidebar>
      <Box
        fullHeight
        display="grid"
        gridArea="main-content"
        gridTemplateRows="90px 1fr"
        gridTemplateAreas="'navbar' 'content'"
      >
        <Navbar />
        <Content>
          <Box>
            <Button color="dark" onClick={() => setExpand(!expand())}>
              Expand
            </Button>
            <Collapse expand={expand()}>
              <ul>
                <li>AAA</li>
                <li>AAA</li>
                <li>AAA</li>
                <li>AAA</li>
                <li>AAA</li>
                <li>AAA</li>
                <li>AAA</li>
                <li>AAA</li>
              </ul>
            </Collapse>
          </Box>
        </Content>
      </Box>
    </Box>
  );
};
