import React, { useMemo, useState, Suspense, lazy } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchDailyChartData, fetchInterdayChartData, fetchMonthlyChartData, fetchWeeklyChartData } from '../../features/charts/fetchCharts';

import FormControl from '@mui/material/FormControl';
import { Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { selectStatus } from '../../features/charts/dailySlice';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../app/store";

const InterdayData = lazy( () => import('./InterdayData')
  .then(({InterdayData}) => ({ default: InterdayData})),
);

const DailyData = lazy( () => import('./DailyData')
  .then(({DailyData}) => ({ default: DailyData})),
);

const WeeklyData = lazy( () => import('./WeeklyData')
  .then(({WeeklyData}) => ({ default: WeeklyData})),
);

const MonthlyData = lazy( () => import('./MonthlyData')
  .then(({MonthlyData}) => ({ default: MonthlyData})),
);

const Container = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  borderRadius: '5px',
  color: '#fff',
  backgroundColor: '#111827',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  overflowY: 'auto',
}));

export const TimeSeries = () => {
  const [input, setInput] = useState<string>();
  const [select, setSelect] = useState<string>("interday");
  const [currentElement, setCurrentElement] = useState<any>();

  const status = useTypedSelector(selectStatus);
  const dispatch = useDispatch();

  const handleClick = (input: string | any, select: string) => {
    console.log(select);
    switch (select) {
      case 'interday':
        dispatch(fetchInterdayChartData(input));
        break;

      case 'daily':
        dispatch(fetchDailyChartData(input));
        break;
      
      case 'weekly':
        dispatch(fetchWeeklyChartData(input));
        break;

      case 'monthly':
        dispatch(fetchMonthlyChartData(input));
        break;
    }
  }

  useMemo(() => {
    switch (select) {
      case 'interday':
        setCurrentElement( <InterdayData /> );    
        break;      
      case 'daily':
        setCurrentElement( <DailyData /> );      
        break;        
      case 'weekly':
        setCurrentElement( <WeeklyData /> );   
        break;       
      case 'monthly':
        setCurrentElement( <MonthlyData /> );
        break;
    }
  }, [select])

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  return (
    <>
      <Grid item xs={12} >
          <Grid container justifyContent='space-between' sx={{ borderBottom: '2px solid #272b35', padding: '1rem 0', color: '#fff'}}>
            <Grid item xl={7} lg={6} md={5} sm={12} xs={12} py={1}>
              <div className='headerText'>
                <h1>Time chart</h1>
                <p>Search for a Companys' chart data</p>
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
                    <MenuItem value={"interday"} >Interday</MenuItem>
                    <MenuItem value={"daily"} >Daily</MenuItem>
                    <MenuItem value={"weekly"} >Weekly</MenuItem>
                    <MenuItem value={"monthly"} >Monthly</MenuItem>
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
                      onKeyPress={(e) => e.key === "Enter" && handleClick(input, select)}
                      />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <LoadingButton
                    variant="outlined"
                    onClick={() => handleClick(input, select)}
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
      <Grid item sx={{height: '85%'}} xs={12}>
        <Container>
          <Grid container className="chartContainer" >
            {
              <Suspense fallback={<h1>Loading...</h1>}>
                {currentElement}
              </Suspense>
            } 
          </Grid>
        </Container>
      </Grid>
    </>
  )
}

