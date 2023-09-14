import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getItemsFromLS } from "../../utils/getItemsFromLS";

export type CartItem = {
  id: string;
  title: string;
  imageUrl: string;
  sizes: number[];
  types: number[];
  price: number;
  count: number;
  activeType?: number;
  activeSize?: number;
};

interface CartSliceState {
  totalPrice: number;
  totalCount: number;
  items: CartItem[];
}

const {items, totalPrice, totalCount} = getItemsFromLS()

const initialState: CartSliceState = {
  totalPrice,
  items,
  totalCount,
};

const basketSlise = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      findItem
        ? findItem.count++
        : state.items.push({ ...action.payload, count: 1 });
        
        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
  
        state.totalCount = state.items.reduce((sum, item) => {
          return sum + item.count;
        }, 0);
      },

    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
        state.totalPrice = state.totalPrice - findItem.price;
        state.totalCount = state.totalCount - 1;
      }
    },

    removeItems(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);

      state.totalCount = state.items.reduce((sum, item) => {
        return sum + item.count;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.basket;

export const { addItem, removeItems, clearItems, minusItem } =
  basketSlise.actions;

export default basketSlise.reducer;
