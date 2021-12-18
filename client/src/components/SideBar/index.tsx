import { CompanySearchList } from './CompanySearchList';
import { FundamentalList } from './FundamentalList'
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import { TimeSeriesList } from './TimeSeriesList';
import { styled } from '@mui/material/styles';

const Side = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  height: '100vh',
  borderRadius: '0px',
  color: '#fff',
  backgroundColor: '#111827',
}));

const SideBar: React.FC = () => {

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
      {/* Time Series container collapsed */}
      <TimeSeriesList />
      {/* Fundamental data container */}
      <FundamentalList />
      {/* Company Search container */}
      <CompanySearchList />
    </Side>
  )
}

export default SideBar;