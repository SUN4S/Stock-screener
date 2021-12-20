import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import LoadingButton from '@mui/lab/LoadingButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useTypedSelector } from "../../app/store";
import { fetchCompanies } from '../../features/fetchCompanies';
import { selectStatus } from '../../features/searchSlice';
import { SearchList } from './SearchList';
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

const CompanySearch: React.FC = () => {
  const [input, setInput] = useState<string | any>();

  const dispatch = useDispatch();
  const status = useTypedSelector(selectStatus);

  const handleClick = async (input: string | any) => {  
    dispatch(fetchCompanies(input));
  }

  return (
    <>
      <div>
        <Header>
          <h1>Company Search</h1>
          <p>Seach for a company by entering a keyword or anything you can think of.</p>
        </Header>
        <hr style={{ margin: '1rem auto 2rem', width: '98%' }} />
      </div>
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
            <LoadingButton
              onClick={() => handleClick(input)}
              loading={status === 'loading' ? true : false}
              loadingPosition="center"
              variant="outlined"
            >
              <SearchOutlinedIcon />
            </LoadingButton>
          </div>
            
          <SearchList />
      </div>
    </>
  )
}

export default CompanySearch;