import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IncomeState, FetchIncomeError, BalanceState, FetchBalanceError } from '../models/fundamentalData';

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
    await console.log(response);
    const data: IncomeState = await response.data;
    
    await console.log(data);

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
    await console.log(response);
    const data: BalanceState = await response.data;
    
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