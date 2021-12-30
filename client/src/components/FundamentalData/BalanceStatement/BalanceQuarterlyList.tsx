import { A11y, Navigation, Pagination } from 'swiper';
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';

import { BalanceStateQuarterly } from '../../../models/fundamentalData';
import { RootState } from '../../../app/store';
import { TableListItem } from '../TableListItem';
import { useSelector } from 'react-redux';

export const BalanceQuarterlyList = () => { 
  const balanceData = useSelector((state: RootState) => state.balance.data);
  const balanceStatus = useSelector((state: RootState) => state.balance.status);
  const balanceError = useSelector((state: RootState) => state.balance.error);
  const [currency, setCurrency] = useState<string | undefined>('USD');

  useEffect(() => {
    setCurrency(balanceData.annualReports[0].reportedCurrency);
  }, [balanceData])

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
        (balanceStatus === "loading")
        ? <SwiperSlide>
            <div className="centeringDiv"><h1>Loading...</h1></div>
          </SwiperSlide>
        : (balanceError === null) 
          ? balanceData.quarterlyReports.map((item: BalanceStateQuarterly) => {
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
              <div className="centeringDiv"><h1>{balanceError}</h1></div>
            </SwiperSlide>
          )
      }
      </Swiper>
    </>
  )
}