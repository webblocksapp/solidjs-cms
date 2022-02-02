import { Component, JSX, For, createSignal, createEffect, mergeProps, onMount } from 'solid-js';
import { List, ListItem, Collapse } from '@components';
import { TreeMenu as TreeMenuType } from '@app-types';
import { mapRecursive, pxToRem } from '@utils';

export interface TreeMenuProps extends JSX.HTMLAttributes<any> {
  menu: TreeMenuType[];
  nestingLevel?: number;
  paddingOffset?: number;
}

type TreeMenuWithExpand = Omit<TreeMenuType, 'children'> & {
  children: TreeMenuWithExpand[];
  expand: any;
  setExpand: any;
};

export const TreeMenu: Component<TreeMenuProps> = (props) => {
  const [menu, setMenu] = createSignal<TreeMenuWithExpand[]>([]);
  const [paddingLeft, setPaddingLeft] = createSignal<number>();
  props = mergeProps({ nestingLevel: 1, paddingOffset: 8 }, props);

  const open = (path: string) => {
    mapRecursive(menu(), (item) => {
      if (item.path === path) {
        item.setExpand(!item.expand());
      }

      return item;
    });
  };

  onMount(() => {
    const treeMenuWithExpand: TreeMenuWithExpand[] = mapRecursive(props.menu as any, (item) => {
      const [expand, setExpand] = createSignal(false);
      setExpand(item.expand || false);
      return { ...item, expand, setExpand } as TreeMenuWithExpand;
    });

    setMenu(treeMenuWithExpand);
  });

  createEffect(() => setPaddingLeft(() => pxToRem((props.nestingLevel || 0) * (props.paddingOffset || 0))));

  return (
    <List flush component="div">
      <For each={menu()}>
        {(item) => (
          <>
            <ListItem
              onClick={() => open(item.path)}
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
