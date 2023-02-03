import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const removeContact = id => {
  return {
    type: 'contacts/removeContact',
    payload: id,
  };
};

export const setFilter = filter => {
  return {
    type: 'filter/setFilter',
    payload: filter,
  };
};
