import { A11y, Navigation, Pagination } from 'swiper';
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';

import { IncomeStatementAnnual } from '../../../models/fundamentalData';
import { RootState } from '../../../app/store';
import { TableListItem } from '../TableListItem';
import { useSelector } from 'react-redux';

export const IncomeAnnualList = () => { 
  const incomeData = useSelector((state: RootState) => state.income.data);
  const incomeStatus = useSelector((state: RootState) => state.income.status);
  const incomeError = useSelector((state: RootState) => state.income.error);
  const [currency, setCurrency] = useState<string | undefined>('USD');

  useEffect(() => {
    setCurrency(incomeData.annualReports[0].reportedCurrency);
  }, [incomeData])

  return (
    <>
    <Swiper 
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      noSwiping={false}
      >
      {
        (incomeStatus === "loading")
        ? <SwiperSlide>
            <div className="centeringDiv"><h1>Loading...</h1></div>
          </SwiperSlide>
        : (incomeError === null) 
          ? incomeData.annualReports.map((item: IncomeStatementAnnual) => {
            return(
              <SwiperSlide>
                <div className="left">
                  {                   
                    Object
                    .entries(item)
                    .splice(0, Object.keys(item).length/2)
                    .map(
                      ([key, value]) => {
                        return(
                          <TableListItem type={key} value={value} currency={currency}/>
                        )
                      }                   
                    )                 
                  }
                </div>
                <hr />
                <div className="right">
                  {                   
                    Object
                      .entries(item)
                      .splice(Object.keys(item).length/2, Object.keys(item).length)
                      .map(
                      ([key, value]) => {
                        return(
                          <TableListItem type={key} value={value} currency={currency}/>
                        )
                      }                   
                    )                 
                  }
                </div>
              </SwiperSlide>
            )  
          })
          : (
            <SwiperSlide>
              <div className="centeringDiv"><h1>{incomeError}</h1></div>
            </SwiperSlide>
          )
      }
      </Swiper>
    </>
  )
}