import { Box, Navbar, Content, Sidebar, TreeMenu } from '@components';
import { SIDEBAR_MENU } from '@constants';
import { Component } from 'solid-js';

export const MainLayout: Component = () => {
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
            <TreeMenu menu={SIDEBAR_MENU} />
          </Box>
        </Content>
      </Box>
    </Box>
  );
};
