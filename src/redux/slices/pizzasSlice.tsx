import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { CartItem } from "./basketSlice";

type FetchPizzasArgs = {
  activeIndex: number;
  sortValue: string;
  order: string;
};

export const fetchPizzas = createAsyncThunk<CartItem[], FetchPizzasArgs>(
  "pizzas/fetchPizzas",
  async ({ activeIndex, sortValue, order }) => {
    const { data } = await axios.get<CartItem[]>(
      "https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/items",
      {
        params: {
          category: activeIndex > 0 ? activeIndex : "",
          sortBy: sortValue,
          order,
          // search: valueSearch,
        },
      }
    );
    return data;
  }
);

interface PizzaSliceState {
  items: CartItem[];
  status: string;
}
// export enum Status {  ///#25 1.00.00
//   LOADING = "loading",
//   SUCCESS = "success",
//   ERROR = "error",
// }

const initialState: PizzaSliceState = {
  items: [],
  status: "loading",
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});
export const selectPizza = (state: RootState) => state.pizzas;

export default pizzasSlice.reducer;
