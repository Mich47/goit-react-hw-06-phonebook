import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contacts.reducer';
import { filterReducer } from './filter/filter.reducer';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const persistConfig = {
//   key: 'qwerty',
//   storage,
//   // whitelist: ['contacts'],
// };

// export const contactsReducer = persistReducer(persistConfig, contactsReducer1);

export const rootReducer = combineReducers({
  // contacts: persistReducer(persistConfig, contactsReducer),
  contacts: contactsReducer,
  filter: filterReducer,
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['contacts', 'filter'],
// };

// export const rootReducer = persistReducer(persistConfig, rootPersistedReducer);
