import { createSlice } from "@reduxjs/toolkit";

initialState = {
  typePizza: "",
  size: 0,
};

const typeSlice = createSlice({
  name: "typeSlice",
  initialState,
  reducers: {
    setPizzaType(state, action) {
      state.type = action.payload;
    },
  },
});

export const { setPizzaType } = typeSlice.actions;

export default typeSlice.reducer;
