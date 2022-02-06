import { mapRecursive } from '@utils';

/**
 * Clones recursively an array with a nested tree data structure.
 *
 * @param array - The array to deep clone.
 * @param childrenKey - Optional key if the nested tree data structure has a key different than children.

 */
export const deepArrayClone = <T>(array: T[], childrenKey?: string) => {
  return mapRecursive<T>(
    array,
    (item) => {
      return Object.assign({}, item);
    },
    [],
    childrenKey
  );
};
