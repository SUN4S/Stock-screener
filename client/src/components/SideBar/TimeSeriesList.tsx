import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import React from 'react'
import { RootState } from '../../app/store';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import { select } from '../../features/activeSlice';

export const TimeSeriesList: React.FC = () => {
  const selectedIndex = useSelector((state: RootState) => state.active.value);

  const dispatch = useDispatch();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    dispatch(select(index));
  };

  return (
    <>
      {/* Time Series container collapsed button */}
      <Link to="/timeseries">
        <ListItemButton
          component="a"
          href="#"             
          selected={selectedIndex === 0}
          onClick={(event: any) => handleListItemClick(event, 0)}
          >
          <ListItemIcon>
            <SsidChartOutlinedIcon style={{ color: '#fff', float: 'right', fontSize: '2rem' }} />
          </ListItemIcon>
          <ListItemText primary="Chart" />
        </ListItemButton>
      </Link>
    </>
  )
}