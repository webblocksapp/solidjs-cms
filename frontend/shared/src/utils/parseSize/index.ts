import { pxToRem } from '@utils';

/**
 * Parses a numeric size value into rems.
 *
 * @param size
 * @returns
 */
export const parseSize = (size?: string | number) => {
  if (typeof size === 'number') {
    return pxToRem(size) + 'rem';
  } else {
    return size;
  }
};
