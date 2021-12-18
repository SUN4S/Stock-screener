import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import AwesomeSlider from 'react-awesome-slider';

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

export const IncomeStatement = () => {
  const [input, setInput] = useState<String>();
  const [select, setSelect] = useState<string>("annualReports");
  
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  return (
    <>
      <div>
        <Header>
          <div className='headerText'>
            <h1>Income Statement Data</h1>
            <p>Seach for a company by entering a keyword or anything you can think of.</p>
          </div>
          <div className='searchInput'>
          <FormControl sx={{ m:1, minWidth: 120}}>          
            <Select
              defaultValue={"annualReports"}
              value={select}
              sx={{ color: "primary.main" }}
              onChange={handleChange}
            >
              <MenuItem value={"annualReports"} selected>Anual</MenuItem>
              <MenuItem value={"quarterlyReports"}>Quarterly</MenuItem>
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
            >
              <SearchOutlinedIcon />
            </LoadingButton>
          </div>
        </Header>
        <hr style={{ margin: '1rem auto 0', width: '98%' }} />
      </div>
      <div className="incomeContainer">
        <Container>
          <AwesomeSlider infinite={false} bullets={false} selected={3} className='sliderContainer'>
            <div className='item'><h1>First</h1></div>
            <div className='item'><h1>Second</h1></div>
            <div className='item'><h1>Third</h1></div>
            <div className='item'><h1>Fourth</h1></div>
          </AwesomeSlider>
        </Container>
      </div>   
    </>
  )
}

