import { FetchCompaniesError, SearchState } from '../models/searchData';

import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCompanies = createAsyncThunk<
  SearchState,
  string,
  { rejectValue: FetchCompaniesError }>
  (
  // The first argument is the action name:
  "companies/fetch", 

  async (input: string, thunkApi) => {
    const response = await axios(`/api/v1/search/endpoint/${input}`);
    // Get the JSON from the response:
    const data: SearchState = await response.data;
    
    await console.log(data);

    // Check if status is not okay:
    if (!data["bestMatches"]) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch company list." 
      });
    }
    
    // Return result:
    return data;
  }
);