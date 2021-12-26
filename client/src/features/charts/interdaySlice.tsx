import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchInterdayChartData } from "./fetchCharts";
import { ChartFetchInterdayState } from "../../models/timeSeries";

const initialState = {
  data: 
    "timestamp,open,high,low,close,volume\r\n2021-12-22 20:00:00,333.7500,333.7500,333.7500,333.7500,1470\r\n2021-12-22 19:55:00,333.6200,333.6200,333.5600,333.5600,745\r\n2021-12-22 19:45:00,333.4600,333.6500,333.4600,333.6500,657\r\n2021-12-22 19:40:00,333.4600,333.4600,333.4600,333.4600,217",
  error: null,
  status: "idle",
} as ChartFetchInterdayState;

export const interdaySlice = createSlice
({
  name: "interday",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInterdayChartData.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    
    builder.addCase(fetchInterdayChartData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "idle";
    });

    builder.addCase(fetchInterdayChartData.rejected, (state, { payload }) => {
      if(payload) state.error = payload.message;
      state.status = "idle";
    });
  }
})


export const selectStatus = (state: RootState) => state.interday.status;

export default interdaySlice.reducer;