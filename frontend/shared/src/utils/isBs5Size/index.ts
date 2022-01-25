/**
 * Checks if the given value is a Bootstrap 5 size scale.
 * @param value
 */
export const isBs5Size = (value: string) => {
  const sizingScales = [25, 50, 75, 100];

  return typeof value === 'string' && value.match('%')?.length && sizingScales.includes(Number(value.replace('%', '')))
    ? true
    : false;
};
