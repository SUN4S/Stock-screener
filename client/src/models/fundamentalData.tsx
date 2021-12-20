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
  "annualReports": BalanceStateAnual[];
  "quarterlyReports": BalanceStateQuarterly[];
}

export interface BalanceStateAnual{
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