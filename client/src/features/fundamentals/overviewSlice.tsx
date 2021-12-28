import { OverviewFetchState } from "../../models/fundamentalData";
import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchFundamentalsOverview } from "./fetchFundamentals";

const initialState = {
  data: {
    "Symbol": "CLOV",
    "AssetType": "Common Stock",
    "Name": "Clover Health Investments Corp",
    "Description": "Clover Health Investments, Corp. The company is headquartered in Franklin, Tennessee.",
    "CIK": "1801170",
    "Exchange": "NASDAQ",
    "Currency": "USD",
    "Country": "USA",
    "Sector": "FINANCE",
    "Industry": "HOSPITAL & MEDICAL SERVICE PLANS",
    "Address": "317 UNIVERSITY AVENUE, SUITE 200, PALO ALTO, CA, US",
    "FiscalYearEnd": "December",
    "LatestQuarter": "2021-09-30",
    "MarketCapitalization": "2089627000",
    "EBITDA": "None",
    "PERatio": "None",
    "PEGRatio": "None",
    "BookValue": "0.971",
    "DividendPerShare": "None",
    "DividendYield": "None",
    "EPS": "-1.861",
    "RevenuePerShareTTM": "4.075",
    "ProfitMargin": "-0.455",
    "OperatingMarginTTM": "-0.447",
    "ReturnOnAssetsTTM": "-0.506",
    "ReturnOnEquityTTM": "-2.833",
    "RevenueTTM": "1158303000",
    "GrossProfitTTM": "99548000",
    "DilutedEPSTTM": "-1.861",
    "QuarterlyEarningsGrowthYOY": "0",
    "QuarterlyRevenueGrowthYOY": "1.393",
    "AnalystTargetPrice": "8.2",
    "TrailingPE": "-",
    "ForwardPE": "-",
    "PriceToSalesRatioTTM": "1.71",
    "PriceToBookRatio": "5.12",
    "EVToRevenue": "3.143",
    "EVToEBITDA": "-",
    "Beta": "None",
    "52WeekHigh": "24.93",
    "52WeekLow": "3.76",
    "50DayMovingAverage": "6.41",
    "200DayMovingAverage": "8.35",
    "SharesOutstanding": "330483000",
    "DividendDate": "None",
    "ExDividendDate": "None"
  },
  error: null,
  status: "idle",
} as OverviewFetchState;

export const overviewSlice = createSlice
({
  name: "overview",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFundamentalsOverview.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    
    builder.addCase(fetchFundamentalsOverview.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "idle";
    });

    builder.addCase(fetchFundamentalsOverview.rejected, (state, { payload }) => {
      if(payload) state.error = payload.message;
      state.status = "idle";
    });
  }
})


export const selectStatus = (state: RootState) => state.overview.status;

export default overviewSlice.reducer;