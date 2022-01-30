import { Style } from '@app-types';
import { CommonObject } from 'app-types/CommonObject';
import { createSignal } from 'solid-js';

export const useMergeStyle = () => {
  const [style, setStyle] = createSignal<Style>();

  /**
   * @param styleProp Is the current component style prop.
   * @param styleArg Is the new style to pass.
   * @returns
   */
  const mergeStyle = (styleProp: Style = {}, styleArg: CommonObject = {}) => {
    if (styleArg === undefined) {
      return styleProp;
    } else if (typeof styleProp === 'string') {
      let inlineStyle = '';

      Object.keys(styleArg).forEach((key) => {
        if (styleArg[key] !== undefined) {
          inlineStyle += ` ${key}: ${styleArg[key]}; `;
        }
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
