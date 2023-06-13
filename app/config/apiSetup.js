import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  //    extra: unknown
  // endpoint: string
  // type: 'query' | 'mutation'
  // forced: boolean | undefined
  prepareHeaders: (headers, {getState}) => {},
  //   timeout: 2000
});

const extendedBaseQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery('/refreshToken', api, extraOptions);
    if (refreshResult.data) {
      // store the new token
      //   api.dispatch(tokenReceived(refreshResult.data));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      //   api.dispatch(loggedOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'kendis-api',
  baseQuery: extendedBaseQuery,
  endpoints: builder => ({
    registerUser: builder.mutation({}),
    login: builder.mutation({}),
  }),
});
