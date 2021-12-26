import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';


export const DailyData = () => {
  const dailyData = useSelector((state: RootState) => state.daily.data);

  return (
    <div className='top'>
      <p>
        {JSON.stringify(dailyData)}
      </p>
    </div>
  )
}