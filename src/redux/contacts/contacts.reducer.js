// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = (state = initState, action) => {
  console.log('state ', state);
  console.log('action ', action);
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/removeContact':
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

// const persistConfig = {
//   key: 'qwerty',
//   storage,
//   // whitelist: ['contacts'],
// };

// export const contactsReducer = persistReducer(persistConfig, contactsReducer1);
