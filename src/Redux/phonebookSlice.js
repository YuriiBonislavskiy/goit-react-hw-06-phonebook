import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
// import baseContacts from 'data/contacts.json';
import { LOCALSTORAGE_KEY } from 'constants/constants';


export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    // contacts: baseContacts,
    contacts:[],
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

const persistConfig = {
  key: LOCALSTORAGE_KEY,
  storage,
  blacklist: ['filter'],
};

export const phonebookPersistedReducer = persistReducer(persistConfig, phonebookSlice.reducer);

export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;
// export default phonebookSlice.reducer;
