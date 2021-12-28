import { A11y, Navigation, Pagination } from 'swiper';
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';

import { IncomeStatementAnnual } from '../../../models/fundamentalData';
import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';

export const IncomeAnnualList = () => { 
  const incomeData = useSelector((state: RootState) => state.income.data);
  const incomeError = useSelector((state: RootState) => state.income.error);
  const [currency, setCurrency] = useState<string | undefined>('USD');

  useEffect(() => {
    setCurrency(incomeData.annualReports[0].reportedCurrency);
  }, [incomeData])

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
        !incomeError === null
        ? <SwiperSlide>
            <h1>{incomeError}</h1>
          </SwiperSlide>
        : incomeData.annualReports.map((item: IncomeStatementAnnual) => {
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
                  <span className='dataName'>Gross Profit:</span>
                  <span className='dataValue'>{formatter.format(+item.grossProfit)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Total Revenue:</span>
                  <span className='dataValue'>{formatter.format(+item.totalRevenue)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Cost Of Revenue:</span>
                  <span className='dataValue'>{formatter.format(+item.costOfRevenue)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Cost of Goods And Services Sold:</span>
                  <span className='dataValue'>{formatter.format(+item.costofGoodsAndServicesSold)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Operating Income:</span>
                  <span className='dataValue'>{formatter.format(+item.operatingIncome)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Selling General And Administrative:</span>
                  <span className='dataValue'>{formatter.format(+item.sellingGeneralAndAdministrative)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Research And Development:</span>
                  <span className='dataValue'>{formatter.format(+item.researchAndDevelopment)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Operating Expenses:</span>
                  <span className='dataValue'>{formatter.format(+item.operatingExpenses)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Investment Income Net:</span>
                  <span className='dataValue'>{formatter.format(+item.investmentIncomeNet)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Net Interest Income:</span>
                  <span className='dataValue'>{formatter.format(+item.netInterestIncome)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Interest Income:</span>
                  <span className='dataValue'>{formatter.format(+item.interestIncome)}</span>
                </h3>
              </div>
              <hr />
              <div className="right">
                <h3>
                  <span className='dataName'>Interest Expense:</span>
                  <span className='dataValue'>{formatter.format(+item.interestExpense)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Non Interest Income:</span>
                  <span className='dataValue'>{formatter.format(+item.nonInterestIncome)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Other Non Operating Income:</span>
                  <span className='dataValue'>{formatter.format(+item.otherNonOperatingIncome)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Depreciation:</span>
                  <span className='dataValue'>{formatter.format(+item.depreciation)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Depreciation And Amortization:</span>
                  <span className='dataValue'>{formatter.format(+item.depreciationAndAmortization)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Income Before Tax:</span>
                  <span className='dataValue'>{formatter.format(+item.incomeBeforeTax)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Income Tax Expense:</span>
                  <span className='dataValue'>{formatter.format(+item.incomeTaxExpense)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Interest And Debt Expense:</span>
                  <span className='dataValue'>{formatter.format(+item.incomeTaxExpense)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Net Income From Continuing Operations:</span>
                  <span className='dataValue'>{formatter.format(+item.netIncomeFromContinuingOperations)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Comprehensive Income Net Of Tax:</span>
                  <span className='dataValue'>{formatter.format(+item.comprehensiveIncomeNetOfTax)}</span>
                </h3>
                <h3>
                  <span className='dataName'>EBIT:</span>
                  <span className='dataValue'>{formatter.format(+item.ebit)}</span>
                </h3>
                <h3>
                  <span className='dataName'>EBITDE:</span>
                  <span className='dataValue'>{formatter.format(+item.ebitda)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Net Income:</span>
                  <span className='dataValue'>{formatter.format(+item.netIncome)}</span>
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