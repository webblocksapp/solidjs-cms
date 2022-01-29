import { Component } from 'solid-js';
import { Basic as BoxBasic } from './Box/basic';
import { Basic as GridBasic } from './Grid/basic';
import { Basic as TypographyBasic } from './Typography/basic';

export const DesignSystem: Component = () => {
  return (
    <>
      {/* <BoxBasic /> */}
      {/* <GridBasic /> */}
      <TypographyBasic />
    </>
  );
};
