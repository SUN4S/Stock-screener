import './resources/styles/css/main.css';
import 'react-awesome-slider/dist/styles.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';

import { Route, Routes } from "react-router-dom";

import { BalanceStatement } from './components/FundamentalData/BalanceStatement';
import { CashFlowStatement } from './components/FundamentalData/CashFlowStatement';
import CompanySearch from "./components/CompanySearch";
import { EarningsStatement } from './components/FundamentalData/EarningsStatement';
import { Footer } from './components/Footer';
import { Grid } from '@mui/material';
import { IncomeStatement } from './components/FundamentalData/IncomeStatement';
import { OverviewStatement } from './components/FundamentalData/OverviewStatement';
import SideBar from './components/SideBar';
import { TimeSeries } from './components/TimeSeries';

export const App = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={2} >
          <SideBar />
      </Grid>
      <Grid item xs={12} lg={10}
        sx={{
          textAlign: 'center',
          height: '95vh',
          borderRadius: '0px',
          backgroundColor: '#1B2635'
        }}>
        <Grid container xs={12} py={2} px={4} sx={{height: '100%',}} alignContent='space-around' justifyContent="center">
          <Routes>
            <Route path="/" element={<CompanySearch />} />
            <Route path="/timeseries/*" element={<TimeSeries />} />
            <Route path="/fundamentaldata/incomestatement" element={<IncomeStatement />} />
            <Route path="/fundamentaldata/balanceSheet" element={<BalanceStatement />} />
            <Route path="/fundamentaldata/cashflow" element={<CashFlowStatement />} />
            <Route path="/fundamentaldata/earnings" element={<EarningsStatement />} />
            <Route path="/fundamentaldata/overview" element={<OverviewStatement />} />
          </Routes>
        </Grid>
        <Footer />
      </Grid>
    </Grid>
  );
}