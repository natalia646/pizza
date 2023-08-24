import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const basketSlise = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, action){
        state.items.push(action.payload)
    }
  },
});
