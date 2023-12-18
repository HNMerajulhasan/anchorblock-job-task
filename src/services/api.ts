import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<any, number>({
      query: (page) => `users?page=${page}`,
    }),
  }),
});

export const { useFetchUsersQuery } = api;
