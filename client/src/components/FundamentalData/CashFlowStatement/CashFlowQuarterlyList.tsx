import { A11y, Navigation, Pagination } from 'swiper';
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';

import { CashFlowStateQuarterly } from '../../../models/fundamentalData';
import { RootState } from '../../../app/store';
import { TableListItem } from '../TableListItem';
import { useSelector } from 'react-redux';

export const CashFlowQuarterlyList = () => { 
  const cashFlowData = useSelector((state: RootState) => state.cashFlow.data);
  const cashFlowStatus = useSelector((state: RootState) => state.cashFlow.status);
  const cashFlowError = useSelector((state: RootState) => state.cashFlow.error);
  const [currency, setCurrency] = useState<string | undefined>('USD');

  useEffect(() => {
    setCurrency(cashFlowData.annualReports[0].reportedCurrency);
  }, [cashFlowData])

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
        (cashFlowStatus === "loading")
        ? <SwiperSlide>
            <div className="centeringDiv"><h1>Loading...</h1></div>
          </SwiperSlide>
        : (cashFlowError === null) 
          ? cashFlowData.quarterlyReports.map((item: CashFlowStateQuarterly) => {
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
              <div className="centeringDiv"><h1>{cashFlowError}</h1></div>
            </SwiperSlide>
          )
      }
      </Swiper>
    </>
  )
}