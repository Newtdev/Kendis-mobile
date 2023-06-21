import {combineReducers} from '@reduxjs/toolkit';
import {apiSlice} from 'config/apiSetup';
import {authSlice} from 'features/authSlice';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthApiSlice} from 'apis/authApiSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['auth', AuthApiSlice],
};

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
