import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async ({activeIndex, sortValue, order, valueSearch}) => {
    const { data } = await axios.get(
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


const initialState = {
  items: [],
  status: "loading",
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducer: {},

  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});
export const selectPizza = (state) => state.pizzas

export default pizzasSlice.reducer;
