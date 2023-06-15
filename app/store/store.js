import {persistedReducer, rootReducer} from './reducer';
import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from 'config/apiSetup';
import {persistStore} from 'redux-persist';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      apiSlice.middleware,
    ),

  devTools: true,
});

export const persistor = persistStore(store);
