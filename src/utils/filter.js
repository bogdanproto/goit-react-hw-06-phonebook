export const toFilter = (array, filter) => {
  return array.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};
