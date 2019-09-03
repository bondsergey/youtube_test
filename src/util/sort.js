export function sortObjects(array, sort = null) {
  const result = [...array];

  if (!sort) {
    return result;
  }
  const {field, order} = sort;

  result.sort((a, b) => {
    const k = order === 'asc' ? 1 : -1;
    if (a[field] > b[field]) return 1 * k;

    if (a[field] < b[field]) return -1 * k;

    return 0;
  });

  return result;
}
