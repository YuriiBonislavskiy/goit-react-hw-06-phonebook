import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {contactsSlice} from './contactsSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { LOCALSTORAGE_KEY } from 'constants/constants';

const rootReducer = combineReducers({
  phonebook: contactsSlice.reducer,
});

const persistConfig = {
  key: LOCALSTORAGE_KEY,
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
