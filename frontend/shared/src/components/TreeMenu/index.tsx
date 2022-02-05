import { Component, JSX, For, createSignal, createEffect, mergeProps, onMount, Accessor } from 'solid-js';
import { List, ListItem, Collapse } from '@components';
import { TreeMenu as TreeMenuType } from '@app-types';
import { mapRecursive, pxToRem } from '@utils';
import { useLocation, useNavigate } from 'solid-app-router';

export interface TreeMenuProps extends JSX.HTMLAttributes<any> {
  menu: TreeMenuType[];
  nestingLevel?: number;
  paddingOffset?: number;
}

type TreeMenuWithSignals = Omit<TreeMenuType, 'children'> & {
  children?: TreeMenuWithSignals[];
  expand: Accessor<boolean>;
  setExpand: (flag: boolean) => void;
  active: Accessor<boolean>;
  setActive: (flag: boolean) => void;
};

export const TreeMenu: Component<TreeMenuProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menu, setMenu] = createSignal<TreeMenuWithSignals[]>([]);
  const [paddingLeft, setPaddingLeft] = createSignal<number>();
  props = mergeProps({ nestingLevel: 1, paddingOffset: 8 }, props);

  const open = (menuItem: TreeMenuWithSignals) => {
    mapRecursive(menu(), (item) => {
      item.path === menuItem.path && item.setExpand(!item.expand());
      item.setActive(isActive(item));
      return item;
    });

    menuItem.children === undefined && navigate(menuItem.path);
  };

  const isActive = (item: TreeMenuWithSignals) => {
    return Boolean(location.pathname.match(item.path)?.length);
  };

  onMount(() => {
    const treeMenuWithSignals: TreeMenuWithSignals[] = mapRecursive(props.menu as any, (item) => {
      const [expand, setExpand] = createSignal(false);
      const [active, setActive] = createSignal(false);
      setExpand(item.expand || isActive(item) || false);
      setActive(isActive(item));
      return { ...item, expand, setExpand, active, setActive } as TreeMenuWithSignals;
    });

    setMenu(treeMenuWithSignals);
  });

  createEffect(() => setPaddingLeft(() => pxToRem((props.nestingLevel || 0) * (props.paddingOffset || 0))));

  return (
    <List flush component="div">
      <For each={menu()}>
        {(item) => (
          <>
            <ListItem
              active={item.children === undefined && item.active()}
              onClick={() => open(item)}
              component="button"
              style={{ 'padding-left': paddingLeft() + 'rem' }}
            >
              {item.label}
            </ListItem>
            {item.children && (
              <Collapse expand={item.expand && item.expand()}>
                <TreeMenu menu={item.children} nestingLevel={(props.nestingLevel || 0) + 1} />
              </Collapse>
            )}
          </>
        )}
      </For>
    </List>
  );
};
