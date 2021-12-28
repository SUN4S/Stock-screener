import { ChartFetchInterdayState } from "../../models/timeSeries";
import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchInterdayChartData } from "./fetchCharts";

const initialState = {
  data: {
    "Meta Data": {
      "1. Information": "Intraday (5min) open, high, low, close prices and volume",
      "2. Symbol": "msft",
      "3. Last Refreshed": "2021-12-27 20:00:00",
      "4. Interval": "5min",
      "5. Output Size": "Full size",
      "6. Time Zone": "US/Eastern"
  },
    "Time Series (5min)": {
      "2021-12-27 20:00:00": {
          "1. open": "341.6000",
          "2. high": "341.9400",
          "3. low": "341.6000",
          "4. close": "341.7000",
          "5. volume": "6166"
      },
      "2021-12-27 19:55:00": {
          "1. open": "341.5100",
          "2. high": "341.6800",
          "3. low": "341.5100",
          "4. close": "341.6500",
          "5. volume": "1116"
      },
    },
  },
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