/* eslint-disable no-undef */
import {createSlice} from '@reduxjs/toolkit';
import {AuthApiSlice} from 'apis/authApiSlice';
import {setItem} from 'helpers/utils';
// import {settingsAPISlice} from 'src/api/setttingsApislice';
// import {loginResponseType} from 'src/helpers/alias';
// import {KEYS} from 'src/helpers/Constant';
// import {encryptData} from 'src/helpers/encryptData';
// import {hqAuthAPISlice} from 'src/hq-admin/hq-api/hqAuthSlice';
// import {RootState} from 'src/store/store';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload);
      //   state.systemAdmin = action.payload.user;
      //   state.token.accessToken = action.payload?.token;
      //   state.token.refreshToken = action.payload?.token?.refreshToken;
      // state.systemAdmin.role = action.payload?.systemAdmin.role;
    },

    logOut: state => {
      //   state.systemAdmin.role = null;
      //   state.systemAdmin.firstName = '';
      //   state.systemAdmin.lastName = '';
      //   state.token.accessToken = null;
      //   localStorage.removeItem(KEYS.USER_INFO);
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      AuthApiSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        state.token = action.payload?.data?.session?.access_token;
        state.user = action.payload?.data?.session?.user;
      },
    );
  },
});

export const {setCredentials, logOut} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentLoginToken = state => state.auth.token;

export const selectCurrentLoginUser = state => state.auth.user;
// // export const selectRefreshToken = (state) =>
// // 	state.authSlice.token.refreshToken;
