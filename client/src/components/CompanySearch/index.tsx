import React, { useState } from 'react';

import { Button } from '@mui/material'
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import StarIcon from '@mui/icons-material/Star';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '#fff',
  backgroundColor: 'transparent',
  border: '1px solid #42A5F5',
  gap: '1rem',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  overflowY: 'auto',
  "&:hover": {
    backgroundColor: '#12233C',
    cursor: 'pointer'
  }
}));

const CompanySearch: React.FC = () => {
  const [input, setInput] = useState<string | any>();
  const [data, setData] = useState<any>(
    {
      "bestMatches": [
          {
              "1. symbol": "MSFT",
              "2. name": "Microsoft Corporation",
              "3. type": "Equity",
              "4. region": "United States",
              "5. marketOpen": "09:30",
              "6. marketClose": "16:00",
              "7. timezone": "UTC-04",
              "8. currency": "USD",
              "9. matchScore": "0.6154"
          },
          {
              "1. symbol": "MSF.DEX",
              "2. name": "Microsoft Corporation",
              "3. type": "Equity",
              "4. region": "XETRA",
              "5. marketOpen": "08:00",
              "6. marketClose": "20:00",
              "7. timezone": "UTC+01",
              "8. currency": "EUR",
              "9. matchScore": "0.6000"
          },
          {
              "1. symbol": "MSF.FRK",
              "2. name": "Microsoft Corporation",
              "3. type": "Equity",
              "4. region": "Frankfurt",
              "5. marketOpen": "08:00",
              "6. marketClose": "20:00",
              "7. timezone": "UTC+01",
              "8. currency": "EUR",
              "9. matchScore": "0.6000"
          },
          {
              "1. symbol": "MSFT34.SAO",
              "2. name": "Microsoft Corporation",
              "3. type": "Equity",
              "4. region": "Brazil/Sao Paolo",
              "5. marketOpen": "10:00",
              "6. marketClose": "17:30",
              "7. timezone": "UTC-03",
              "8. currency": "BRL",
              "9. matchScore": "0.6000"
          }
      ]
  }
  );

  const handleClick = async (input: string | any) => {  
    let res = await axios(`/api/v1/search/endpoint/${input}`);
    setData(res.data);
  }

  return (
    <div className='searchContainer'>
        <div className='searchInput'>
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
          <Button 
            variant='outlined' 
            onClick={() => handleClick(input)}
            >
            <SearchOutlinedIcon />
          </Button>
        </div>
          
        <div className="searchResult">
          {!data ? <h1>No data</h1> : data["bestMatches"].filter((item: any, idx: any) => idx < 4).map((match: any, i: any) => {
            return(
              <Tooltip title="Copy symbol to clipboard">
                <Item key={i} onClick={() => navigator.clipboard.writeText(match["1. symbol"])}>            
                  <h3>
                    Symbol: {match["1. symbol"]} 
                    {i === 0 
                    ? <StarIcon style={{ float: 'right' }}/>
                    : null} 
                  </h3>
                  <h3>Name: {match["2. name"]}</h3>
                  <h3>Type: {match["3. type"]}</h3>
                  <h3>Region: {match["4. region"]}</h3>
                  <h3>Time Zone: {match["7. timezone"]}</h3>
                  <h3>Currency: {match["8. currency"]}</h3>
                </Item>
              </Tooltip>
            )          
          })}       
        </div>
    </div>
  )
}

export default CompanySearch;