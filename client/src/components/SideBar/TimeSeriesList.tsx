import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {ExpandLess, ExpandMore} from '@mui/icons-material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import { RootState } from '../../app/store';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import { select } from '../../features/activeSlice';

export const TimeSeriesList: React.FC = () => {
  const [openTime, setOpenTime] = useState<boolean>(false);
  const selectedIndex = useSelector((state: RootState) => state.active.value);

  const dispatch = useDispatch();
  
  const handleClickTime = () => {
    setOpenTime(!openTime);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    dispatch(select(index));
  };

  return (
    <>
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
          <Link to="/timeseries/intraday">
            <ListItemButton 
              sx={{ pl: 12 }} 
              component="a"
              href="/"
              selected={selectedIndex === 0}
              onClick={(event: any) => handleListItemClick(event, 0)}
              >
              <ListItemText primary="Intraday" />
            </ListItemButton>
          </Link>
          <Link to="/timeseries/daily">
            <ListItemButton
              sx={{ pl: 12 }}
              component="a"
              href="#"           
              selected={selectedIndex === 1}
              onClick={(event: any) => handleListItemClick(event, 1)}
              >
              <ListItemText primary="Daily" />
            </ListItemButton>
          </Link>
          <Link to="/timeseries/weekly">
            <ListItemButton
              sx={{ pl: 12 }}
              component="a"
              href="#"             
              selected={selectedIndex === 2}
              onClick={(event: any) => handleListItemClick(event, 2)}
              >              
              <ListItemText primary="Weekly" />
            </ListItemButton>
          </Link>
          <Link to="/timeseries/monthly">
            <ListItemButton sx={{ pl: 12 }}
              component="a"
              href="#"             
              selected={selectedIndex === 3}
              onClick={(event: any) => handleListItemClick(event, 3)}
              >
              <ListItemText primary="Monthly" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </>
  )
}