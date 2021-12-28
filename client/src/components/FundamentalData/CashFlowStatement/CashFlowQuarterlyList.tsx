import { A11y, Navigation, Pagination } from 'swiper';
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';

import { CashFlowStateQuarterly } from '../../../models/fundamentalData';
import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';

export const CashFlowQuarterlyList = () => { 
  const cashFlowData = useSelector((state: RootState) => state.cashFlow.data);
  const cashFlowError = useSelector((state: RootState) => state.cashFlow.error);
  const [currency, setCurrency] = useState<string | undefined>('USD');

  useEffect(() => {
    setCurrency(cashFlowData.annualReports[0].reportedCurrency);
  }, [cashFlowData])

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
        !cashFlowError === null
        ? <SwiperSlide>
            <h1>{cashFlowError}</h1>
          </SwiperSlide>
        : cashFlowData.quarterlyReports.map((item: CashFlowStateQuarterly) => {
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
                  <span className='dataName'>Operating Cashflow:</span>
                  <span className='dataValue'>{formatter.format(+item.operatingCashflow)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Payments For Operating Activities:</span>
                  <span className='dataValue'>{formatter.format(+item.paymentsForOperatingActivities)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Proceeds From Operating Activities:</span>
                  <span className='dataValue'>{formatter.format(+item.proceedsFromOperatingActivities)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Change In Operating Liabilities:</span>
                  <span className='dataValue'>{formatter.format(+item.changeInOperatingLiabilities)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Change In Operating Assets:</span>
                  <span className='dataValue'>{formatter.format(+item.changeInOperatingAssets)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Depreciation Depletion And Amortization:</span>
                  <span className='dataValue'>{formatter.format(+item.depreciationDepletionAndAmortization)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Capital Expenditures:</span>
                  <span className='dataValue'>{formatter.format(+item.capitalExpenditures)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Change In Receivables:</span>
                  <span className='dataValue'>{formatter.format(+item.changeInReceivables)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Change In Inventory:</span>
                  <span className='dataValue'>{formatter.format(+item.changeInInventory)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Profit Loss:</span>
                  <span className='dataValue'>{formatter.format(+item.profitLoss)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Cashflow From Investment:</span>
                  <span className='dataValue'>{formatter.format(+item.cashflowFromInvestment)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Cashflow From Financing:</span>
                  <span className='dataValue'>{formatter.format(+item.cashflowFromFinancing)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Proceeds From Repayments Of Short Term Debt:</span>
                  <span className='dataValue'>{formatter.format(+item.proceedsFromRepaymentsOfShortTermDebt)}</span>
                </h3>
              </div>
              <hr />
              <div className="right">
                <h3>
                  <span className='dataName'>Payments For Repurchase Of Common Stock:</span>
                  <span className='dataValue'>{formatter.format(+item.paymentsForRepurchaseOfCommonStock)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Payments For Repurchase Of Equity:</span>
                  <span className='dataValue'>{formatter.format(+item.paymentsForRepurchaseOfEquity)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Payments For Repurchase Of Preferred Stock:</span>
                  <span className='dataValue'>{formatter.format(+item.paymentsForRepurchaseOfPreferredStock)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Dividend Payout:</span>
                  <span className='dataValue'>{formatter.format(+item.dividendPayout)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Dividend Payout Common Stock:</span>
                  <span className='dataValue'>{formatter.format(+item.dividendPayoutCommonStock)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Dividend Payout Preferred Stock:</span>
                  <span className='dataValue'>{formatter.format(+item.dividendPayoutPreferredStock)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Proceeds From Issuance Of Common Stock:</span>
                  <span className='dataValue'>{formatter.format(+item.proceedsFromIssuanceOfCommonStock)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Proceeds From Issuance Of Long Term Debt And Capital Securities Net:</span>
                  <span className='dataValue'>{formatter.format(+item.proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Proceeds From Issuance Of Preferred Stock:</span>
                  <span className='dataValue'>{formatter.format(+item.proceedsFromIssuanceOfPreferredStock)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Proceeds From Repurchase Of Equity:</span>
                  <span className='dataValue'>{formatter.format(+item.proceedsFromRepurchaseOfEquity)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Proceeds From Sale Of Treasury Stock:</span>
                  <span className='dataValue'>{formatter.format(+item.proceedsFromSaleOfTreasuryStock)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Change In Cash And Cash Equivalents:</span>
                  <span className='dataValue'>{formatter.format(+item.changeInCashAndCashEquivalents)}</span>
                </h3>
                <h3>
                  <span className='dataName'>Change In Exchange Rate:</span>
                  <span className='dataValue'>{formatter.format(+item.changeInExchangeRate)}</span>
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