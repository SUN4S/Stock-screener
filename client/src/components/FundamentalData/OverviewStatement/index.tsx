import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import { selectStatus } from '../../../features/fundamentals/overviewSlice';
import { useTypedSelector, RootState } from '../../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFundamentalsOverview } from '../../../features/fundamentals/fetchFundamentals';
import { OverviewList } from './OverviewList';

const Header = styled(Paper)(({theme}) => ({
  height: '10vh',
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  color: '#fff',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  padding: '0 3rem',
  "p": {
    width: "50%",
    textAlign: 'start',
    marginTop: '0.5rem'
  }
}));

const Container = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  height: '78vh',
  width: "80vw",
  borderRadius: '5px',
  color: theme.palette.text.secondary,
  backgroundColor: '#111827',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '0 1rem',
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
      <div className="overviewHeader">
        <Header>
          <div className='headerText'>
            <h1>Overview Sheet Data</h1>
            <p>Search for a Companys' Overview sheet data</p>
          </div>
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
              loadingPosition="center"
              variant="outlined"
              onClick={() => handleClick(input)}
              loading={status === 'loading' ? true : false}
            >
              <SearchOutlinedIcon />
            </LoadingButton>
          </div>
        </Header>
        <hr style={{ margin: '1rem auto 0', width: '98%' }} />
      </div>
      <div className="overviewContainer">
        <Container>
          <div className="titleContainer">
            <h2>Company Symbol: {overviewData.Symbol}</h2>
          </div>
          <OverviewList />        
        </Container>
      </div>   
    </>
  )
}

