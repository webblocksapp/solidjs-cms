import { Style } from '@app-types';
import { CommonObject } from 'app-types/CommonObject';
import { createSignal } from 'solid-js';

/**
 * Utility hook for combining css style objects.
 */
export const useMergeStyle = () => {
  const [style, setStyle] = createSignal<Style>();

  /**
   * @param styleProp Is the current component style prop.
   * @param styleArg Is the new style to pass.
   * @returns
   */
  const mergeStyle = (styleProp: Style = {}, styleArg: CommonObject = {}) => {
    if (typeof styleProp === 'string') return;
    setStyle({ ...styleProp, ...styleArg });
  };

  return {
    style,
    mergeStyle,
  };
};
