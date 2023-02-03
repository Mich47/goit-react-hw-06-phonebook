export const setFilter = filter => {
  return {
    type: 'filter/setFilter',
    payload: filter,
  };
};
