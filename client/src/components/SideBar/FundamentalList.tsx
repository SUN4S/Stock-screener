import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {ExpandLess, ExpandMore} from '@mui/icons-material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import { Link } from "react-router-dom";
import { RootState } from '../../app/store';
import { select } from '../../features/activeSlice';

export const FundamentalList: React.FC = () => {
  const [openFund, setOpenFund] = useState<boolean>(false);
  const selectedIndex = useSelector((state: RootState) => state.active.value);

  const dispatch = useDispatch();

  const handleClickFund = () => {
    setOpenFund(!openFund);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    dispatch(select(index));
  };

  return (
    <>
      {/* Fundamental data container collapsed */}
      <ListItemButton onClick={handleClickFund}>
        <ListItemIcon>
          <BarChartOutlinedIcon 
            style={{ 
              color: '#fff', 
              float: 'right',
              fontSize: '2rem' 
              }} 
            />
        </ListItemIcon>
        <ListItemText primary="Fundamental Data" />
        {openFund ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {/* Fundamental data container */}
      <Collapse in={openFund} timeout="auto" unmountOnExit>
        <List component="nav" disablePadding >
          <Link to="/fundamentaldata/incomestatement">
            <ListItemButton 
              sx={{ pl: 12 }} 
              component="a"
              href="#"
              selected={selectedIndex === 1}
              onClick={(event: any) => handleListItemClick(event, 1)}
              >
              <ListItemText primary="Income Statement" />
            </ListItemButton>
          </Link>
          <Link to="/fundamentaldata/balancesheet">
            <ListItemButton
              sx={{ pl: 12 }}
              component="a"
              href="#"           
              selected={selectedIndex === 2}
              onClick={(event: any) => handleListItemClick(event, 2)}
              >
              <ListItemText primary="Balance Sheet" />
            </ListItemButton>
          </Link>
          <Link to="/fundamentaldata/cashflow">
            <ListItemButton
              sx={{ pl: 12 }}
              component="a"
              href="#"             
              selected={selectedIndex === 3}
              onClick={(event: any) => handleListItemClick(event, 3)}
              >              
              <ListItemText primary="Cash Flow" />
            </ListItemButton>
          </Link>
          <Link to="/fundamentaldata/earnings">
            <ListItemButton sx={{ pl: 12 }}
              component="a"
              href="#"             
              selected={selectedIndex === 4}
              onClick={(event: any) => handleListItemClick(event, 4)}
              >
              <ListItemText primary="Earnings" />
            </ListItemButton>
          </Link>
          <Link to="/fundamentaldata/overview">
            <ListItemButton sx={{ pl: 12 }}
              component="a"
              href="#"             
              selected={selectedIndex === 5}
              onClick={(event: any) => handleListItemClick(event, 5)}
              >
              <ListItemText primary="Overview" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </>
  )
}