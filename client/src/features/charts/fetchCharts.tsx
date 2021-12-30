import {
  DailyData,
  FetchChartError,
  InterdayData,
  MonthlyData,
  WeeklyData,
} from '../../models/timeSeries';

import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInterdayChartData = createAsyncThunk<
  InterdayData,
  string,
  { rejectValue: FetchChartError }>
  (
  // The first argument is the action name:
  "timeSeries/fetchInterdayData", 

  async (input: string, thunkApi) => {
    const response = await axios(`/api/v1/stocktime/interday/${input}`);
    await console.log(response.data);
    // Get the JSON from the response:
    const data: InterdayData = await response.data;
    
    // Check if status is not okay:
    if (!data["Meta Data"]) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch Chart data." 
      });
    }
    
    // Return result:
    return data;
  }
);

export const fetchDailyChartData = createAsyncThunk<
  DailyData,
  string,
  { rejectValue: FetchChartError }>
  (
  // The first argument is the action name:
  "timeSeries/fetchDailyData", 

  async (input: string, thunkApi) => {
    const response = await axios(`/api/v1/stocktime/daily/${input}`);
    // Get the JSON from the response:
    const data: DailyData = await response.data;
    
    // Check if status is not okay:
    if (!data["Meta Data"]) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch Chart data." 
      });
    }
    
    // Return result:
    return data;
  }
);

export const fetchWeeklyChartData = createAsyncThunk<
  WeeklyData,
  string,
  { rejectValue: FetchChartError }>
  (
  // The first argument is the action name:
  "timeSeries/fetchWeeklyData", 

  async (input: string, thunkApi) => {
    const response = await axios(`/api/v1/stocktime/weeklyadjusted/${input}`);
    // Get the JSON from the response:
    const data: WeeklyData = await response.data;
    
    // Check if status is not okay:
    if (!data["Meta Data"]) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch Chart data." 
      });
    }
    
    // Return result:
    return data;
  }
);

export const fetchMonthlyChartData = createAsyncThunk<
  MonthlyData,
  string,
  { rejectValue: FetchChartError }>
  (
  // The first argument is the action name:
  "timeSeries/fetchMonthlyData", 

  async (input: string, thunkApi) => {
    const response = await axios(`/api/v1/stocktime/monthlyadjusted/${input}`);
    // Get the JSON from the response:
    const data: MonthlyData = await response.data;
    
    // Check if status is not okay:
    if (!data["Meta Data"]) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch Chart data." 
      });
    }
    
    // Return result:
    return data;
  }
);