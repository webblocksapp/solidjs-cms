/**
 * Utility function for mapping recursively an array.
 *
 * @param oldArray - Remaining array to apply the recursion
 * @param callback - Callback function for mapping the current array item.
 * @param newArray - Mapped array.
 * @param childrenKey - Optional key to use when the nested tree has a different key than children.
 */
export const mapRecursive = <T>(
  oldArray: Array<T & { id?: number; children?: T[] }>,
  callback: (item: T) => T,
  newArray: T[] = [],
  childrenKey?: string
): T[] => {
  let interimArray: T[] = [];

  if (oldArray.length <= 0) {
    return newArray;
  } else {
    let [item, ...theRest] = oldArray;

    if (childrenKey && (item as any)[childrenKey]) {
      item = { ...item, [childrenKey]: mapRecursive<T>((item as any)[childrenKey], callback) };
    } else if (item.children) {
      item = { ...item, children: mapRecursive<T>(item.children, callback, [], childrenKey) };
    }

    interimArray = [...newArray, callback(item)];
    return mapRecursive<T>(theRest, callback, interimArray, childrenKey);
  }
};
