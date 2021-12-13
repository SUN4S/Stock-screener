import { Collapse, Grid, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {ExpandLess, ExpandMore} from '@mui/icons-material';
import React, { useState } from 'react'

import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import { styled } from '@mui/material/styles';

const Side = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  height: '100vh',
  borderRadius: '0px',
  color: '#fff',
  backgroundColor: '#111827',
  //position: 'fixed'
}));

export const SideBar = () => {
  const [openTime, setOpenTime] = useState<boolean>(false);
  const [openFund, setOpenFund] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<Number>(9);

  const handleClickTime = () => {
    setOpenTime(!openTime);
  };

  const handleClickFund = () => {
    setOpenFund(!openFund);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Side>
      {/* Setup for Logo sidebar container */}
      <Grid 
      container 
      direction="row" 
      justifyContent="center" 
      alignItems="center"
      p={2}
      >   
        <StackedLineChartIcon sx={{ fontSize: 36 }} />
        <h1 className='logo'>Stock Screener</h1>
      </Grid>
      <hr />
      {/* Time Series container collapsed button */}
      <ListItemButton onClick={handleClickTime}>
        <ListItemIcon>
          <SsidChartOutlinedIcon style={{ color: '#fff', float: 'right', fontSize: '2rem' }} />
        </ListItemIcon>
        <ListItemText primary="Time Series" />
        {openTime ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {/* Time Series container open values */}
      <Collapse in={openTime} timeout="auto" unmountOnExit>
        <List component="nav" disablePadding >
          <ListItemButton 
            sx={{ pl: 12 }} 
            component="a"
            href="#"
            selected={selectedIndex === 0}
            onClick={(event: any) => handleListItemClick(event, 0)}
            >
            <ListItemText primary="Intraday" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 12 }}
            component="a"
            href="#"           
            selected={selectedIndex === 1}
            onClick={(event: any) => handleListItemClick(event, 1)}
            >
            <ListItemText primary="Daily" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 12 }}
            component="a"
            href="#"             
            selected={selectedIndex === 2}
            onClick={(event: any) => handleListItemClick(event, 2)}
            >              
            <ListItemText primary="Weekly" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}
            component="a"
            href="#"             
            selected={selectedIndex === 3}
            onClick={(event: any) => handleListItemClick(event, 3)}
            >
            <ListItemText primary="Monthly" />
          </ListItemButton>
        </List>
      </Collapse>
      {/* Fundamental data container collapsed */}
      <ListItemButton onClick={handleClickFund}>
        <ListItemIcon>
          <BarChartOutlinedIcon style={{ color: '#fff', float: 'right', fontSize: '2rem' }} />
        </ListItemIcon>
        <ListItemText primary="Fundamental Data" />
        {openFund ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {/* Fundamental data container */}
      <Collapse in={openFund} timeout="auto" unmountOnExit>
        <List component="nav" disablePadding >
          <ListItemButton 
            sx={{ pl: 12 }} 
            component="a"
            href="#"
            selected={selectedIndex === 4}
            onClick={(event: any) => handleListItemClick(event, 4)}
            >
            <ListItemText primary="Income Statement" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 12 }}
            component="a"
            href="#"           
            selected={selectedIndex === 5}
            onClick={(event: any) => handleListItemClick(event, 5)}
            >
            <ListItemText primary="Balance Sheet" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 12 }}
            component="a"
            href="#"             
            selected={selectedIndex === 6}
            onClick={(event: any) => handleListItemClick(event, 6)}
            >              
            <ListItemText primary="Cash Flow" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}
            component="a"
            href="#"             
            selected={selectedIndex === 7}
            onClick={(event: any) => handleListItemClick(event, 7)}
            >
            <ListItemText primary="Earnings" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}
            component="a"
            href="#"             
            selected={selectedIndex === 8}
            onClick={(event: any) => handleListItemClick(event, 8)}
            >
            <ListItemText primary="Overview" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton
        component="a"
        href="#"             
        selected={selectedIndex === 9}
        onClick={(event: any) => handleListItemClick(event, 9)}
        >
        <ListItemIcon>
          <SearchOutlinedIcon style={{ color: '#fff', float: 'right', fontSize: '2rem' }} />
        </ListItemIcon>
        <ListItemText primary="Company Search" />
      </ListItemButton>
    </Side>
  )
}