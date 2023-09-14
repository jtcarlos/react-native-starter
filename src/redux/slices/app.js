import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  name: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    setName: (state, action) => {
      state.name = action?.payload || "";
    },
  },
});

export const { increment, decrement, setName } = appSlice.actions;

export default appSlice.reducer;
