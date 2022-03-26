import { CssClassProps, SpacingProps } from '@app-types';
import { useMergeClassList } from '@utils';
import { Component, createEffect } from 'solid-js';

export const withSpacing = <T extends CssClassProps>(BaseComponent: Component<T>) => {
  return (props: T & SpacingProps) => {
    const { classList, mergeClassList } = useMergeClassList();

    createEffect(() =>
      mergeClassList(props.classList, {
        'm-0': props.m == 0 || props.margin == 0,
        'm-1': props.m == 1 || props.margin == 1,
        'm-2': props.m == 2 || props.margin == 2,
        'm-3': props.m == 3 || props.margin == 3,
        'm-4': props.m == 4 || props.margin == 4,
        'm-5': props.m == 5 || props.margin == 5,
        'mt-0': props.mt == 0 || props.marginTop == 0,
        'mt-1': props.mt == 1 || props.marginTop == 1,
        'mt-2': props.mt == 2 || props.marginTop == 2,
        'mt-3': props.mt == 3 || props.marginTop == 3,
        'mt-4': props.mt == 4 || props.marginTop == 4,
        'mt-5': props.mt == 5 || props.marginTop == 5,
        'me-0': props.mr == 0 || props.marginRight == 0,
        'me-1': props.mr == 1 || props.marginRight == 1,
        'me-2': props.mr == 2 || props.marginRight == 2,
        'me-3': props.mr == 3 || props.marginRight == 3,
        'me-4': props.mr == 4 || props.marginRight == 4,
        'me-5': props.mr == 4 || props.marginRight == 5,
        'mb-0': props.mb == 0 || props.marginBottom == 0,
        'mb-1': props.mb == 1 || props.marginBottom == 1,
        'mb-2': props.mb == 2 || props.marginBottom == 2,
        'mb-3': props.mb == 3 || props.marginBottom == 3,
        'mb-4': props.mb == 4 || props.marginBottom == 4,
        'mb-5': props.mb == 5 || props.marginBottom == 5,
        'ms-0': props.ml == 0 || props.marginLeft == 0,
        'ms-1': props.ml == 1 || props.marginLeft == 1,
        'ms-2': props.ml == 2 || props.marginLeft == 2,
        'ms-3': props.ml == 3 || props.marginLeft == 3,
        'ms-4': props.ml == 4 || props.marginLeft == 4,
        'ms-5': props.ml == 4 || props.marginLeft == 5,
        'p-0': props.p == 0 || props.padding == 0,
        'p-1': props.p == 1 || props.padding == 1,
        'p-2': props.p == 2 || props.padding == 2,
        'p-3': props.p == 3 || props.padding == 3,
        'p-4': props.p == 4 || props.padding == 4,
        'p-5': props.p == 5 || props.padding == 5,
        'pt-0': props.pt == 0 || props.paddingTop == 0,
        'pt-1': props.pt == 1 || props.paddingTop == 1,
        'pt-2': props.pt == 2 || props.paddingTop == 2,
        'pt-3': props.pt == 3 || props.paddingTop == 3,
        'pt-4': props.pt == 4 || props.paddingTop == 4,
        'pt-5': props.pt == 5 || props.paddingTop == 5,
        'pe-0': props.pr == 0 || props.paddingRight == 0,
        'pe-1': props.pr == 1 || props.paddingRight == 1,
        'pe-2': props.pr == 2 || props.paddingRight == 2,
        'pe-3': props.pr == 3 || props.paddingRight == 3,
        'pe-4': props.pr == 4 || props.paddingRight == 4,
        'pe-5': props.pr == 4 || props.paddingRight == 5,
        'pb-0': props.pb == 0 || props.paddingBottom == 0,
        'pb-1': props.pb == 1 || props.paddingBottom == 1,
        'pb-2': props.pb == 2 || props.paddingBottom == 2,
        'pb-3': props.pb == 3 || props.paddingBottom == 3,
        'pb-4': props.pb == 4 || props.paddingBottom == 4,
        'pb-5': props.pb == 5 || props.paddingBottom == 5,
        'ps-0': props.pl == 0 || props.paddingLeft == 0,
        'ps-1': props.pl == 1 || props.paddingLeft == 1,
        'ps-2': props.pl == 2 || props.paddingLeft == 2,
        'ps-3': props.pl == 3 || props.paddingLeft == 3,
        'ps-4': props.pl == 4 || props.paddingLeft == 4,
        'ps-5': props.pl == 4 || props.paddingLeft == 5,
        'm-auto': props.m === 'auto' || props.margin == 'auto',
        'mx-auto': props.m === 'auto' || props.margin == 'auto',
      })
    );

    return <BaseComponent {...props} classList={classList()} />;
  };
};
