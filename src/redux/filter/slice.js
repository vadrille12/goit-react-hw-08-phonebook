import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(_, { payload }) {
      return payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
