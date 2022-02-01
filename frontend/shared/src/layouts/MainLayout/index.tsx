import { Box, Navbar, Content, Sidebar } from '@components';
import { Component } from 'solid-js';

export const MainLayout: Component = () => {
  return (
    <Box fullHeight display="grid" gridTemplateColumns="210px 1fr" gridTemplateAreas="'sidebar main-content'">
      <Sidebar bgcolor="primary">Sidebar</Sidebar>
      <Box
        fullHeight
        display="grid"
        gridArea="main-content"
        gridTemplateRows="90px 1fr"
        gridTemplateAreas="'navbar' 'content'"
      >
        <Navbar />
        <Content bgcolor="secondary">
          <Box>Hello world</Box>
        </Content>
      </Box>
    </Box>
  );
};
