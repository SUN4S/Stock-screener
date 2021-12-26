import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchDailyChartData } from "./fetchCharts";
import { ChartFetchDailyState } from "../../models/timeSeries";

const initialState = {
  data: {
    
  },
  error: null,
  status: "idle",
} as ChartFetchDailyState;

export const dailySlice = createSlice
({
  name: "daily",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDailyChartData.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    
    builder.addCase(fetchDailyChartData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "idle";
    });

    builder.addCase(fetchDailyChartData.rejected, (state, { payload }) => {
      if(payload) state.error = payload.message;
      state.status = "idle";
    });
  }
})


export const selectStatus = (state: RootState) => state.daily.status;

export default dailySlice.reducer;