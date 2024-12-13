import { configureStore } from '@reduxjs/toolkit'
import { furnitureApi } from '../utils/api'

export const store = configureStore({
  reducer: {
    [furnitureApi.reducerPath]: furnitureApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(furnitureApi.middleware),
})
