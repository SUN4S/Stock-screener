import React from 'react'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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

export const CashFlow = () => {
  return (
    <>
      <div>
        <Header>
          <h1>Cash Flow Data</h1>
          <p>Seach for a company by entering a keyword or anything you can think of.</p>
        </Header>
        <hr style={{ margin: '1rem auto 2rem', width: '98%' }} />
      </div>
      <div>
        <h1>Cash Flow Sheet</h1>
        <p>Fuck off balance Sheet</p>
      </div>
    </> 
  )
}