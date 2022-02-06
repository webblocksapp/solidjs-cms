import { mapRecursive } from '@utils';

export const deepArrayClone = <T>(value: T[], childrenKey?: string) => {
  return mapRecursive<T>(
    value,
    (item) => {
      return Object.assign({}, item);
    },
    [],
    childrenKey
  );
};
