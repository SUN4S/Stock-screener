import React, { useState, Suspense, lazy } from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';

import FormControl from '@mui/material/FormControl';
import { Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import { RootState } from '../../../app/store';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { fetchFundamentalsCashFlow } from '../../../features/fundamentals/fetchFundamentals';
import { selectStatus } from '../../../features/fundamentals/cashFlowSlice';
import { styled } from '@mui/material/styles';
import { useTypedSelector } from "../../../app/store";

const CashFlowAnnualList = lazy( () => import('./CashFlowAnnualList')
  .then(({CashFlowAnnualList}) => ({ default: CashFlowAnnualList})),
);

const CashFlowQuarterlyList = lazy( () => import('./CashFlowQuarterlyList')
  .then(({CashFlowQuarterlyList}) => ({ default: CashFlowQuarterlyList})),
);

const Container = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  borderRadius: '5px',
  color: theme.palette.text.secondary,
  backgroundColor: '#111827',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  overflowY: 'auto'
}));

export const CashFlowStatement = () => {
  const [input, setInput] = useState<string>();
  const [select, setSelect] = useState<string>("annualReports");

  const status = useTypedSelector(selectStatus);
  const cashFlowData = useSelector((state: RootState) => state.cashFlow.data);

  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  const handleClick = (input: string | any) => {
    dispatch(fetchFundamentalsCashFlow(input));
  }

  return (
    <>
      <Grid item xs={12} >
          <Grid 
            container 
            alignItems='flex-end' 
            justifyContent='space-between' 
            sx={{ 
              borderBottom: '2px solid #272b35', 
              padding: '0 0 1rem', 
              color: '#fff'
            }}>
            <Grid 
              item 
              xl={7} 
              lg={6} 
              md={5} 
              sm={12} 
              xs={12} 
              py={1}>
              <div className='headerText'>
                <h1>Cashflow Data</h1>
                <p>The term cash flow refers to the net amount of cash and cash equivalents being transferred in and out of a company. Cash received represents inflows, while money spent represents outflows.</p>
              </div>
            </Grid>
            <Grid 
              item 
              xl={4} 
              lg={6} 
              md={7} 
              sm={12} 
              xs={12} 
              py={1}>
              <Grid
                container 
                className='searchInput' 
                justifyContent="flex-end"
                style={{ maxHeight: '56px' }}>
                <Grid item xs={3}>
                  <FormControl 
                  sx={{ 
                    height: '56px', 
                    width: '100%'
                  }}>          
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
                <Grid 
                  item 
                  xs={6} 
                  sx={{
                    height: '56px', 
                    width: '100%', 
                    padding: '0 1rem'
                  }} 
                  alignSelf='flex-end'>
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
                <Grid item xs={3} sx={{ height: '56px'}} py={0}>
                  <LoadingButton
                    variant="outlined"
                    onClick={() => handleClick(input)}
                    loading={status === 'loading' ? true : false}
                    loadingPosition="center"
                    style={{ width: '100%' }}
                  >
                    <SearchOutlinedIcon />
                  </LoadingButton>
                </Grid>
              </Grid> 
            </Grid>
          </Grid>
      </Grid>
      <Grid 
        item 
        className="cashFlowContainer" 
        sx={{height: '85%'}} 
        xs={12}>
        <Container>
          <Grid 
            container 
            xs={12} 
            sx={{ overflowY: "hidden"}}>
            <Grid 
              item xs={12} 
              alignSelf='flex-start' 
              className="titleContainer">
              <h2>Company Symbol: {cashFlowData.symbol}</h2>
            </Grid>
            <Grid 
              item 
              xs={12} 
              sx={{height: '100%'}}>
              {
                select === "annualReports" 
                ? (
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <CashFlowAnnualList />
                  </Suspense>
                )
                : (
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <CashFlowQuarterlyList />
                  </Suspense>
                )
              }
            </Grid>
          </Grid>
        </Container>
      </Grid>   
    </>
  )
}

