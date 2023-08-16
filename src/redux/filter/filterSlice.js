import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndex: 0,
  sotrValue: "",
  order: "",
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
  },
});

export const { setActiveIndex, setSortValue, setOrder } = filterSlice.actions;

export default filterSlice.reducer;
