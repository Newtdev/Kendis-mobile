import {combineReducers} from '@reduxjs/toolkit';
import {apiSlice} from 'config/apiSetup';
import authSlice from 'apis';

export const rootReducer = combineReducers({
  authSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
