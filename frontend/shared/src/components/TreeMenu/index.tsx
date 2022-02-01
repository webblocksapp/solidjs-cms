import { Component, JSX, For, createSignal, createEffect, mergeProps } from 'solid-js';
import { List, ListItem } from '@components';
import { TreeMenu as TreeMenuType } from '@app-types';
import { pxToRem } from '@utils';

export interface TreeMenuProps extends JSX.HTMLAttributes<any> {
  menu: TreeMenuType[];
  nestingLevel?: number;
  paddingOffset?: number;
}

export const TreeMenu: Component<TreeMenuProps> = (props) => {
  const [paddingLeft, setPaddingLeft] = createSignal<number>();
  props = mergeProps({ nestingLevel: 1, paddingOffset: 8 }, props);

  createEffect(() => setPaddingLeft(() => pxToRem((props.nestingLevel || 0) * (props.paddingOffset || 0))));

  return (
    <List flush component="div">
      <For each={props.menu}>
        {(item) => (
          <>
            <ListItem component="button" style={{ 'padding-left': paddingLeft() + 'rem' }}>
              {item.label}
            </ListItem>
            {item.children && <TreeMenu menu={item.children} nestingLevel={(props.nestingLevel || 0) + 1} />}
          </>
        )}
      </For>
    </List>
  );
};
