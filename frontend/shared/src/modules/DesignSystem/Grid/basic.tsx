import { Component } from 'solid-js';
import { Grid, Box } from '@components';

export const Basic: Component = () => {
  return (
    <div class="p-3">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box border={1}>A-1</Box>
            </Grid>
            <Grid item xs={6}>
              <Box border={1}>A-2</Box>
            </Grid>
            <Grid item xs={6}>
              <Box border={1}>A-3</Box>
            </Grid>
            <Grid item xs={6}>
              <Box border={1}>A-4</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box border={1}>B</Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box border={1}>C</Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box border={1}>D</Box>
        </Grid>
      </Grid>
    </div>
  );
};
