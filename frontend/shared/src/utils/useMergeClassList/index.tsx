import { CommonObject } from '@app-types';
import { createSignal } from 'solid-js';

/**
 * Utility hook for combining css classList objects.
 */
export const useMergeClassList = () => {
  const [classList, setClassList] = createSignal<CommonObject>();

  /**
   * @param classListProp Is the current component classList prop.
   * @param classListArg Is the new classList to pass.
   * @returns
   */
  const mergeClassList = (classListProp: CommonObject = {}, classListArg: CommonObject = {}) => {
    setClassList({ ...classListProp, ...classListArg });
  };

  return {
    classList,
    mergeClassList,
  };
};
