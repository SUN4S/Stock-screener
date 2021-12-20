import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useTypedSelector } from "../../../app/store";
import { selectStatus } from '../../../features/fundamentals/cashFlowSlice';
import { RootState } from '../../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFundamentalsCashFlow } from '../../../features/fundamentals/fetchFundamentals';
import { CashFlowQuarterlyList } from './CashFlowQuarterlyList';
import { CashFlowAnnualList } from './CashFlowAnnualList';

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
  height: '78vh',
  width: "80vw",
  borderRadius: '5px',
  color: theme.palette.text.secondary,
  backgroundColor: '#111827',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '0 1rem',
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
      <div>
        <Header>
          <div className='headerText'>
            <h1>Cashflow Sheet Data</h1>
            <p>Search for a Companys' Cashflow sheet data</p>
          </div>
          <div className='searchInput'>
          <FormControl sx={{ m:1, minWidth: 120}}>          
            <Select
              value={select}
              sx={{ color: "primary.main" }}
              onChange={handleChange}
            >
              <MenuItem value={"annualReports"} >Annual</MenuItem>
              <MenuItem value={"quarterlyReports"} >Quarterly</MenuItem>
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
              onClick={() => handleClick(input)}
              loading={status === 'loading' ? true : false}
            >
              <SearchOutlinedIcon />
            </LoadingButton>
          </div>
        </Header>
        <hr style={{ margin: '1rem auto 0', width: '98%' }} />
      </div>
      <div className="cashFlowContainer">
        <Container>
          <div className="titleContainer">
            <h2>Company Symbol: {cashFlowData.symbol}</h2>
          </div>
          {
            select === "annualReports" ? <CashFlowAnnualList /> : <CashFlowQuarterlyList />
          }
            
        </Container>
      </div>   
    </>
  )
}

