import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchFundamentalsEarnings } from "./fetchFundamentals";
import { EarningsFetchState } from "../../models/fundamentalData";

const initialState = {
  data: {
    "symbol": "CVX",
    "annualEarnings": [
      {
          "fiscalDateEnding": "2021-09-30",
          "reportedEPS": "5.57"
      },
      {
          "fiscalDateEnding": "2020-12-31",
          "reportedEPS": "-0.2009"
      }
    ],
    "quarterlyEarnings": [
      {
          "fiscalDateEnding": "2021-09-30",
          "reportedDate": "2021-10-29",
          "reportedEPS": "2.96",
          "estimatedEPS": "2.1919",
          "surprise": "0.7681",
          "surprisePercentage": "35.0427"
      },
      {
          "fiscalDateEnding": "2021-06-30",
          "reportedDate": "2021-07-30",
          "reportedEPS": "1.71",
          "estimatedEPS": "1.6047",
          "surprise": "0.1053",
          "surprisePercentage": "6.562"
      }
    ]
  },
  error: null,
  status: "idle",
} as EarningsFetchState;

export const earningsSlice = createSlice
({
  name: "earnings",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFundamentalsEarnings.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    
    builder.addCase(fetchFundamentalsEarnings.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "idle";
    });

    builder.addCase(fetchFundamentalsEarnings.rejected, (state, { payload }) => {
      if(payload) state.error = payload.message;
      state.status = "idle";
    });
  }
})


export const selectStatus = (state: RootState) => state.earnings.status;

export default earningsSlice.reducer;