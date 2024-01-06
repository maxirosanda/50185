
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tasksapp-6a3d0-default-rtdb.firebaseio.com/' }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `tasks.json`,
    }),
  }),
})

export const { useGetTasksQuery } = tasksApi