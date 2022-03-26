import { Component, createEffect } from 'solid-js';
import { CssClassProps, DisplayProps } from '@app-types';
import { useMergeClassList } from '@utils';

export const withDisplay = <T extends CssClassProps>(BaseComponent: Component<T>) => {
  return (props: T & DisplayProps) => {
    const { classList, mergeClassList } = useMergeClassList();

    createEffect(() =>
      mergeClassList(props.classList, {
        'd-block': props.display === 'block',
        'd-flex': props.display === 'flex',
        'd-grid': props.display === 'grid',
        'd-none': props.display === 'none',
        'd-inline': props.display === 'inline',
        'd-inline-block': props.display === 'inline-block',
        'd-table': props.display === 'table',
        'd-table-cell': props.display === 'table-cell',
        'd-table-row': props.display === 'table-row',
        'd-inline-flex': props.display === 'inline-flex',
      })
    );

    return <BaseComponent {...props} classList={classList()} />;
  };
};
