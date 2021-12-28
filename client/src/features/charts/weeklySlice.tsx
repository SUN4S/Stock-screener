import { ChartFetchWeeklyState } from "../../models/timeSeries";
import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchWeeklyChartData } from "./fetchCharts";

const initialState = {
  data: {
    "Meta Data": {
      "1. Information": "Weekly Adjusted Prices and Volumes",
      "2. Symbol": "CVX",
      "3. Last Refreshed": "2021-12-27",
      "4. Time Zone": "US/Eastern"
  },
    "Weekly Adjusted Time Series": {
      "2021-12-27": {
          "1. open": "116.0700",
          "2. high": "118.8200",
          "3. low": "115.4101",
          "4. close": "118.7900",
          "5. adjusted close": "118.7900",
          "6. volume": "7746498",
          "7. dividend amount": "0.0000"
      },
      "2021-12-23": {
          "1. open": "111.8600",
          "2. high": "117.9200",
          "3. low": "110.7300",
          "4. close": "116.4100",
          "5. adjusted close": "116.4100",
          "6. volume": "40594496",
          "7. dividend amount": "0.0000"
      },
      "2021-12-17": {
          "1. open": "117.4600",
          "2. high": "118.1899",
          "3. low": "113.5300",
          "4. close": "113.6000",
          "5. adjusted close": "113.6000",
          "6. volume": "65961318",
          "7. dividend amount": "0.0000"
      },
    }
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