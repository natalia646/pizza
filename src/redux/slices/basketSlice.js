import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const basketSlise = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
       return obj.price + sum;
      }, 0);
    },
    removeItems(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItems, clearItems } = basketSlise.actions;
export default basketSlise.reducer;
