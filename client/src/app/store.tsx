import activeReducer from '../features/activeSlice';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchSlice';
import { TypedUseSelectorHook, useSelector } from "react-redux";
import incomeReducer from '../features/fundamentals/incomeSlice';
import balanceReducer from '../features/fundamentals/balanceSlice';
import cashFlowReducer from '../features/fundamentals/cashFlowSlice';
import earningsReducer from '../features/fundamentals/earningsSlice';
import overviewReducer from '../features/fundamentals/overviewSlice';

export const store = configureStore({
  reducer: {
    active: activeReducer,
    search: searchReducer,
    income: incomeReducer,
    balance: balanceReducer,
    cashFlow: cashFlowReducer,
    earnings: earningsReducer,
    overview: overviewReducer
  },
})

export const useTypedSelector: TypedUseSelectorHook<
  RootState
> = useSelector;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;