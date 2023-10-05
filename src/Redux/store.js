import { configureStore } from '@reduxjs/toolkit';
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

// const rootReducer = combineReducers({
//   phonebook: contactsSlice.reducer,
// });

const persistConfig = {
  key: LOCALSTORAGE_KEY,
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {phonebook: persistedReducer}, 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
