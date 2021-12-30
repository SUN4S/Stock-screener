import React from 'react'

interface BalanceListProps {
  type: string,
  value: string,
  currency?: string | undefined
}

export const TableListItem = ({type, value, currency}: BalanceListProps) => {  

  const checkDataType = (input: string) => {
    if(!isNaN(Date.parse(input)) || value === currency || !currency || isNaN(+input)) {
      return input;
    } else {
      return (
        Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(+value)
      )
    }
  }
  
  return (
    <h3>
      <span className='dataName'>{type.replace(/([A-Z])/g, " $1").replace(/\b\w/g, c => c.toUpperCase())}</span>
      <span className='dataValue'>{checkDataType(value)}</span>
    </h3>
  )
}

