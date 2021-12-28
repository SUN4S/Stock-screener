import { A11y, Navigation, Pagination } from 'swiper';
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';

import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';

export const OverviewList = () => { 
  const overviewData = useSelector((state: RootState) => state.overview.data);
  const overviewError = useSelector((state: RootState) => state.overview.error);
  const [currency, setCurrency] = useState<string | undefined>('USD');

  useEffect(() => {
    setCurrency(overviewData.Currency);
  }, [overviewData])

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });

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
        !overviewError === null
        ? <SwiperSlide>
            <h1>{overviewError}</h1>
          </SwiperSlide>
        : 
          <SwiperSlide>
            <div className="left">
              <h3>
                <span className='dataName'>Asset Type:</span>
                <span className='dataValue'>{overviewData.AssetType}</span>
              </h3>
              <h3>
                <span className='dataName'>Name:</span>
                <span className='dataValue'>{overviewData.Name}</span>
              </h3>
              <h3>
                <span className='dataName'>Description:</span>
                <span className='dataValue'><span>{overviewData.Description}</span></span>
              </h3>
              <h3>
                <span className='dataName'>CIK:</span>
                <span className='dataValue'>{overviewData.CIK}</span>
              </h3>
              <h3>
                <span className='dataName'>Exchange:</span>
                <span className='dataValue'>{overviewData.Exchange}</span>
              </h3>
              <h3>
                <span className='dataName'>Currency:</span>
                <span className='dataValue'>{overviewData.Currency}</span>
              </h3>
              <h3>
                <span className='dataName'>Country:</span>
                <span className='dataValue'>{overviewData.Country}</span>
              </h3>
              <h3>
                <span className='dataName'>Sector:</span>
                <span className='dataValue'>{overviewData.Sector}</span>
              </h3>
              <h3>
                <span className='dataName'>Industry:</span>
                <span className='dataValue'>{overviewData.Industry}</span>
              </h3>
              <h3>
                <span className='dataName'>Address:</span>
                <span className='dataValue'>{overviewData.Address}</span>
              </h3>
              <h3>
                <span className='dataName'>Fiscal Year End:</span>
                <span className='dataValue'>{overviewData.FiscalYearEnd}</span>
              </h3>
              <h3>
                <span className='dataName'>Latest Quarter:</span>
                <span className='dataValue'>{overviewData.LatestQuarter}</span>
              </h3>
              <h3>
                <span className='dataName'>MarketCapitalization:</span>
                <span className='dataValue'>{formatter.format(+overviewData.MarketCapitalization)}</span>
              </h3>
              <h3>
                <span className='dataName'>EBITDA:</span>
                <span className='dataValue'>{formatter.format(+overviewData.EBITDA)}</span>
              </h3>
              <h3>
                <span className='dataName'>PE Ratio:</span>
                <span className='dataValue'>{+overviewData.PERatio}</span>
              </h3>
              <h3>
                <span className='dataName'>PEG Ratio:</span>
                <span className='dataValue'>{+overviewData.PEGRatio}</span>
              </h3>
              <h3>
                <span className='dataName'>Book Value:</span>
                <span className='dataValue'>{+overviewData.BookValue}</span>
              </h3>
              <h3>
                <span className='dataName'>Dividend Per Share:</span>
                <span className='dataValue'>{+overviewData.DividendPerShare}</span>
              </h3>
              <h3>
                <span className='dataName'>Dividend Yield:</span>
                <span className='dataValue'>{+overviewData.DividendYield}</span>
              </h3>
              <h3>
                <span className='dataName'>EPS:</span>
                <span className='dataValue'>{+overviewData.EPS}</span>
              </h3>
              <h3>
                <span className='dataName'>Revenue Per Share TTM:</span>
                <span className='dataValue'>{+overviewData.RevenuePerShareTTM}</span>
              </h3>
              <h3>
                <span className='dataName'>Profit Margin:</span>
                <span className='dataValue'>{+overviewData.ProfitMargin}</span>
              </h3>
              <h3>
                <span className='dataName'>Operating Margin TTM:</span>
                <span className='dataValue'>{+overviewData.OperatingMarginTTM}</span>
              </h3>
            </div>
            <hr />
            <div className="right">
              <h3>
                <span className='dataName'>Return On Assets TTM:</span>
                <span className='dataValue'>{+overviewData.ReturnOnAssetsTTM}</span>
              </h3>
              <h3>
                <span className='dataName'>Return On Equity TTM:</span>
                <span className='dataValue'>{+overviewData.ReturnOnEquityTTM}</span>
              </h3>
              <h3>
                <span className='dataName'>Revenue TTM:</span>
                <span className='dataValue'>{formatter.format(+overviewData.RevenueTTM)}</span>
              </h3>
              <h3>
                <span className='dataName'>Gross Profit TTM:</span>
                <span className='dataValue'>{formatter.format(+overviewData.GrossProfitTTM)}</span>
              </h3>
              <h3>
                <span className='dataName'>Diluted EPSTTM:</span>
                <span className='dataValue'>{+overviewData.DilutedEPSTTM}</span>
              </h3>
              <h3>
                <span className='dataName'>Quarterly Earnings Growth YOY:</span>
                <span className='dataValue'>{+overviewData.QuarterlyEarningsGrowthYOY}</span>
              </h3>
              <h3>
                <span className='dataName'>Quarterly Revenue Growth YOY:</span>
                <span className='dataValue'>{+overviewData.QuarterlyRevenueGrowthYOY}</span>
              </h3>
              <h3>
                <span className='dataName'>Analyst Target Price:</span>
                <span className='dataValue'>{+overviewData.AnalystTargetPrice}</span>
              </h3>
              <h3>
                <span className='dataName'>Trailing PE:</span>
                <span className='dataValue'>{+overviewData.TrailingPE}</span>
              </h3>
              <h3>
                <span className='dataName'>Forward PE:</span>
                <span className='dataValue'>{+overviewData.ForwardPE}</span>
              </h3>
              <h3>
                <span className='dataName'>Price To Sales Ratio TTM:</span>
                <span className='dataValue'>{+overviewData.PriceToSalesRatioTTM}</span>
              </h3>
              <h3>
                <span className='dataName'>Price To Book Ratio:</span>
                <span className='dataValue'>{+overviewData.PriceToBookRatio}</span>
              </h3>
              <h3>
                <span className='dataName'>EV To Revenue:</span>
                <span className='dataValue'>{+overviewData.EVToRevenue}</span>
              </h3>
              <h3>
                <span className='dataName'>EV To EBITDA:</span>
                <span className='dataValue'>{+overviewData.EVToEBITDA}</span>
              </h3>
              <h3>
                <span className='dataName'>Beta:</span>
                <span className='dataValue'>{+overviewData.Beta}</span>
              </h3>
              <h3>
                <span className='dataName'>52 Week High:</span>
                <span className='dataValue'>{+overviewData["52WeekHigh"]}</span>
              </h3>
              <h3>
                <span className='dataName'>52 Week Low:</span>
                <span className='dataValue'>{+overviewData["52WeekLow"]}</span>
              </h3>
              <h3>
                <span className='dataName'>50 Day Moving Average:</span>
                <span className='dataValue'>{+overviewData["50DayMovingAverage"]}</span>
              </h3>
              <h3>
                <span className='dataName'>200 Day Moving Average:</span>
                <span className='dataValue'>{+overviewData["200DayMovingAverage"]}</span>
              </h3>
              <h3>
                <span className='dataName'>Shares Outstanding:</span>
                <span className='dataValue'>{+overviewData.SharesOutstanding}</span>
              </h3>
              <h3>
                <span className='dataName'>Dividend Date:</span>
                <span className='dataValue'>{overviewData.DividendDate}</span>
              </h3>
              <h3>
                <span className='dataName'>Ex Dividend Date:</span>
                <span className='dataValue'>{overviewData.ExDividendDate}</span>
              </h3>
            </div>
          </SwiperSlide>
      }
      </Swiper>
    </>
  )
}