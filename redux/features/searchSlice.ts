import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "" as string,
  },
  reducers: {
    newSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { newSearch } = searchSlice.actions;

export default searchSlice.reducer;
