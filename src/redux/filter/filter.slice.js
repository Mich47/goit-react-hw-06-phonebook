const { createSlice } = require('@reduxjs/toolkit');

const initState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initState,
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
