import {apiSlice} from 'config/apiSetup';
import {supabase} from 'config/supabaseSetup';

export const AuthApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    signUp: builder.mutation({
      queryFn: values => {
        let data = supabase.auth.signUp({
          ...values,
          options: {
            name: values.name,
          },
        });
        return {data};
      },
    }),
    login: builder.mutation({
      queryFn: values => {
        let data = supabase.auth.signInWithPassword({...values});
        return {data};
      },
    }),
  }),
});

export const {useSignUpMutation, useLoginMutation} = AuthApiSlice;
