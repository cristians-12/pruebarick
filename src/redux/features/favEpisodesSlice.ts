import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Episode } from "../../types/api/episodes";

export const favEpisodesSlice = createSlice({
  name: "favorites",
  initialState: {
    value: [] as Episode[],
  },
  reducers: {
    addFavoriteEp: (state, action: PayloadAction<Episode>) => {
      state.value = [...state.value, action.payload];
    },
    removeFavoriteEp: (state, action: PayloadAction<Episode>) => {
      state.value = state.value.filter(
        (character) => character.id !== action.payload.id
      );
    },
  },
});

export const { addFavoriteEp, removeFavoriteEp } = favEpisodesSlice.actions;

export default favEpisodesSlice.reducer;
