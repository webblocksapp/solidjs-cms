export const matchUrl = (locationPath: string, pathFragment: string) => {
  return Boolean(locationPath.match(pathFragment)?.length);
};
