import { Style } from '@app-types';
import { CommonObject } from 'app-types/CommonObject';
import { createSignal } from 'solid-js';

/**
 * Merges the style object.
 */
export const useMergeStyle = () => {
  const [style, setStyle] = createSignal<Style>();

  const mergeStyle = (styleProp: Style = {}, styleArg?: CommonObject) => {
    if (styleArg === undefined) {
      return styleProp;
    } else if (typeof styleProp === 'string') {
      let inlineStyle = '';

      Object.keys(styleArg).forEach((key) => {
        inlineStyle += ` ${key.replace(/[A-Z]/g, '-$&').toLowerCase()}: ${styleArg[key]}; `;
      });

      setStyle(`${style()} ${inlineStyle}`);
    } else if (typeof styleProp === 'object') {
      setStyle({ ...styleProp, ...styleArg });
    }
  };

  return {
    style,
    mergeStyle,
  };
};
