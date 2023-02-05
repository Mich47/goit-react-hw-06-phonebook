import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts.slice';
import { filterReducer } from './filter/filter.slice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
  })
);
