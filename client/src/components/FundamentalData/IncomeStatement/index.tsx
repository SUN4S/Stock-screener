import React, { useState } from 'react'
import { RootState, useTypedSelector } from "../../../app/store";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';

import FormControl from '@mui/material/FormControl';
import { Grid } from '@mui/material';
import { IncomeAnnualList } from './IncomeAnnualList';
import { IncomeQuarterlyList } from './IncomeQuarterlyList';
import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { fetchFundamentalsIncome } from '../../../features/fundamentals/fetchFundamentals';
import { selectStatus } from '../../../features/fundamentals/incomeSlice';
import { styled } from '@mui/material/styles';

const Container = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  borderRadius: '5px',
  color: theme.palette.text.secondary,
  backgroundColor: '#111827',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  overflowY: 'auto'
}));

export const IncomeStatement = () => {
  const [input, setInput] = useState<string>();
  const [select, setSelect] = useState<string>("annualReports");

  const status = useTypedSelector(selectStatus);
  const incomeData = useSelector((state: RootState) => state.income.data);

  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  const handleClick = (input: string | any) => {
    dispatch(fetchFundamentalsIncome(input));
  }

  return (
    <>
      <Grid item xs={12} >
          <Grid container justifyContent='space-between' sx={{ borderBottom: '2px solid #272b35', padding: '1rem 0', color: '#fff'}}>
            <Grid item xl={7} lg={6} md={5} sm={12} xs={12} py={1}>
              <div className='headerText'>
                <h1>Income Sheet Data</h1>
                <p>Search for a Companys' Income sheet data</p>
              </div>
            </Grid>
            <Grid item xl={4} lg={6} md={7} sm={12} xs={12} py={1}>
              <Grid container className='searchInput' justifyContent="flex-end" spacing={2}>
                <Grid item xs={3}>
                  <FormControl sx={{ height: '100%', width: '100%'}}>          
                    <Select
                      value={select}
                      sx={{ color: "primary.main" }}
                      onChange={handleChange}
                    >
                      <MenuItem value={"annualReports"} >Annual</MenuItem>
                      <MenuItem value={"quarterlyReports"} >Quarterly</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sx={{height: '100%', width: '100%'}} alignSelf='flex-end'>
                  <div className="form__group field">
                    <input
                      type="text"
                      className="form__field" 
                      placeholder="Search"
                      name="search" id='name' 
                      required 
                      autoComplete={'false'}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleClick(input)}
                      />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <LoadingButton
                    variant="outlined"
                    onClick={() => handleClick(input)}
                    loading={status === 'loading' ? true : false}
                    loadingPosition="center"
                    style={{ height: '100%', width: '100%' }}
                  >
                    <SearchOutlinedIcon />
                  </LoadingButton>
                </Grid>
              </Grid> 
            </Grid>
          </Grid>
      </Grid>
      <Grid item className="earningsContainer" sx={{height: '85%'}} xs={12}>
        <Container>
          <div className="titleContainer">
            <h2>Company Symbol: {incomeData.symbol}</h2>
          </div>
          {
            select === "annualReports" ? <IncomeAnnualList /> : <IncomeQuarterlyList />
          }
        </Container>
      </Grid>   
    </>
  )
}

