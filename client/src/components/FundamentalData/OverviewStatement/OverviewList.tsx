import { A11y, Navigation, Pagination } from 'swiper';
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';

import { RootState } from '../../../app/store';
import { TableListItem } from '../TableListItem';
import { useSelector } from 'react-redux';

export const OverviewList = () => { 
  const overviewData = useSelector((state: RootState) => state.overview.data);
  const overviewStatus = useSelector((state: RootState) => state.overview.status);
  const overviewError = useSelector((state: RootState) => state.overview.error);
  const [currency, setCurrency] = useState<string | undefined>('USD');

  useEffect(() => {
    setCurrency(overviewData.Currency);
  }, [overviewData])

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
        (overviewStatus === "loading")
        ? <SwiperSlide>
            <div className="centeringDiv"><h1>Loading...</h1></div>
          </SwiperSlide>
        : (overviewError === null) 
          ? 
            <>
              <SwiperSlide>
                <div className="left">
                  {                   
                    Object
                    .entries(overviewData)
                    .splice(0, Object.keys(overviewData).length/2)
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
                      .entries(overviewData)
                      .splice(Object.keys(overviewData).length/2, Object.keys(overviewData).length)
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
            </>
          : (
            <SwiperSlide>
              <div className="centeringDiv"><h1>{overviewError}</h1></div>
            </SwiperSlide>
          )
      }
      </Swiper>
    </>
  )
}