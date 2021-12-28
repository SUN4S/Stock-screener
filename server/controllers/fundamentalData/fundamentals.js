const axios = require('axios');
const csv=require('csvtojson');
require('dotenv').config();

const getFundamentalData = async (req, res, type ) => {
  const { ticker } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: type,
        symbol: ticker,
        apikey: process.env.ALPHA_VANTAGE_API
      },
      headers: {
        'User-Agent': 'request'
      }
    });
    res.status(201).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: error});
  } 
}

const getIncomeStatement = async (req,res) => {
  getFundamentalData(req, res, "INCOME_STATEMENT");
}

const getBalanceSheet = async (req,res) => {
  getFundamentalData(req, res, "BALANCE_SHEET");
}

const getCashFlow = async (req,res) => {
  getFundamentalData(req, res, "CASH_FLOW");
}

const getEarnings = async (req,res) => {
  getFundamentalData(req, res, "EARNINGS");
}

const getCompanyOverview = async (req,res) => {
  getFundamentalData(req, res, "OVERVIEW");
}

const getListedCompanies = async (req,res) => {
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: 'LISTING_STATUS',
        apikey: process.env.ALPHA_VANTAGE_API
      },
      headers: {
        'User-Agent': 'request'
      }
    });
    csv()
      .fromString(response.data)
      .then((data) => {
        res.status(201).json(data);
      })
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: error});
  } 
}

module.exports = {
  getIncomeStatement,
  getBalanceSheet,
  getCashFlow,
  getEarnings,
  getCompanyOverview,
  getListedCompanies
}