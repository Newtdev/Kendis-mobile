// import {configureStore} from '@reduxjs/toolkit';
// import {persistStore} from 'redux-persist';
import {rootReducer} from './reducer';

import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from 'config/apiSetup';

// import {persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // export const store = configureStore({
// //   persistedReducer,
// // });

// // export const persistor = persistStore(store);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      apiSlice.middleware,
    ),

  devTools: true,
});
