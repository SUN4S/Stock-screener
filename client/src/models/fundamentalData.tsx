import { Interface } from "readline";

export interface IncomeState {
  "symbol": string,
  "annualReports": IncomeStatementAnnual[];
  "quarterlyReports": IncomeStatementQuarterly[];
}

export interface IncomeStatementAnnual {
  "fiscalDateEnding": string,
    "reportedCurrency": string,
    "grossProfit": string,
    "totalRevenue": string,
    "costOfRevenue": string,
    "costofGoodsAndServicesSold": string,
    "operatingIncome": string,
    "sellingGeneralAndAdministrative": string,
    "researchAndDevelopment": string,
    "operatingExpenses": string,
    "investmentIncomeNet": string,
    "netInterestIncome": string,
    "interestIncome": string,
    "interestExpense": string,
    "nonInterestIncome": string,
    "otherNonOperatingIncome": string,
    "depreciation": string,
    "depreciationAndAmortization": string,
    "incomeBeforeTax": string,
    "incomeTaxExpense": string,
    "interestAndDebtExpense": string,
    "netIncomeFromContinuingOperations": string,
    "comprehensiveIncomeNetOfTax": string,
    "ebit": string,
    "ebitda": string,
    "netIncome": string
}

export interface IncomeStatementQuarterly {
  "fiscalDateEnding": string,
    "reportedCurrency": string,
    "grossProfit": string,
    "totalRevenue": string,
    "costOfRevenue": string,
    "costofGoodsAndServicesSold": string,
    "operatingIncome": string,
    "sellingGeneralAndAdministrative": string,
    "researchAndDevelopment": string,
    "operatingExpenses": string,
    "investmentIncomeNet": string,
    "netInterestIncome": string,
    "interestIncome": string,
    "interestExpense": string,
    "nonInterestIncome": string,
    "otherNonOperatingIncome": string,
    "depreciation": string,
    "depreciationAndAmortization": string,
    "incomeBeforeTax": string,
    "incomeTaxExpense": string,
    "interestAndDebtExpense": string,
    "netIncomeFromContinuingOperations": string,
    "comprehensiveIncomeNetOfTax": string,
    "ebit": string,
    "ebitda": string,
    "netIncome": string
}

export interface FetchIncomeError {
  message: string;
}

export interface IncomeFetchState {
  status: "loading" | "idle";
  error: string | null;
  data: IncomeState;
};

export interface BalanceState {
  "symbol": string;
  "annualReports": BalanceStateAnnual[];
  "quarterlyReports": BalanceStateQuarterly[];
}

export interface BalanceStateAnnual{
  "fiscalDateEnding": string,
    "reportedCurrency": string,
    "totalAssets": string,
    "totalCurrentAssets": string,
    "cashAndCashEquivalentsAtCarryingValue": string,
    "cashAndShortTermInvestments": string,
    "inventory": string,
    "currentNetReceivables": string,
    "totalNonCurrentAssets": string,
    "propertyPlantEquipment": string,
    "accumulatedDepreciationAmortizationPPE": string,
    "intangibleAssets": string,
    "intangibleAssetsExcludingGoodwill": string,
    "goodwill": string,
    "investments": string,
    "longTermInvestments": string,
    "shortTermInvestments": string,
    "otherCurrentAssets": string,
    "otherNonCurrrentAssets": string,
    "totalLiabilities": string,
    "totalCurrentLiabilities": string,
    "currentAccountsPayable": string,
    "deferredRevenue": string,
    "currentDebt": string,
    "shortTermDebt": string,
    "totalNonCurrentLiabilities": string,
    "capitalLeaseObligations": string,
    "longTermDebt": string,
    "currentLongTermDebt": string,
    "longTermDebtNoncurrent": string,
    "shortLongTermDebtTotal": string,
    "otherCurrentLiabilities": string,
    "otherNonCurrentLiabilities": string,
    "totalShareholderEquity": string,
    "treasuryStock": string,
    "retainedEarnings": string,
    "commonStock": string,
    "commonStockSharesOutstanding": string
}

export interface BalanceStateQuarterly {
  "fiscalDateEnding": string,
    "reportedCurrency": string,
    "totalAssets": string,
    "totalCurrentAssets": string,
    "cashAndCashEquivalentsAtCarryingValue": string,
    "cashAndShortTermInvestments": string,
    "inventory": string,
    "currentNetReceivables": string,
    "totalNonCurrentAssets": string,
    "propertyPlantEquipment": string,
    "accumulatedDepreciationAmortizationPPE": string,
    "intangibleAssets": string,
    "intangibleAssetsExcludingGoodwill": string,
    "goodwill": string,
    "investments": string,
    "longTermInvestments": string,
    "shortTermInvestments": string,
    "otherCurrentAssets": string,
    "otherNonCurrrentAssets": string,
    "totalLiabilities": string,
    "totalCurrentLiabilities": string,
    "currentAccountsPayable": string,
    "deferredRevenue": string,
    "currentDebt": string,
    "shortTermDebt": string,
    "totalNonCurrentLiabilities": string,
    "capitalLeaseObligations": string,
    "longTermDebt": string,
    "currentLongTermDebt": string,
    "longTermDebtNoncurrent": string,
    "shortLongTermDebtTotal": string,
    "otherCurrentLiabilities": string,
    "otherNonCurrentLiabilities": string,
    "totalShareholderEquity": string,
    "treasuryStock": string,
    "retainedEarnings": string,
    "commonStock": string,
    "commonStockSharesOutstanding": string
}

