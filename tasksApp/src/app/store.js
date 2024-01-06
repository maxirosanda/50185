import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from './features/counter/counterSlice'
import { tasksApi } from './services/tasks'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(tasksApi.middleware),
})

setupListeners(store.dispatch)