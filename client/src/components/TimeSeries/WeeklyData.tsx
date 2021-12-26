import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';


export const WeeklyData = () => {
  const weeklyData = useSelector((state: RootState) => state.weekly.data);

  return (
    <div className='top'>
      <p>
        {JSON.stringify(weeklyData)}
      </p>
    </div>
  )
}