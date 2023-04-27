import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://643ab1f9bd3623f1b9b956ab.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', {
        name,
        number,
      });

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
