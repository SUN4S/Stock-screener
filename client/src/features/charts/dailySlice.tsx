import { ChartFetchDailyState } from "../../models/timeSeries";
import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchDailyChartData } from "./fetchCharts";

const initialState = {
  data: {
    "Meta Data": {
      "1. Information": "Daily Prices (open, high, low, close) and Volumes",
      "2. Symbol": "CVX",
      "3. Last Refreshed": "2021-12-27",
      "4. Output Size": "Full size",
      "5. Time Zone": "US/Eastern"
  },
    "Time Series (Daily)": {
      "2021-12-27": {
          "1. open": "116.0700",
          "2. high": "118.8200",
          "3. low": "115.4101",
          "4. close": "118.7900",
          "5. volume": "7746498"
      },
      "2021-12-23": {
          "1. open": "116.5100",
          "2. high": "117.9200",
          "3. low": "116.4000",
          "4. close": "116.4100",
          "5. volume": "7416618"
      },
    }
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