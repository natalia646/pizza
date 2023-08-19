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
    setValueSerch(state, action){
      state.valueSearch = action.payload
    }
  },
});

export const { setActiveIndex, setSortValue, setOrder, setValueSerch } = filterSlice.actions;

export default filterSlice.reducer;
