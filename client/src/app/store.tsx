import activeReducer from '../features/activeSlice';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchSlice';
import { TypedUseSelectorHook, useSelector } from "react-redux";
import incomeReducer from '../features/incomeSlice';
import balanceReducer from '../features/balanceSlice';

export const store = configureStore({
  reducer: {
    active: activeReducer,
    search: searchReducer,
    income: incomeReducer,
    balance: balanceReducer
  },
})

export const useTypedSelector: TypedUseSelectorHook<
  RootState
> = useSelector;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;