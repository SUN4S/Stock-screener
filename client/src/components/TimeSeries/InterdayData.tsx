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

export const InterdayData = () => {
  const interdayData = useSelector((state: RootState) => state.interday.data);
  //const interdayError = useSelector((state: RootState) => state.interday.error);
  const [labels, setLabels] = useState<string[]>([]);
  const [interdayClose, setinterdayClose] = useState<number[]>([]);
  const [recentData, setRecentData] = useState<any>();

  useEffect(() => {
    setLabels([]);
    setinterdayClose([]);
    for(const [key, value] of Object.entries(interdayData['Time Series (5min)'])) {
      setLabels(labels => [key, ...labels]);
      setinterdayClose(interdayClose => [+value['4. close'], ...interdayClose]);
    }
    for(const [key, value] of Object.entries(interdayData['Time Series (5min)'])) {
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
  }, [interdayData])

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
          maxTicksLimit: 30
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
        data: interdayClose,
        borderColor: '#42A5F5',
        borderWidth: 1,
        backgroundColor: 'transparent',
        pointRadius: 1,
      },
    ],
  };

  return (
    <>
      <Grid container className="chartContainer" >
        <Grid item xs={12} className="titleContainer" alignSelf='flex-start'>
          <h2>Company Symbol: {interdayData['Meta Data']['2. Symbol'].toUpperCase()}</h2>
        </Grid>
        <Grid item xs={12} lg={3} className="mostRecent">
          {recentData}
        </Grid>
        <Grid item xs={12} lg={9} className="drawChart">
          <Line options={options} data={data} />
        </Grid>
      </Grid>   
    </>
  )
}