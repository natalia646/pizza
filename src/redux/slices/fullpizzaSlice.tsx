import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CartItem, FullDescSlice } from "./types/types";

type FetchID = {
  id: string;
};

export const fetchID = createAsyncThunk<CartItem, FetchID>(
  "full/fetchID",
  async ({ id }) => {
    const { data } = await axios.get<CartItem>(
      "https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/items/" + id
    );
    return data;
  }
);

const initialState: FullDescSlice= {
  pizza: {} as CartItem,
  status: "loading",
};

const fullpizzaSlise = createSlice({
  name: "full",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchID.pending, (state) => {
      state.status = "loading";
      state.pizza = {} as CartItem;
    });
    builder.addCase(fetchID.fulfilled, (state, action) => {
      state.status = "success";
      state.pizza = action.payload;
    });
    builder.addCase(fetchID.rejected, (state) => {
      state.status = "error";
      state.pizza = {} as CartItem;
    });
  },
});

export default fullpizzaSlise.reducer;
