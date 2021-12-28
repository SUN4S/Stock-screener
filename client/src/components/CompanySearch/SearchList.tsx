import Paper from '@mui/material/Paper';
import React from 'react'
import { RootState } from '../../app/store';
import StarIcon from '@mui/icons-material/Star';
import { Tooltip } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '#fff',
  backgroundColor: 'transparent',
  border: '1px solid #42A5F5',
  gap: '1rem',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  overflowY: 'auto',
  "&:hover": {
    backgroundColor: '#12233C',
    cursor: 'pointer'
  }
}));

export const SearchList: React.FC = () => {
  const search = useSelector((state: RootState) => state.search.data);

  return (
    <div className="searchResult">
      {!search
        ? <h1>No data</h1> 
        : search.bestMatches.filter((item: any, idx: any) => idx < 6).map((match: any, i: any) => {
        return(
          <Tooltip title="Copy symbol to clipboard" arrow>
            <Item key={i} onClick={() => navigator.clipboard.writeText(match["1. symbol"])}>            
              <h2>
                Symbol: {match["1. symbol"]} 
                {i === 0 
                  ? <StarIcon style={{ float: 'right' }}/>
                  : null} 
              </h2>
              <h2>Name: {match["2. name"]}</h2>
              <h2>Type: {match["3. type"]}</h2>
              <h2>Region: {match["4. region"]}</h2>
              <h2>Time Zone: {match["7. timezone"]}</h2>
              <h2>Currency: {match["8. currency"]}</h2>
            </Item>
          </Tooltip>
        )
      })}
    </div>
  )
}

