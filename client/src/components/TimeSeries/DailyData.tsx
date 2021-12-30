import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React, {useEffect, useState} from 'react'

import { Grid } from '@mui/material';
import { Line } from 'react-chartjs-2'
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

export const DailyData = () => {
  const dailyData = useSelector((state: RootState) => state.daily.data);
  const dailyStatus = useSelector((state: RootState) => state.daily.status);
  const dailyError = useSelector((state: RootState) => state.daily.error);
  const [labels, setLabels] = useState<string[]>([]);
  const [dailyHigh, setDailyHigh] = useState<number[]>([]);
  const [recentData, setRecentData] = useState<any>();
  console.log(dailyStatus);

  useEffect(() => {
    setLabels([]);
    setDailyHigh([]);
    for(const [key, value] of Object.entries(dailyData['Time Series (Daily)'])) {
      setLabels(labels => [key, ...labels]);
      setDailyHigh(dailyHigh => [+value['4. close'], ...dailyHigh]);
    }
    for(const [key, value] of Object.entries(dailyData['Time Series (Daily)'])) {
      setRecentData (
        <>
          <h1>Most Recent:</h1>
          <h3>Open: {value['1. open']}</h3>
          <h3>High: {value['2. high']}</h3>
          <h3>Low: {value['3. low']}</h3>
          <h3>Close: {value['4. close']}</h3>
          <h3>Volume: {value['5. volume']}</h3>
        </>
      )
    }
  }, [dailyData])

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Interday Data',
        color: '#fff',
      },
    },
    scales: {
      xAxis: {
        ticks: {
          fontColor: '#fff',
          maxTicksLimit: 40
        },
        grid: {
          borderColor: '#9b9b9b'
        }
      },
      yAxis: {
        grid: {
          borderColor: '#9b9b9b'
        }
      }
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Closed at",
        data: dailyHigh,
        borderColor: '#42A5F5',
        borderWidth: 1,
        backgroundColor: 'transparent',
        pointRadius: 2,
      },
    ],
  };

  return (
    <>
      <Grid item xs={12} className="titleContainer" alignSelf='flex-start'>
        <h2>Company Symbol: {
            (dailyError === null) 
              ? dailyData['Meta Data']['2. Symbol'].toUpperCase() 
              : '???'
            }
        </h2>
      </Grid>
      {
        (dailyStatus === "loading" )
        ? (<div className="centeringDiv"><h1>Loading...</h1></div>)
        : (dailyError === null) 
          ? <>
              <Grid item xs={12} lg={3} className="mostRecent">
                {recentData}
              </Grid>
              <Grid item xs={12} lg={9} className="drawChart">
                <Line options={options} data={data} />
              </Grid>
            </>
          : (<div className="centeringDiv"><h1>{dailyError}</h1></div>)
      }
    </>
  )
}