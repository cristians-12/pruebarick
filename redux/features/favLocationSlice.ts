import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../types/api/locations";

export const favLocationSlice = createSlice({
  name: "favorites",
  initialState: {
    value: [] as Location[],
  },
  reducers: {
    addFavoriteLoc: (state, action: PayloadAction<Location>) => {
      state.value = [...state.value, action.payload];
    },
    removeFavoriteLoc: (state, action: PayloadAction<Location>) => {
      state.value = state.value.filter(
        (character) => character.id !== action.payload.id
      );
    },
  },
});

export const { addFavoriteLoc, removeFavoriteLoc } = favLocationSlice.actions;

export default favLocationSlice.reducer;
