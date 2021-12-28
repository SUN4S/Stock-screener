import { ChartFetchMonthlyState } from "../../models/timeSeries";
import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchMonthlyChartData } from "./fetchCharts";

const initialState = {
  data: {
    "Meta Data": {
      "1. Information": "Monthly Adjusted Prices and Volumes",
      "2. Symbol": "CVX",
      "3. Last Refreshed": "2021-12-27",
      "4. Time Zone": "US/Eastern"
  },
    "Monthly Adjusted Time Series": {
      "2021-12-27": {
          "1. open": "114.9500",
          "2. high": "119.2600",
          "3. low": "110.7300",
          "4. close": "118.7900",
          "5. adjusted close": "118.7900",
          "6. volume": "195954681",
          "7. dividend amount": "0.0000"
      },
      "2021-11-30": {
          "1. open": "115.0300",
          "2. high": "118.0800",
          "3. low": "111.1000",
          "4. close": "112.8700",
          "5. adjusted close": "112.8700",
          "6. volume": "224686287",
          "7. dividend amount": "1.3400"
      },
    }
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