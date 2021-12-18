import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
}));

export const Footer = () => {
  return (
    <FooterStyle>
      <a href="google.com"> Some Link </a>
    </FooterStyle>
  )
}