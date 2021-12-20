import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';
import { Navigation, Pagination, A11y } from 'swiper';
import { EarningsStateQuarterly } from '../../../models/fundamentalData';

import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';

export const EarningsQuarterlyList = () => { 
  const earningsData = useSelector((state: RootState) => state.earnings.data);
  const earningsError = useSelector((state: RootState) => state.earnings.error);

  return (
    <>
    <Swiper 
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      noSwiping={false}
      >
      {
        !earningsError === null
        ? <SwiperSlide>
            <h1>{earningsError}</h1>
          </SwiperSlide>
        : earningsData.quarterlyEarnings.map((item: EarningsStateQuarterly) => {
          return(
            <SwiperSlide>
              <div className="content">
                <h3>
                  <span className='dataName'>Fiscal Date End:</span>
                  <span className='dataValue'>{item.fiscalDateEnding}</span>
                </h3>
                <h3>
                  <span className='dataName'>Reported Date:</span>
                  <span className='dataValue'>{item.reportedDate}</span>
                </h3>
                <h3>
                  <span className='dataName'>Reported EPS:</span>
                  <span className='dataValue'>{item.reportedEPS}</span>
                </h3>
                <h3>
                  <span className='dataName'>Estimated EPS:</span>
                  <span className='dataValue'>{item.estimatedEPS}</span>
                </h3>
                <h3>
                  <span className='dataName'>Surprise:</span>
                  <span className='dataValue'>{item.surprise}</span>
                </h3>
                <h3>
                  <span className='dataName'>Surprise Percentage:</span>
                  <span className='dataValue'>{item.surprisePercentage}</span>
                </h3>
              </div>
            </SwiperSlide>
          )         
        })
      }
      </Swiper>
    </>
  )
}