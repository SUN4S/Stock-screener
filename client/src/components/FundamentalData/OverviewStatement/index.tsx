import React, { useState, Suspense, lazy } from 'react'
import { RootState, useTypedSelector } from '../../../app/store';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { fetchFundamentalsOverview } from '../../../features/fundamentals/fetchFundamentals';
import { selectStatus } from '../../../features/fundamentals/overviewSlice';
import { styled } from '@mui/material/styles';

const OverviewList = lazy( () => import('./OverviewList')
  .then(({OverviewList}) => ({ default: OverviewList})),
);

const Container = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  borderRadius: '5px',
  color: theme.palette.text.secondary,
  backgroundColor: '#111827',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  overflowY: 'auto'
}));

export const OverviewStatement = () => {
  const [input, setInput] = useState<string>();

  const status = useTypedSelector(selectStatus);
  const overviewData = useSelector((state: RootState) => state.overview.data);

  const dispatch = useDispatch();

  const handleClick = (input: string | any) => {
    dispatch(fetchFundamentalsOverview(input));
  }

  return (
    <>
      <Grid item xs={12} >
          <Grid container justifyContent='space-between' sx={{ borderBottom: '2px solid #272b35', padding: '1rem 0', color: '#fff'}}>
            <Grid item xl={7} lg={6} md={5} sm={12} xs={12} py={1}>
              <div className='headerText'>
                <h1>Overview Data</h1>
                <p>Search for a Companys' Overview data</p>
              </div>
            </Grid>
            <Grid item xl={4} lg={6} md={7} sm={12} xs={12} py={1}>
              <Grid container className='searchInput' justifyContent="flex-end" spacing={2}>               
                <Grid item xl={8} lg={6} md={7} sm={9} xs={8} sx={{height: '100%', width: '100%'}} alignSelf='flex-end'>
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
                <Grid item xl={4} lg={4} md={3} sm={3} xs={4}>
                  <LoadingButton
                    variant="outlined"
                    onClick={() => handleClick(input)}
                    loading={status === 'loading' ? true : false}
                    loadingPosition="center"
                    style={{ height: '100%', width: '100%', minHeight: '56px' }}
                  >
                    <SearchOutlinedIcon />
                  </LoadingButton>
                </Grid>
              </Grid> 
            </Grid>
          </Grid>
      </Grid>
      <Grid item className="balanceContainer" sx={{height: '85%'}} xs={12}>
        <Container>
          <Grid container xs={12} sx={{ overflowY: "hidden"}}>
            <Grid item xs={12} alignSelf='flex-start' className="titleContainer">
              <h2>Company Symbol: {overviewData.Symbol}</h2>
            </Grid>
            <Grid item xs={12} sx={{height: '100%'}}>
              {
                <Suspense fallback={<h1>Loading...</h1>}>
                  <OverviewList />
                </Suspense>
              }
            </Grid>
          </Grid>
        </Container>
      </Grid>  
    </>
  )
}

