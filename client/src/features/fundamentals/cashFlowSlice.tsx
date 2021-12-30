import { CashFlowFetchState } from "../../models/fundamentalData";
import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchFundamentalsCashFlow } from "./fetchFundamentals";

const initialState = {
  data: {
    "symbol": "CVX",
    "annualReports": [
      {
          "fiscalDateEnding": "2020-12-31",
          "reportedCurrency": "USD",
          "operatingCashflow": "10577000000",
          "paymentsForOperatingActivities": "7074000000",
          "proceedsFromOperatingActivities": "None",
          "changeInOperatingLiabilities": "-4272000000",
          "changeInOperatingAssets": "-2668000000",
          "depreciationDepletionAndAmortization": "19508000000",
          "capitalExpenditures": "8922000000",
          "changeInReceivables": "-2719000000",
          "changeInInventory": "-284000000",
          "profitLoss": "-5561000000",
          "cashflowFromInvestment": "-6965000000",
          "cashflowFromFinancing": "-3736000000",
          "proceedsFromRepaymentsOfShortTermDebt": "651000000",
          "paymentsForRepurchaseOfCommonStock": "1757000000",
          "paymentsForRepurchaseOfEquity": "1757000000",
          "paymentsForRepurchaseOfPreferredStock": "None",
          "dividendPayout": "9675000000",
          "dividendPayoutCommonStock": "9651000000",
          "dividendPayoutPreferredStock": "None",
          "proceedsFromIssuanceOfCommonStock": "None",
          "proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet": "12308000000",
          "proceedsFromIssuanceOfPreferredStock": "None",
          "proceedsFromRepurchaseOfEquity": "-1531000000",
          "proceedsFromSaleOfTreasuryStock": "None",
          "changeInCashAndCashEquivalents": "-124000000",
          "changeInExchangeRate": "None",
          "netIncome": "-5543000000"
      },
      {
          "fiscalDateEnding": "2019-12-31",
          "reportedCurrency": "USD",
          "operatingCashflow": "27314000000",
          "paymentsForOperatingActivities": "8576000000",
          "proceedsFromOperatingActivities": "None",
          "changeInOperatingLiabilities": "-42000000",
          "changeInOperatingAssets": "-1969000000",
          "depreciationDepletionAndAmortization": "29218000000",
          "capitalExpenditures": "14116000000",
          "changeInReceivables": "-2354000000",
          "changeInInventory": "-7000000",
          "profitLoss": "2845000000",
          "cashflowFromInvestment": "-11458000000",
          "cashflowFromFinancing": "-19758000000",
          "proceedsFromRepaymentsOfShortTermDebt": "-2821000000",
          "paymentsForRepurchaseOfCommonStock": "4039000000",
          "paymentsForRepurchaseOfEquity": "4039000000",
          "paymentsForRepurchaseOfPreferredStock": "None",
          "dividendPayout": "8977000000",
          "dividendPayoutCommonStock": "8959000000",
          "dividendPayoutPreferredStock": "None",
          "proceedsFromIssuanceOfCommonStock": "None",
          "proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet": "0",
          "proceedsFromIssuanceOfPreferredStock": "None",
          "proceedsFromRepurchaseOfEquity": "-2935000000",
          "proceedsFromSaleOfTreasuryStock": "None",
          "changeInCashAndCashEquivalents": "-3902000000",
          "changeInExchangeRate": "None",
          "netIncome": "2924000000"
      }
    ],
    "quarterlyReports": [
      {
          "fiscalDateEnding": "2021-09-30",
          "reportedCurrency": "USD",
          "operatingCashflow": "8579000000",
          "paymentsForOperatingActivities": "1592000000",
          "proceedsFromOperatingActivities": "None",
          "changeInOperatingLiabilities": "515000000",
          "changeInOperatingAssets": "1048000000",
          "depreciationDepletionAndAmortization": "4304000000",
          "capitalExpenditures": "1907000000",
          "changeInReceivables": "1022000000",
          "changeInInventory": "-118000000",
          "profitLoss": "6115000000",
          "cashflowFromInvestment": "-1341000000",
          "cashflowFromFinancing": "-8825000000",
          "proceedsFromRepaymentsOfShortTermDebt": "-5575000000",
          "paymentsForRepurchaseOfCommonStock": "625000000",
          "paymentsForRepurchaseOfEquity": "625000000",
          "paymentsForRepurchaseOfPreferredStock": "None",
          "dividendPayout": "2545000000",
          "dividendPayoutCommonStock": "2571000000",
          "dividendPayoutPreferredStock": "None",
          "proceedsFromIssuanceOfCommonStock": "None",
          "proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet": "0",
          "proceedsFromIssuanceOfPreferredStock": "None",
          "proceedsFromRepurchaseOfEquity": "-618000000",
          "proceedsFromSaleOfTreasuryStock": "None",
          "changeInCashAndCashEquivalents": "10419000000",
          "changeInExchangeRate": "None",
          "netIncome": "6111000000"
      },
      {
        "fiscalDateEnding": "2021-06-30",
        "reportedCurrency": "USD",
        "operatingCashflow": "6954000000",
        "paymentsForOperatingActivities": "1940000000",
        "proceedsFromOperatingActivities": "None",
        "changeInOperatingLiabilities": "2189000000",
        "changeInOperatingAssets": "2397000000",
        "depreciationDepletionAndAmortization": "4522000000",
        "capitalExpenditures": "1797000000",
        "changeInReceivables": "1891000000",
        "changeInInventory": "522000000",
        "profitLoss": "3094000000",
        "cashflowFromInvestment": "-1572000000",
        "cashflowFromFinancing": "-4945000000",
        "proceedsFromRepaymentsOfShortTermDebt": "711000000",
        "paymentsForRepurchaseOfCommonStock": "2000000",
        "paymentsForRepurchaseOfEquity": "2000000",
        "paymentsForRepurchaseOfPreferredStock": "None",
        "dividendPayout": "2588000000",
        "dividendPayoutCommonStock": "2573000000",
        "dividendPayoutPreferredStock": "None",
        "proceedsFromIssuanceOfCommonStock": "None",
        "proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet": "0",
        "proceedsFromIssuanceOfPreferredStock": "None",
        "proceedsFromRepurchaseOfEquity": "106000000",
        "proceedsFromSaleOfTreasuryStock": "None",
        "changeInCashAndCashEquivalents": "7616000000",
        "changeInExchangeRate": "None",
        "netIncome": "3082000000"
      },
    ]
  },
  error: null,
  status: "idle",
} as CashFlowFetchState;

export const cashFlowSlice = createSlice
({
  name: "cashFlow",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFundamentalsCashFlow.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    
    builder.addCase(fetchFundamentalsCashFlow.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "idle";
    });

    builder.addCase(fetchFundamentalsCashFlow.rejected, (state, { payload }) => {
      if(payload) state.error = payload.message;
      state.status = "idle";
    });
  }
})


export const selectStatus = (state: RootState) => state.cashFlow.status;

export default cashFlowSlice.reducer;