
import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
// import typePizza from './slices/typeSlice'


export const store = configureStore({
  reducer: {
    filter,
    // typePizza
  },
}) 