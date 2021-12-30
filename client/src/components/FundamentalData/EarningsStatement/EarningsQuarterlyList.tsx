import { A11y, Navigation, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';

import { EarningsStateQuarterly } from '../../../models/fundamentalData';
import React from 'react'
import { RootState } from '../../../app/store';
import { TableListItem } from '../TableListItem';
import { useSelector } from 'react-redux';

export const EarningsQuarterlyList = () => { 
  const earningsData = useSelector((state: RootState) => state.earnings.data);
  const earningsStatus = useSelector((state: RootState) => state.earnings.status);
  const earningsError = useSelector((state: RootState) => state.earnings.error);

  return (
    <>
    <Swiper 
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      noSwiping={false}
      breakpoints={{
        // when window width is >= 640px
        900: {
          slidesPerView: 3,
        },
        // when window width is >= 768px
        600: {
          slidesPerView: 2,
        },
      }}
      >
      {
      (earningsStatus === "loading")
      ? <SwiperSlide>
          <div className="centeringDiv"><h1>Loading...</h1></div>
        </SwiperSlide>
      : (earningsError === null) 
        ? earningsData.quarterlyEarnings.map((item: EarningsStateQuarterly) => {
            return(
              <SwiperSlide>
                <div className="content">
                  {                   
                    Object
                    .entries(item)
                    .map(
                      ([key, value]) => {
                        return(
                          <TableListItem type={key} value={value} />
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
            <div className="centeringDiv"><h1>{earningsError}</h1></div>
          </SwiperSlide>
        )
      }
      </Swiper>
    </>
  )
}