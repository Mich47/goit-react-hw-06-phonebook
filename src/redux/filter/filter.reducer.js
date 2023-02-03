const initState = '';

export const filterReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'filter/setFilter':
      return payload;

    default:
      return state;
  }
};
