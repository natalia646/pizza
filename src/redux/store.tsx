import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filter from "./slices/filterSlice";
import basket from "./slices/basketSlice";
import pizzas from "./slices/pizzasSlice";
import fullpizza from "./slices/fullpizzaSlice";


export const store = configureStore({
  reducer: {
    filter,
    basket,
    pizzas,
    fullpizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
