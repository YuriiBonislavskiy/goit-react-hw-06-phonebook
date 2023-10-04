import { createSlice } from '@reduxjs/toolkit';
import baseContacts from 'data/contacts.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: baseContacts,
    filter: '',
  },
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;