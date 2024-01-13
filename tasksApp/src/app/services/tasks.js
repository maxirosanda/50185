
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tasksapp-6a3d0-default-rtdb.firebaseio.com/' }),
  tagTypes:["tasks","task"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `tasks.json`,
      transformResponse: (response) =>{
        const data = Object.entries(response).map(item => ({id:item[0],...item[1]}))
        return data
      },
      providesTags:["tasks"]
    }),
    getTask: builder.query({
      query: (id) => `tasks/${id}.json`,
      providesTags:["task"]
    }),
    postTasks: builder.mutation({
      query: (task) => ({
        url:`tasks.json`,
        method:"POST",
        body:task
      }),
      invalidatesTags:["tasks"]
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url:`tasks/${id}.json`,
        method:"DELETE"
      }),
      invalidatesTags:["tasks"]
    }),
    patchTasks: builder.mutation({
      query: ({id,task}) => ({
        url:`tasks/${id}.json`,
        method:"PATCH",
        body:task
      }),
      invalidatesTags:["tasks","task"]
    }),
  }),
})

export const { useGetTasksQuery ,usePostTasksMutation ,useGetTaskQuery,useDeleteTaskMutation,usePatchTasksMutation} = tasksApi