import { Component, mergeProps } from 'solid-js';

export interface NavbarProps {
  class?: string;
  theme?: string;
}

export const Navbar: Component<NavbarProps> = (props) => {
  props = mergeProps({ class: 'navbar-light navbar-expand-lg' }, props);
  return (
    <nav {...props} class={props.class + ' navbar '}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">{props.children}</div>
        </div>
      </div>
    </nav>
  );
};
