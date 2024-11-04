import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: 1,
  },
  reducers: {
    prevPage: (state) => {
      state.value -= 1;
    },
    nextPage: (state) => {
      state.value += 1;
    },
    resetPage: (state) => {
      state.value = 1;
    }
  },
});

export const { prevPage, nextPage, resetPage } = pageSlice.actions;

export default pageSlice.reducer;
