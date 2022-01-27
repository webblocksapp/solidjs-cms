import { pxToRem } from '@utils';

/**
 * Parses a numeric size value into rems.
 *
 * @param size
 * @returns
 */
export const parseSize = (size?: string | number) => {
  if (!isNaN(Number(size))) {
    return pxToRem(Number(size)) + 'rem';
  } else {
    return size;
  }
};
