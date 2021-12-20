import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { 
  IncomeState,
  FetchIncomeError, 
  BalanceState, 
  FetchBalanceError, 
  FetchCashFlowError, 
  CashFlowState,
  FetchEarningsError,
  EarningsState,
  OverviewState,
  FetchOverviewError
} from '../../models/fundamentalData';

export const fetchFundamentalsIncome = createAsyncThunk<
  IncomeState,
  string,
  { rejectValue: FetchIncomeError }>
  (
  // The first argument is the action name:
  "fundamentals/fetchIncome", 

  async (input: string, thunkApi) => {
    const response = await axios(`/api/v1/fundamentals/incomestatement/${input}`);
    // Get the JSON from the response:
    const data: IncomeState = await response.data;
    
    // Check if status is not okay:
    if (!data["annualReports"]) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch Income list." 
      });
    }
    
    // Return result:
    return data;
  }
);

export const fetchFundamentalsBalance = createAsyncThunk<
  BalanceState,
  string,
  { rejectValue: FetchBalanceError }>
  (
  // The first argument is the action name:
  "fundamentals/fetchBalance", 

  async (input: string, thunkApi) => {
    const response = await axios(`/api/v1/fundamentals/balancesheet/${input}`);
    // Get the JSON from the response:
    const data: BalanceState = await response.data;
    
    // Check if status is not okay:
    if (!data["annualReports"]) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch Balance list." 
      });
    }
    
    // Return result:
    return data;
  }
);

export const fetchFundamentalsCashFlow = createAsyncThunk<
  CashFlowState,
  string,
  { rejectValue: FetchCashFlowError }>
  (
  // The first argument is the action name:
  "fundamentals/fetchCashFlow", 

  async (input: string, thunkApi) => {
    const response = await axios(`/api/v1/fundamentals/cashflow/${input}`);
    // Get the JSON from the response:
    const data: CashFlowState = await response.data;
    
    await console.log(data);

    // Check if status is not okay:
    if (!data["annualReports"]) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch Balance list." 
      });
    }
    
    // Return result:
    return data;
  }
);

export const fetchFundamentalsEarnings = createAsyncThunk<
  EarningsState,
  string,
  { rejectValue: FetchEarningsError }>
  (
  // The first argument is the action name:
  "fundamentals/fetchEarnings", 

  async (input: string, thunkApi) => {
    const response = await axios(`/api/v1/fundamentals/earnings/${input}`);
    // Get the JSON from the response:
    const data: EarningsState = await response.data;
    
    // Check if status is not okay:
    if (!data["annualEarnings"]) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch Earnings list." 
      });
    }
    
    // Return result:
    return data;
  }
);

export const fetchFundamentalsOverview = createAsyncThunk<
  OverviewState,
  string,
  { rejectValue: FetchOverviewError }>
  (
  // The first argument is the action name:
  "fundamentals/fetchOverviews", 

  async (input: string, thunkApi) => {
    const response = await axios(`/api/v1/fundamentals/companyoverview/${input}`);
    // Get the JSON from the response:
    const data: OverviewState = await response.data;
    
    // Check if status is not okay:
    if (!data["Symbol"]) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch Overview." 
      });
    }
    
    // Return result:
    return data;
  }
);