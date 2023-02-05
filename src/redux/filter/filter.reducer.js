import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter.actions';

const initState = '';

export const filterReducer = createReducer(initState, {
  [setFilter]: (state, { payload }) => (state = payload),
});
