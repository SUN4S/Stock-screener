import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';


export const MonthlyData = () => {
  const monthlyData = useSelector((state: RootState) => state.monthly.data);

  return (
    <div className='top'>
      <p>
        {JSON.stringify(monthlyData)}
      </p>
    </div>
  )
}