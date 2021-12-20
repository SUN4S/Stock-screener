import './resources/styles/css/main.css';
import 'react-awesome-slider/dist/styles.css';
import 'swiper/swiper.min.css';

import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';

import { Route, Routes } from "react-router-dom";

import CompanySearch from "./components/CompanySearch";
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import SideBar from './components/SideBar';
import TimeSeries from './components/TimeSeries';
import { styled } from '@mui/material/styles';
import { IncomeStatement } from './components/FundamentalData/IncomeStatement';
import { Footer } from './components/Footer';
import { BalanceStatement } from './components/FundamentalData/BalanceStatement';
import { CashFlowStatement } from './components/FundamentalData/CashFlowStatement';
import { EarningsStatement } from './components/FundamentalData/EarningsStatement';
import { OverviewStatement } from './components/FundamentalData/OverviewStatement';

const Main = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  height: '95vh',
  borderRadius: '0px',
  color: theme.palette.text.secondary,
  backgroundColor: '#1B2635',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  margin: 'auto 0'
}));

export const App = () => {
  return (
    <Grid container spacing={0} >
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={10}>
        <Main>
          <Routes>
            <Route path="/" element={<CompanySearch />} />
            <Route path="/timeseries" element={<TimeSeries />} />
            <Route path="/fundamentaldata/incomestatement" element={<IncomeStatement />} />
            <Route path="/fundamentaldata/balanceSheet" element={<BalanceStatement />} />
            <Route path="/fundamentaldata/cashflow" element={<CashFlowStatement />} />
            <Route path="/fundamentaldata/earnings" element={<EarningsStatement />} />
            <Route path="/fundamentaldata/overview" element={<OverviewStatement />} />
          </Routes>
          <div></div>
        </Main>
        <Footer />
      </Grid>
    </Grid>
  );
}