import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchFundamentalsIncome } from "./fetchFundamentals";
import { IncomeFetchState } from "../../models/fundamentalData";

const initialState = {
  data: {
    "symbol": "BABA",
    "annualReports": [
      {
        "fiscalDateEnding": "2021-03-31",
        "reportedCurrency": "CNY",
        "grossProfit": "296084000000",
        "totalRevenue": "717289000000",
        "costOfRevenue": "421205000000",
        "costofGoodsAndServicesSold": "421205000000",
        "operatingIncome": "89678000000",
        "sellingGeneralAndAdministrative": "55224000000",
        "researchAndDevelopment": "57236000000",
        "operatingExpenses": "206406000000",
        "investmentIncomeNet": "None",
        "netInterestIncome": "68318000000",
        "interestIncome": "72794000000",
        "interestExpense": "4476000000",
        "nonInterestIncome": "None",
        "otherNonOperatingIncome": "None",
        "depreciation": "None",
        "depreciationAndAmortization": "47909000000",
        "incomeBeforeTax": "165578000000",
        "incomeTaxExpense": "29278000000",
        "interestAndDebtExpense": "None",
        "netIncomeFromContinuingOperations": "143284000000",
        "comprehensiveIncomeNetOfTax": "None",
        "ebit": "184332000000",
        "ebitda": "232241000000",
        "netIncome": "150578000000"
      },
      {
        "fiscalDateEnding": "2020-03-31",
        "reportedCurrency": "CNY",
        "grossProfit": "227344000000",
        "totalRevenue": "509711000000",
        "costOfRevenue": "282367000000",
        "costofGoodsAndServicesSold": "282367000000",
        "operatingIncome": "93004000000",
        "sellingGeneralAndAdministrative": "28197000000",
        "researchAndDevelopment": "43080000000",
        "operatingExpenses": "134340000000",
        "investmentIncomeNet": "None",
        "netInterestIncome": "67776000000",
        "interestIncome": "72956000000",
        "interestExpense": "5180000000",
        "nonInterestIncome": "None",
        "otherNonOperatingIncome": "None",
        "depreciation": "None",
        "depreciationAndAmortization": "42427000000",
        "incomeBeforeTax": "166645000000",
        "incomeTaxExpense": "20562000000",
        "interestAndDebtExpense": "None",
        "netIncomeFromContinuingOperations": "140350000000",
        "comprehensiveIncomeNetOfTax": "None",
        "ebit": "175175000000",
        "ebitda": "217602000000",
        "netIncome": "149433000000"
      },
    ],
    "quarterlyReports": [
      {
        "fiscalDateEnding": "2021-09-30",
        "reportedCurrency": "CNY",
        "grossProfit": "70940000000",
        "totalRevenue": "200690000000",
        "costOfRevenue": "129750000000",
        "costofGoodsAndServicesSold": "129750000000",
        "operatingIncome": "15006000000",
        "sellingGeneralAndAdministrative": "8874000000",
        "researchAndDevelopment": "15297000000",
        "operatingExpenses": "55934000000",
        "investmentIncomeNet": "None",
        "netInterestIncome": "-12723000000",
        "interestIncome": "None",
        "interestExpense": "12723000000",
        "nonInterestIncome": "None",
        "otherNonOperatingIncome": "None",
        "depreciation": "None",
        "depreciationAndAmortization": "2906000000",
        "incomeBeforeTax": "3946000000",
        "incomeTaxExpense": "6087000000",
        "interestAndDebtExpense": "None",
        "netIncomeFromContinuingOperations": "3377000000",
        "comprehensiveIncomeNetOfTax": "None",
        "ebit": "24298000000",
        "ebitda": "27204000000",
        "netIncome": "5488000000"
      },
    ]
  },
  error: null,
  status: "idle",
} as IncomeFetchState;

export const incomeSlice = createSlice
({
  name: "income",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFundamentalsIncome.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    
    builder.addCase(fetchFundamentalsIncome.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "idle";
    });

    builder.addCase(fetchFundamentalsIncome.rejected, (state, { payload }) => {
      if(payload) state.error = payload.message;
      state.status = "idle";
    });
  }
})


export const selectStatus = (state: RootState) => state.income.status;

export default incomeSlice.reducer;