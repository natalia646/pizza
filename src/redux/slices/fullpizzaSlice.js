import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchID = createAsyncThunk(
  "full/fetchID",
  async ({id}) => {
    const { data } = await axios.get(
      "https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/items/" + id
    );
    console.log(id)
    return data;
  }
);

const initialState = {
  pizza: {},
  status: "loading",
};

const fullpizzaSlise = createSlice({
  name: "full",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchID.pending]: (state) => {
      state.status = "loading";
      state.pizza = {};
    },
    [fetchID.fulfilled]: (state, action) => {
      state.pizza = action.payload;
      state.status = "success";
    },
    [fetchID.rejected]: (state) => {
      state.status = "error";
      state.pizza = {};
    },
  },
});




export default fullpizzaSlise.reducer;