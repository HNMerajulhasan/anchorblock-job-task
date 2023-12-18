// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
//   endpoints: (builder) => ({
//     register: builder.mutation<any, { email: string; password: string }>({
//       query: (credentials) => ({
//         url: 'register',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     login: builder.mutation<any, { email: string; password: string }>({
//       query: (credentials) => ({
//         url: 'https://reqres.in/api/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     users: builder.query<any, void>({
//       query: () => 'users',
//     }),
//   }),
// });

// export const { useRegisterMutation, useLoginMutation, useUsersQuery } = api;
// api.ts
// api.ts

// api.ts

// api.ts

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }), // Replace with your actual base URL
//   endpoints: (builder) => ({
//     getUsers: builder.query<User[], number | void>({
//       query: (page = 1) => `users?page=${page}`, // Adjust the query parameters as needed
//     }),
//   }),
// });

// export const { useGetUsersQuery } = api;
// export const { endpoints: { getUsers } } = api;
// export const { reducerPath: apiPath } = api;

// export default api;

// api.ts
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
