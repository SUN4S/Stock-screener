import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import React from 'react'
import { RootState } from '../../app/store';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { select } from '../../features/activeSlice';

export const CompanySearchList: React.FC = () => {
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
      <Link to="/">
        <ListItemButton
          component="a"
          href="#"             
          selected={selectedIndex === 6}
          onClick={(event: any) => handleListItemClick(event, 6)}
          >
          <ListItemIcon>
            <SearchOutlinedIcon style={{ color: '#fff', float: 'right', fontSize: '2rem' }} />
          </ListItemIcon>
          <ListItemText primary="Company Search" />
        </ListItemButton>
      </Link>
    </>
  )
}