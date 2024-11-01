import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../types/api/characters";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    value: [] as Character[],
  },
  reducers: {
    addFavorite: (state, action: PayloadAction<Character>) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
