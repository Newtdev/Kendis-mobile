import {combineReducers} from '@reduxjs/toolkit';
import {apiSlice} from 'config/apiSetup';
import authSlice from 'apis';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const rootReducer = combineReducers({
  authSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
