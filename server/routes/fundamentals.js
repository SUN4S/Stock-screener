const express = require('express');
const router = express.Router();

const { getIncomeStatement, getBalanceSheet, getCashFlow, getEarnings, getCompanyOverview, getListedCompanies } = require('../controllers/fundamentalData/fundamentals');

router.route('/incomestatement/:ticker').get(getIncomeStatement);
router.route('/balancesheet/:ticker').get(getBalanceSheet);
router.route('/cashflow/:ticker').get(getCashFlow);
router.route('/earnings/:ticker').get(getEarnings);
router.route('/companyoverview/:ticker').get(getCompanyOverview);
router.route('/listedcompanies').get(getListedCompanies);

module.exports = router;