import React, { useState, useEffect } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';
import { Navigation, Pagination, A11y } from 'swiper';
import { BalanceStateQuarterly } from '../../../models/fundamentalData';

import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';

export const BalanceQuarterlyList = () => { 
  const balanceData = useSelector((state: RootState) => state.balance.data);
  const balanceError = useSelector((state: RootState) => state.balance.error);
  const [currency, setCurrency] = useState<string | undefined>('USD');

  console.log(balanceData)
  useEffect(() => {
    setCurrency(balanceData.annualReports[0].reportedCurrency);
  }, [balanceData])

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
        !balanceError === null
        ? <SwiperSlide>
            <h1>{balanceError}</h1>
          </SwiperSlide>
        : balanceData.quarterlyReports.map((item: BalanceStateQuarterly) => {
          return(
            <SwiperSlide>
              <div className="left">
                <h3>
                  <span className='dataName'>Fiscal Date End:</span>
                  <span className='dataValue'>{item.fiscalDateEnding}</span>
                </h3>
                <h3>
                  <span className='dataName'>Reported Currency:</span>
                  <span className='dataValue'>{item.reportedCurrency}</span>
                </h3>
                <h3>
                  <span className='dataName'>Total Assets:</span>
                  <span className='dataValue'>{formatter.format(+item.totalAssets)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Total Current Assets:</span>
                  <span className='dataValue'>{formatter.format(+item.totalCurrentAssets)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Cash And Cash Equivalents At Carrying Value:</span>
                  <span className='dataValue'>{formatter.format(+item.cashAndCashEquivalentsAtCarryingValue)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Cash And Short Term Investments:</span>
                  <span className='dataValue'>{formatter.format(+item.cashAndShortTermInvestments)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Inventory:</span>
                  <span className='dataValue'>{formatter.format(+item.inventory)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Current Net Receivables:</span>
                  <span className='dataValue'>{formatter.format(+item.currentNetReceivables)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Total Non Current Assets:</span>
                  <span className='dataValue'>{formatter.format(+item.totalNonCurrentAssets)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Property Plant Equipment:</span>
                  <span className='dataValue'>{formatter.format(+item.propertyPlantEquipment)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Accumulated Depreciation Amortization PPE:</span>
                  <span className='dataValue'>{formatter.format(+item.accumulatedDepreciationAmortizationPPE)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Intangible Assets:</span>
                  <span className='dataValue'>{formatter.format(+item.intangibleAssets)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Intangible Assets Excluding Goodwill:</span>
                  <span className='dataValue'>{formatter.format(+item.intangibleAssetsExcludingGoodwill)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Goodwill:</span>
                  <span className='dataValue'>{formatter.format(+item.goodwill)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Investments:</span>
                  <span className='dataValue'>{formatter.format(+item.investments)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Long Term Investments:</span>
                  <span className='dataValue'>{formatter.format(+item.longTermInvestments)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Short Term Investments:</span>
                  <span className='dataValue'>{formatter.format(+item.shortTermInvestments)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Other Current Assets:</span>
                  <span className='dataValue'>{formatter.format(+item.otherCurrentAssets)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Other Non Currrent Assets:</span>
                  <span className='dataValue'>{formatter.format(+item.otherNonCurrrentAssets)}</span>
                </h3>
              </div>
              <hr />
              <div className="right">
                <h3>
                  <span className='dataName'>Total Liabilities:</span>
                  <span className='dataValue'>{formatter.format(+item.totalLiabilities)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Total Current Liabilities:</span>
                  <span className='dataValue'>{formatter.format(+item.totalCurrentLiabilities)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Current Accounts Payable:</span>
                  <span className='dataValue'>{formatter.format(+item.currentAccountsPayable)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Deferred Revenue:</span>
                  <span className='dataValue'>{formatter.format(+item.deferredRevenue)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Current Debt:</span>
                  <span className='dataValue'>{formatter.format(+item.currentDebt)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Short Term Debt:</span>
                  <span className='dataValue'>{formatter.format(+item.shortTermDebt)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Total Non Current Liabilitiese:</span>
                  <span className='dataValue'>{formatter.format(+item.totalNonCurrentLiabilities)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Capital Lease Obligations:</span>
                  <span className='dataValue'>{formatter.format(+item.capitalLeaseObligations)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Long Term Debt:</span>
                  <span className='dataValue'>{formatter.format(+item.longTermDebt)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Current Long Term Debt:</span>
                  <span className='dataValue'>{formatter.format(+item.currentLongTermDebt)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Long Term Debt Noncurrent:</span>
                  <span className='dataValue'>{formatter.format(+item.longTermDebtNoncurrent)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Short Long Term Debt Total:</span>
                  <span className='dataValue'>{formatter.format(+item.shortLongTermDebtTotal)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Other Current Liabilities:</span>
                  <span className='dataValue'>{formatter.format(+item.otherCurrentLiabilities)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Other Non Current Liabilities:</span>
                  <span className='dataValue'>{formatter.format(+item.otherNonCurrentLiabilities)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Total Shareholder Equity:</span>
                  <span className='dataValue'>{formatter.format(+item.totalShareholderEquity)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Treasury Stock:</span>
                  <span className='dataValue'>{formatter.format(+item.treasuryStock)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Retained Earnings:</span>
                  <span className='dataValue'>{formatter.format(+item.retainedEarnings)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Common Stock:</span>
                  <span className='dataValue'>{formatter.format(+item.commonStock)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Common Stock Shares Out standing:</span>
                  <span className='dataValue'>{formatter.format(+item.commonStockSharesOutstanding)}</span>
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