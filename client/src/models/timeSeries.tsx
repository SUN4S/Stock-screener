// ------------- Interday models ---------------- //
export interface MetaDataInterday {
  "1. Information": string,
  "2. Symbol": string,
  "3. Last Refreshed": string,
  "4. Interval": string,
  "5. Output Size": string,
  "6. Time Zone": string
}

export interface SelectTimeInterday {
  "1. open": string,
  "2. high": string,
  "3. low": string,
  "4. close": string,
  "5. volume": string
}

export interface InterdayData {
  "Meta Data": MetaDataInterday;
  "Time Series (5min)": {
    [key: string]: SelectTimeInterday
  };
}

export interface ChartFetchInterdayState {
  data: InterdayData;
  status: "loading" | "idle";
  error: string | null;
};

// ------------- Daily models ---------------- //
export interface DailyData {
  "Meta Data": MetaDataDaily,
  "Time Series (Daily)": {
    [key: string]: SelectTimeDaily
  }
}

export interface MetaDataDaily {
  "1. Information": string,
  "2. Symbol": string,
  "3. Last Refreshed": string,
  "4. Output Size": string,
  "5. Time Zone": string
}

export interface SelectTimeDaily {
  "1. open": string,
  "2. high": string,
  "3. low": string,
  "4. close": string,
  "5. volume": string
}

export interface ChartFetchDailyState {
  data:  DailyData;
  status: "loading" | "idle";
  error: string | null;
};

// ------------- Weekly models ---------------- //
export interface WeeklyData {
  "Meta Data": MetaDataWeekly,
  "Weekly Adjusted Time Series": {
    [key: string]: SelectTimeWeekly
  }
}

export interface MetaDataWeekly {
  "1. Information": string,
  "2. Symbol": string,
  "3. Last Refreshed": string,
  "4. Time Zone": string
}

export interface SelectTimeWeekly {
  "1. open": string,
  "2. high": string,
  "3. low": string,
  "4. close": string,
  "5. adjusted close": string,
  "6. volume": string,
  "7. dividend amount": string
}

export interface ChartFetchWeeklyState {
  data: WeeklyData;
  status: "loading" | "idle";
  error: string | null;
};

// ------------- Monthly models ---------------- //
export interface MonthlyData {
  "Meta Data": MetaDataMonthly,
  "Monthly Adjusted Time Series": {
    [key: string]: SelectTimeMonthly
  }
}

export interface MetaDataMonthly {
  "1. Information": string,
  "2. Symbol": string,
  "3. Last Refreshed": string,
  "4. Time Zone": string
}

export interface SelectTimeMonthly {
  "1. open": string,
  "2. high": string,
  "3. low": string,
  "4. close": string,
  "5. adjusted close": string,
  "6. volume": string,
  "7. dividend amount": string
}

export interface FetchChartError {
  message: string;
}

export interface ChartFetchMonthlyState {
  data: MonthlyData;
  status: "loading" | "idle";
  error: string | null;
};

