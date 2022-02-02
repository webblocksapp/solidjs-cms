export const mapRecursive = <T>(
  oldArray: Array<T & { id?: number; children?: T[] }>,
  callback: (item: T) => T,
  newArray: T[] = []
): T[] => {
  let interimArray: T[] = [];

  if (oldArray.length <= 0) {
    return newArray;
  } else {
    let [item, ...theRest] = oldArray;

    if (item.children) {
      item = { ...item, children: mapRecursive<T>(item.children, callback) };
    }

    interimArray = [...newArray, callback(item)];
    return mapRecursive<T>(theRest, callback, interimArray);
  }
};
