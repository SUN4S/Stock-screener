
export interface SearchState {
  "bestMatches": {
    "1. symbol": String;
    "2. name": String;
    "3. type": String;
    "4. region": String;
    "5. marketOpen": String;
    "6. marketClose": String;
    "7. timezone": String;
    "8. currency": String;
    "9. matchScore": String;
  }[]
}

export interface FetchCompaniesError {
  message: string;
}

export interface CompanyFetchState {
  status: "loading" | "idle";
  error: string | null;
  data: SearchState;
};