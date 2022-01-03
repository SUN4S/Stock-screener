import React, { useState, Suspense, lazy } from 'react';

import { Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { fetchCompanies } from '../../features/fetchCompanies';
import { selectStatus } from '../../features/searchSlice';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../app/store";

const SearchList = lazy( () => import('./SearchList')
  .then(({SearchList}) => ({ default: SearchList})),
);

const CompanySearch: React.FC = () => {
  const [input, setInput] = useState<string | any>();

  const dispatch = useDispatch();
  const status = useTypedSelector(selectStatus);
  
  const handleClick = async (input: string | any) => {  
    dispatch(fetchCompanies(input));
  }

  return (
    <>
      <Grid item xs={12} >
          <Grid 
            container 
            justifyContent='space-between' 
            sx={{ 
              borderBottom: '2px solid #272b35', 
              padding: '1rem 0', 
              color: '#fff'
            }}>
            <Grid xs={12}>
              <div className='headerText'>
                <h1>Company Search</h1>
                <p>Looking for some specific symbols or companies? The Company Search returns the best-matching symbols and market information based on keywords of your choice. </p>
              </div>
            </Grid>
          </Grid>
      </Grid>
      <Grid 
        item 
        className='searchContainer' 
        alignContent='space-between' 
        sx={{height: '85%'}} 
        xl={10} 
        lg={12} >
          <Grid 
            container 
            className='searchInput' 
            justifyContent="center" 
            sx={{ height: '56px'}}>               
            <Grid 
              item 
              xl={4} 
              lg={5} 
              md={6} 
              sm={8} 
              xs={8} 
              sx={{
                height: '56px', 
                padding: '0 1rem'
              }} 
              alignSelf='flex-start'>
              <div className="form__group field">
                <input
                  type="text"
                  className="form__field" 
                  placeholder="Search"
                  name="search" id='name' 
                  required 
                  autoComplete={'false'}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleClick(input)}
                  />
              </div>
            </Grid>
            <Grid 
              item 
              xl={2} 
              lg={2} 
              md={3} 
              sm={4} 
              xs={4} 
              style={{ height: '56px' }}>
              <LoadingButton
                variant="outlined"
                onClick={() => handleClick(input)}
                loading={status === 'loading' ? true : false}
                loadingPosition="center"
                style={{ width: '100%' }}
              >
                <SearchOutlinedIcon />
              </LoadingButton>
            </Grid>
          </Grid> 
        {
          <Suspense fallback={<h1>Loading...</h1>}>
            <SearchList />
          </Suspense>
        }
      </Grid>
    </>
  )
}

export default CompanySearch;