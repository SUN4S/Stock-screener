import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchWeeklyChartData } from "./fetchCharts";
import { ChartFetchWeeklyState } from "../../models/timeSeries";

const initialState = {
  data: {
    
  },
  error: null,
  status: "idle",
} as ChartFetchWeeklyState;

export const weeklySlice = createSlice
({
  name: "weekly",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeeklyChartData.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    
    builder.addCase(fetchWeeklyChartData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "idle";
    });

    builder.addCase(fetchWeeklyChartData.rejected, (state, { payload }) => {
      if(payload) state.error = payload.message;
      state.status = "idle";
    });
  }
})


export const selectStatus = (state: RootState) => state.weekly.status;

export default weeklySlice.reducer;