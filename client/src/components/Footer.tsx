import Paper from '@mui/material/Paper';
import React from 'react'
import { styled } from '@mui/material/styles';

const FooterStyle = styled(Paper)(({theme}) => ({
  height: '5vh',
  backgroundColor: '#111827',
  border: 'none',
  boxShadow: 'none',
  borderRadius: '0px',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0 3rem',
  'a': {
    paddingRight: '2rem',
  }
}));

export const Footer = () => {
  return (
    <FooterStyle>
      <a href="https://www.investopedia.com/"> Investopedia </a>
      <a href="https://finance.yahoo.com/"> Yahoo Finance </a>
    </FooterStyle>
  )
}