import { Component, JSX, For, createSignal, createEffect, mergeProps, onMount } from 'solid-js';
import { createStore, DeepReadonly } from 'solid-js/store';
import { List, ListItem, Collapse } from '@components';
import { TreeMenu as TreeMenuType } from '@app-types';
import { matchUrl, pxToRem } from '@utils';
import { useLocation, useNavigate } from 'solid-app-router';

export interface TreeMenuProps extends JSX.HTMLAttributes<any> {
  menu: TreeMenuType[] | DeepReadonly<TreeMenuType>[];
  nestingLevel?: number;
  paddingOffset?: number;
}

export const TreeMenu: Component<TreeMenuProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [store, setStore] = createStore<{ menu: TreeMenuType[] }>({
    menu: [],
  });
  const [paddingLeft, setPaddingLeft] = createSignal<number>();
  props = mergeProps({ nestingLevel: 1, paddingOffset: 8, path: '' }, props);

  const open = (menuItem?: DeepReadonly<TreeMenuType>, index?: number) => {
    setStore(
      'menu',
      (item, i) => {
        //When component is mounted it expands the menu if the item path matches the url.
        if (index === undefined) {
          return matchUrl(location.pathname, item.path);
        } else {
          //Else, it expand the menu item according to the passed index.
          return i === index;
        }
      },
      'expand',
      (expand) => {
        if (index === undefined) {
          return true;
        } else {
          return !expand;
        }
      }
    );

    menuItem && menuItem.children === undefined && navigate(menuItem.path);
  };

  const activate = () => {
    //Inactivates all the menu items to false.
    setStore(
      'menu',
      () => true,
      'active',
      () => false
    );

    //Activates only the menu items that matches the url path.
    setStore(
      'menu',
      (item) => matchUrl(location.pathname, item.path),
      'active',
      () => true
    );
  };

  onMount(() => {
    setStore('menu', [...props.menu]);
    open();
  });

  createEffect(() => setPaddingLeft(() => pxToRem((props.nestingLevel || 0) * (props.paddingOffset || 0))));
  createEffect(() => location.pathname && activate());

  return (
    <List flush component="div">
      <For each={store.menu}>
        {(item, index) => (
          <>
            <ListItem
              active={item.children === undefined && item.active}
              onClick={() => open(item, index())}
              component="button"
              style={{ 'padding-left': paddingLeft() + 'rem' }}
            >
              {item.label}
            </ListItem>
            {item.children && (
              <Collapse expand={item.expand}>
                <TreeMenu
                  menu={item.children as DeepReadonly<TreeMenuType>[]}
                  nestingLevel={(props.nestingLevel || 0) + 1}
                />
              </Collapse>
            )}
          </>
        )}
      </For>
    </List>
  );
};
