import { PaletteProps, TypographyProps } from '@app-types';
import { withPalette, withTypography } from '@hocs';
import { NavLink, NavLinkProps } from 'solid-app-router';
import { Component } from 'solid-js';

export interface LinkProps extends Omit<NavLinkProps, 'color'>, TypographyProps, PaletteProps {}

let Link: Component<LinkProps> = (props) => {
  return <NavLink {...props} class={props.class + ` nav-link `} />;
};

Link = withTypography(Link, { textDecoration: 'none' });
Link = withPalette(Link);

export { Link };
