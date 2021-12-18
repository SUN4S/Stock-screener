import { RootState } from "../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchCompanies } from "./fetchCompanies";
import { CompanyFetchState } from '../models/searchData';

const initialState = {
  data: {
    "bestMatches": [
        {
            "1. symbol": "MSFT",
            "2. name": "Microsoft Corporation",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.6154"
        },
        {
            "1. symbol": "MSF.DEX",
            "2. name": "Microsoft Corporation",
            "3. type": "Equity",
            "4. region": "XETRA",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+01",
            "8. currency": "EUR",
            "9. matchScore": "0.6000"
        },
        {
            "1. symbol": "MSF.FRK",
            "2. name": "Microsoft Corporation",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+01",
            "8. currency": "EUR",
            "9. matchScore": "0.6000"
        },
        {
            "1. symbol": "MSFT34.SAO",
            "2. name": "Microsoft Corporation",
            "3. type": "Equity",
            "4. region": "Brazil/Sao Paolo",
            "5. marketOpen": "10:00",
            "6. marketClose": "17:30",
            "7. timezone": "UTC-03",
            "8. currency": "BRL",
            "9. matchScore": "0.6000"
        }
    ]
},
  error: null,
  status: "idle",
} as CompanyFetchState;

export const searchSlice = createSlice
({
  name: "search",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    
    builder.addCase(fetchCompanies.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "idle";
    });

    builder.addCase(fetchCompanies.rejected, (state, { payload }) => {
      if(payload) state.error = payload.message;
      state.status = "idle";
    });
  }
})


export const selectStatus = (state: RootState) => state.search.status;

export default searchSlice.reducer;