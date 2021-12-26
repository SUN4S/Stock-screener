import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInterdayChartData, fetchDailyChartData, fetchWeeklyChartData, fetchMonthlyChartData } from '../../features/charts/fetchCharts';
import { InterdayData } from './InterdayData';
import { DailyData } from './DailyData';
import { WeeklyData } from './WeeklyData';
import { MonthlyData } from './MonthlyData';

const Header = styled(Paper)(({theme}) => ({
  height: '10vh',
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  color: '#fff',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  padding: '0 3rem',
  "p": {
    width: "50%",
    textAlign: 'start',
    marginTop: '0.5rem'
  }
}));

const Container = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  boxShadow: 'none',
  height: '94%',
  width: "96%",
  color: theme.palette.text.secondary,
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '0 1rem',
  overflowY: 'auto'
}));

export const TimeSeries = () => {
  const [input, setInput] = useState<string>();
  const [select, setSelect] = useState<string>("interday");
  const [currentElement, setCurrentElement] = useState<any>();

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

  useEffect(() => {
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
      <div className="cashFlowHeader">
        <Header>
          <div className='headerText'>
            <h1>time Charts</h1>
            <p>Search for a most common value Chart</p>
          </div>
          <div className='searchInput'>
          <FormControl sx={{ m:1, minWidth: 120}}>          
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
            <div className="form__group field">
              <input
                type="input"
                className="form__field" 
                placeholder="Hello there"
                name="search" id='name' 
                required 
                autoComplete={'false'}
                onChange={(e) => setInput(e.target.value)}
                />
              <label htmlFor="search" className="form__label">Search</label>
            </div>
            <LoadingButton
              loadingPosition="center"
              variant="outlined"
              onClick={() => handleClick(input, select)}
              //loading={status === 'loading' ? true : false}
            >
              <SearchOutlinedIcon />
            </LoadingButton>
          </div>
        </Header>
        <hr style={{ margin: '1rem auto 0', width: '98%' }} />
      </div>
      <div className="chartContainer">
        <Container>
          <div className="titleContainer">
            <h2>Company Symbol: symbol</h2>
          </div>
          <div className='top'>
            {currentElement}
          </div>
          <div className="bottom"></div>
        </Container>
      </div>   
    </>
  )
}

