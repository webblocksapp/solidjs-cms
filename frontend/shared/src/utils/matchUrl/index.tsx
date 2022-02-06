/**
 * Helper function to checks if an url fragment matches with the router location path.
 *
 * @param locationPath - Full router location path.
 * @param pathFragment - Url fragment.
 */
export const matchUrl = (locationPath: string, pathFragment: string) => {
  return Boolean(locationPath.match(pathFragment)?.length);
};
