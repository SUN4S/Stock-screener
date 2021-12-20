import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchFundamentalsBalance } from "./fetchFundamentals";
import { BalanceFetchState } from "../../models/fundamentalData";

const initialState = {
  data: {
    "symbol": "CVX",
    "annualReports": [
        {
            "fiscalDateEnding": "2020-12-31",
            "reportedCurrency": "USD",
            "totalAssets": "239790000000",
            "totalCurrentAssets": "26078000000",
            "cashAndCashEquivalentsAtCarryingValue": "5596000000",
            "cashAndShortTermInvestments": "327000000",
            "inventory": "5676000000",
            "currentNetReceivables": "11471000000",
            "totalNonCurrentAssets": "66459000000",
            "propertyPlantEquipment": "156618000000",
            "accumulatedDepreciationAmortizationPPE": "None",
            "intangibleAssets": "4402000000",
            "intangibleAssetsExcludingGoodwill": "None",
            "goodwill": "4402000000",
            "investments": "39453000000",
            "longTermInvestments": "39052000000",
            "shortTermInvestments": "327000000",
            "otherCurrentAssets": "3304000000",
            "otherNonCurrrentAssets": "11950000000",
            "totalLiabilities": "107064000000",
            "totalCurrentLiabilities": "22183000000",
            "currentAccountsPayable": "10950000000",
            "deferredRevenue": "None",
            "currentDebt": "11373000000",
            "shortTermDebt": "1548000000",
            "totalNonCurrentLiabilities": "79045000000",
            "capitalLeaseObligations": "447000000",
            "longTermDebt": "30800000000",
            "currentLongTermDebt": "2600000000",
            "longTermDebtNoncurrent": "1690000000",
            "shortLongTermDebtTotal": "32348000000",
            "otherCurrentLiabilities": "-2884000000",
            "otherNonCurrentLiabilities": "63095000000",
            "totalShareholderEquity": "131688000000",
            "treasuryStock": "41498000000",
            "retainedEarnings": "160377000000",
            "commonStock": "1832000000",
            "commonStockSharesOutstanding": "1925186317"
        },
        {
            "fiscalDateEnding": "2019-12-31",
            "reportedCurrency": "USD",
            "totalAssets": "237428000000",
            "totalCurrentAssets": "28329000000",
            "cashAndCashEquivalentsAtCarryingValue": "0",
            "cashAndShortTermInvestments": "349000000",
            "inventory": "5848000000",
            "currentNetReceivables": "13325000000",
            "totalNonCurrentAssets": "64548000000",
            "propertyPlantEquipment": "150494000000",
            "accumulatedDepreciationAmortizationPPE": "None",
            "intangibleAssets": "4463000000",
            "intangibleAssetsExcludingGoodwill": "None",
            "goodwill": "4463000000",
            "investments": "39048000000",
            "longTermInvestments": "38688000000",
            "shortTermInvestments": "349000000",
            "otherCurrentAssets": "3407000000",
            "otherNonCurrrentAssets": "10532000000",
            "totalLiabilities": "92220000000",
            "totalCurrentLiabilities": "26530000000",
            "currentAccountsPayable": "14103000000",
            "deferredRevenue": "None",
            "currentDebt": "13032000000",
            "shortTermDebt": "3282000000",
            "totalNonCurrentLiabilities": "56837000000",
            "capitalLeaseObligations": "282000000",
            "longTermDebt": "13659000000",
            "currentLongTermDebt": "5054000000",
            "longTermDebtNoncurrent": "None",
            "shortLongTermDebtTotal": "16941000000",
            "otherCurrentLiabilities": "9145000000",
            "otherNonCurrentLiabilities": "44136000000",
            "totalShareholderEquity": "144213000000",
            "treasuryStock": "44599000000",
            "retainedEarnings": "174945000000",
            "commonStock": "1832000000",
            "commonStockSharesOutstanding": "1882168101"
        }
    ],
    "quarterlyReports": [
        {
            "fiscalDateEnding": "2021-09-30",
            "reportedCurrency": "USD",
            "totalAssets": "239948000000",
            "totalCurrentAssets": "32137000000",
            "cashAndCashEquivalentsAtCarryingValue": "5998000000",
            "cashAndShortTermInvestments": "34000000",
            "inventory": "6129000000",
            "currentNetReceivables": "16567000000",
            "totalNonCurrentAssets": "206612000000",
            "propertyPlantEquipment": "147945000000",
            "accumulatedDepreciationAmortizationPPE": "None",
            "intangibleAssets": "4402000000",
            "intangibleAssetsExcludingGoodwill": "None",
            "goodwill": "4402000000",
            "investments": "41131000000",
            "longTermInvestments": "41097000000",
            "shortTermInvestments": "34000000",
            "otherCurrentAssets": "3409000000",
            "otherNonCurrrentAssets": "11743000000",
            "totalLiabilities": "103226000000",
            "totalCurrentLiabilities": "25188000000",
            "currentAccountsPayable": "15308000000",
            "deferredRevenue": "None",
            "currentDebt": "291000000",
            "shortTermDebt": "291000000",
            "totalNonCurrentLiabilities": "20684000000",
            "capitalLeaseObligations": "None",
            "longTermDebt": "26900000000",
            "currentLongTermDebt": "291000000",
            "longTermDebtNoncurrent": "None",
            "shortLongTermDebtTotal": "27191000000",
            "otherCurrentLiabilities": "9589000000",
            "otherNonCurrentLiabilities": "57354000000",
            "totalShareholderEquity": "135862000000",
            "treasuryStock": "41418000000",
            "retainedEarnings": "163044000000",
            "commonStock": "1832000000",
            "commonStockSharesOutstanding": "1927685919"
        }
    ]
  },
  error: null,
  status: "idle",
} as BalanceFetchState;

export const balanceSlice = createSlice
({
  name: "balance",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFundamentalsBalance.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    
    builder.addCase(fetchFundamentalsBalance.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "idle";
    });

    builder.addCase(fetchFundamentalsBalance.rejected, (state, { payload }) => {
      if(payload) state.error = payload.message;
      state.status = "idle";
    });
  }
})


export const selectStatus = (state: RootState) => state.balance.status;

export default balanceSlice.reducer;