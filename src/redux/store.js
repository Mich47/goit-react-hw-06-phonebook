// import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts.reducer';
import { filterReducer } from './filter/filter.reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// export let persistor = persistStore(store);
