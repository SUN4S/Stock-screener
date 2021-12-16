import './resources/styles/css/main.css';

import { Route, Routes } from "react-router-dom";

import CompanySearch from "./components/CompanySearch";
import FundamentalData from './components/FundamentalData';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
//import { RootState } from './app/store';
import SideBar from './components/SideBar';
import TimeSeries from './components/TimeSeries';
//import axios from 'axios';
import { styled } from '@mui/material/styles';

//import { useState } from 'react';

//import { useDispatch, useSelector } from 'react-redux';


const Main = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  height: '100vh',
  borderRadius: '0px',
  color: theme.palette.text.secondary,
  backgroundColor: '#1B2635',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  margin: 'auto 0'
}));

const Header = styled(Paper)(({theme}) => ({
  height: '10vh',
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  color: '#fff',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  flexDirection: 'column',
  padding: '0 3rem',
  "p": {
    width: "50%",
    textAlign: 'start',
    marginTop: '0.5rem'
  }
}));

const Footer = styled(Paper)(({theme}) => ({
  height: '5vh',
  backgroundColor: '#111827',
  border: 'none',
  boxShadow: 'none',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0 3rem',
}));

export const App = () => {
  //React toolkit test
  // const count = useSelector((state: RootState) => state.counter.value);
  // const [ticker, setTicker] = useState<string>();
  // const [data, setData] = useState<any>();
  
  // const dispatch = useDispatch();

  // const fetchApi = async (tickerData: unknown) => { 
  //   let res = await axios(`/api/v1/fundamentals/incomestatement/${tickerData}`);
  //   setData(res.data);
  // }

  return (
    <Grid container spacing={0} >
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={10}>
        <Main>
          <div>
            <Header>
              <h1>Company Search</h1> 
              <p>The Search Endpoint returns the best-matching symbols and market information based on keywords of your choice. The search results also contain match scores that provide you with the full flexibility to develop your own search and filtering logic.</p>         
            </Header>
            <hr style={{ margin: '1rem auto 2rem', width: '98%' }} />
          </div>
          <Routes>
            <Route path="/" element={<CompanySearch />} />
            <Route path="/timeseries/:type" element={<TimeSeries />} />
            <Route path="/fundamentaldata/:type" element={<FundamentalData />} />
          </Routes>
          <Footer>
            <a href="google.com"> Some Link </a>
          </Footer>
        </Main>
      </Grid>
    </Grid>
  );
}