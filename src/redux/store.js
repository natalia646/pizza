
import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import basket from './slices/basketSlice'
// import typePizza from './slices/typeSlice'


export const store = configureStore({
  reducer: {
    filter,
    basket
    // typePizza
  },
}) 