export interface FetchBalanceError {
  message: string;
}

export interface BalanceFetchState {
  status: "loading" | "idle";
  error: string | null;
  data: BalanceState;
};


export interface CashFlowState {
  "symbol": string;
  "annualReports": CashFlowStateAnnual[];
  "quarterlyReports": CashFlowStateQuarterly[];
}

export interface CashFlowStateAnnual {
  "fiscalDateEnding": string,
  "reportedCurrency": string,
  "operatingCashflow": string,
  "paymentsForOperatingActivities": string,
  "proceedsFromOperatingActivities": string,
  "changeInOperatingLiabilities": string,
  "changeInOperatingAssets": string,
  "depreciationDepletionAndAmortization": string,
  "capitalExpenditures": string,
  "changeInReceivables": string,
  "changeInInventory": string,
  "profitLoss": string,
  "cashflowFromInvestment": string,
  "cashflowFromFinancing": string,
  "proceedsFromRepaymentsOfShortTermDebt": string,
  "paymentsForRepurchaseOfCommonStock": string,
  "paymentsForRepurchaseOfEquity": string,
  "paymentsForRepurchaseOfPreferredStock": string,
  "dividendPayout": string,
  "dividendPayoutCommonStock": string,
  "dividendPayoutPreferredStock": string,
  "proceedsFromIssuanceOfCommonStock": string,
  "proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet": string,
  "proceedsFromIssuanceOfPreferredStock": string,
  "proceedsFromRepurchaseOfEquity": string,
  "proceedsFromSaleOfTreasuryStock": string,
  "changeInCashAndCashEquivalents": string,
  "changeInExchangeRate": string,
  "netIncome": string
}

export interface CashFlowStateQuarterly {
  "fiscalDateEnding": string,
  "reportedCurrency": string,
  "operatingCashflow": string,
  "paymentsForOperatingActivities": string,
  "proceedsFromOperatingActivities": string,
  "changeInOperatingLiabilities": string,
  "changeInOperatingAssets": string,
  "depreciationDepletionAndAmortization": string,
  "capitalExpenditures": string,
  "changeInReceivables": string,
  "changeInInventory": string,
  "profitLoss": string,
  "cashflowFromInvestment": string,
  "cashflowFromFinancing": string,
  "proceedsFromRepaymentsOfShortTermDebt": string,
  "paymentsForRepurchaseOfCommonStock": string,
  "paymentsForRepurchaseOfEquity": string,
  "paymentsForRepurchaseOfPreferredStock": string,
  "dividendPayout": string,
  "dividendPayoutCommonStock": string,
  "dividendPayoutPreferredStock": string,
  "proceedsFromIssuanceOfCommonStock": string,
  "proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet": string,
  "proceedsFromIssuanceOfPreferredStock": string,
  "proceedsFromRepurchaseOfEquity": string,
  "proceedsFromSaleOfTreasuryStock": string,
  "changeInCashAndCashEquivalents": string,
  "changeInExchangeRate": string,
  "netIncome": string
}

export interface FetchCashFlowError {
  message: string;
}

export interface CashFlowFetchState {
  status: "loading" | "idle";
  error: string | null;
  data: CashFlowState;
};

export interface EarningsState {
  "symbol": string;
  "annualEarnings": EarningsStateAnnual[];
  "quarterlyEarnings": EarningsStateQuarterly[];
}

export interface EarningsStateAnnual {
    "fiscalDateEnding": string,
    "reportedEPS": string
}

export interface EarningsStateQuarterly {
  "fiscalDateEnding": string,
  "reportedDate": string,
  "reportedEPS": string,
  "estimatedEPS": string,
  "surprise": string,
  "surprisePercentage": string
}

export interface FetchEarningsError {
  message: string;
}

export interface EarningsFetchState {
  data: EarningsState;
  status: "loading" | "idle";
  error: string | null;
};

export interface OverviewState {
  "Symbol": string,
  "AssetType": string,
  "Name": string,
  "Description": string,
  "CIK": string,
  "Exchange": string,
  "Currency": string,
  "Country":string ,
  "Sector": string,
  "Industry": string,
  "Address": string,
  "FiscalYearEnd": string,
  "LatestQuarter": string,
  "MarketCapitalization": string,
  "EBITDA": string,
  "PERatio": string,
  "PEGRatio": string,
  "BookValue": string,
  "DividendPerShare": string,
  "DividendYield": string,
  "EPS": string,
  "RevenuePerShareTTM": string,
  "ProfitMargin": string,
  "OperatingMarginTTM": string,
  "ReturnOnAssetsTTM": string,
  "ReturnOnEquityTTM": string,
  "RevenueTTM": string,
  "GrossProfitTTM": string,
  "DilutedEPSTTM": string,
  "QuarterlyEarningsGrowthYOY": string,
  "QuarterlyRevenueGrowthYOY": string,
  "AnalystTargetPrice": string,
  "TrailingPE": string,
  "ForwardPE": string,
  "PriceToSalesRatioTTM": string,
  "PriceToBookRatio": string,
  "EVToRevenue": string,
  "EVToEBITDA": string,
  "Beta": string,
  "52WeekHigh": string,
  "52WeekLow": string,
  "50DayMovingAverage": string,
  "200DayMovingAverage": string,
  "SharesOutstanding": string,
  "DividendDate": string,
  "ExDividendDate": string
}

export interface FetchOverviewError {
  message: string;
}

export interface OverviewFetchState {
  data: OverviewState;
  status: "loading" | "idle";
  error: string | null;
};
