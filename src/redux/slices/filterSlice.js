import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndex: 0,
  sotrValue: "",
  order: "",
  valueSearch: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    setSortValue(state, action) {
      state.sotrValue = action.payload;
    },
    setOrder(state, action) {
      state.order = action.payload;
    },
    setValueSerch(state, action) {
      state.valueSearch = action.payload;
    },
    setFilter(state, action) {
      state.activeIndex = Number(action.payload.activeIndex);
      state.sotrValue = action.payload.sotrValue;
      state.order = action.payload.order;
    },
  },
});

export const {
  setActiveIndex,
  setSortValue,
  setOrder,
  setValueSerch,
  setFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
