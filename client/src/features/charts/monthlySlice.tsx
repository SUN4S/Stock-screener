import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchMonthlyChartData } from "./fetchCharts";
import { ChartFetchMonthlyState } from "../../models/timeSeries";

const initialState = {
  data: {
    
  },
  error: null,
  status: "idle",
} as ChartFetchMonthlyState;

export const monthlySlice = createSlice
({
  name: "monthly",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMonthlyChartData.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    
    builder.addCase(fetchMonthlyChartData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "idle";
    });

    builder.addCase(fetchMonthlyChartData.rejected, (state, { payload }) => {
      if(payload) state.error = payload.message;
      state.status = "idle";
    });
  }
})


export const selectStatus = (state: RootState) => state.monthly.status;

export default monthlySlice.reducer;