import activeReducer from '../features/activeSlice';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchSlice';
import typeReducer from '../features/typeSlice';
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    active: activeReducer,
    search: searchReducer
  },
})

export const useTypedSelector: TypedUseSelectorHook<
  RootState
> = useSelector;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;