import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favoritesSlice";
import favoritesEpisodesReducer from "./features/favEpisodesSlice";
import favoritesLocationReducer from "./features/favLocationSlice";
import pageReducer from "./features/pageSlice";

export const store = configureStore({
  reducer: {
    favoritesReducer,
    favoritesEpisodesReducer,
    favoritesLocationReducer,
    pageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
