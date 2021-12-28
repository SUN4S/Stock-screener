import { TypedUseSelectorHook, useSelector } from "react-redux";

import activeReducer from '../features/activeSlice';
import balanceReducer from '../features/fundamentals/balanceSlice';
import cashFlowReducer from '../features/fundamentals/cashFlowSlice';
import { configureStore } from '@reduxjs/toolkit';
import dailyReducer from '../features/charts/dailySlice';
import earningsReducer from '../features/fundamentals/earningsSlice';
import incomeReducer from '../features/fundamentals/incomeSlice';
import interdayReducer from '../features/charts/interdaySlice';
import monthlyReducer from '../features/charts/monthlySlice'
import overviewReducer from '../features/fundamentals/overviewSlice';
import searchReducer from '../features/searchSlice';
import weeklyReducer from '../features/charts/weeklySlice';

export const store = configureStore({
  reducer: {
    active: activeReducer,
    search: searchReducer,
    income: incomeReducer,
    balance: balanceReducer,
    cashFlow: cashFlowReducer,
    earnings: earningsReducer,
    overview: overviewReducer,
    interday: interdayReducer,
    daily: dailyReducer,
    weekly: weeklyReducer,
    monthly: monthlyReducer
  },
})

export const useTypedSelector: TypedUseSelectorHook<
  RootState
> = useSelector;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;