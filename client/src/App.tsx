import './resources/styles/css/main.css';

import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import { decrement, increment } from './features/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

import { CompanySearch } from "./components/CompanySearch";
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { RootState } from './app/store';
import { SideBar } from './components/SideBar';
import axios from 'axios';
import { styled } from '@mui/material/styles';

const Main = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  height: '100vh',
  borderRadius: '0px',
  color: theme.palette.text.secondary,
  backgroundColor: '#1B2635'
}));

export const App = () => {
  //React toolkit test
  const count = useSelector((state: RootState) => state.counter.value);
  const [ticker, setTicker] = useState<string>();
  const [data, setData] = useState<any>();
  
  const dispatch = useDispatch();

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
          <Routes>
            <Route path="/" element={<CompanySearch />} />
          </Routes>
        </Main>
      </Grid>
    </Grid>
  );
}