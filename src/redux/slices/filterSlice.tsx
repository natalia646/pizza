import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface FilterSliceState {
  activeIndex: number;
  sortValue: string;
  order: string;
  valueSearch: string;
}

const initialState : FilterSliceState = {
  activeIndex: 0,
  sortValue: "",
  order: "",
  valueSearch: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveIndex(state, action: PayloadAction<number>) {
      state.activeIndex = action.payload;
    },
    setSortValue(state, action: PayloadAction<string>) {
      state.sortValue = action.payload;
    },
    setOrder(state, action:PayloadAction<string>) {
      state.order = action.payload;
    },
    setValueSerch(state, action:PayloadAction<string>) {
      state.valueSearch = action.payload;
    },
    setFilter(state, action: PayloadAction<FilterSliceState>) {
      state.activeIndex = Number(action.payload.activeIndex);
      state.sortValue = action.payload.sortValue;
      state.order = action.payload.order;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const {
  setActiveIndex,
  setSortValue,
  setOrder,
  setValueSerch,
  setFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
