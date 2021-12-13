const axios = require('axios');
const csv=require('csvtojson');
require('dotenv').config();

const getIncomeStatement = async (req,res) => {
  const { ticker } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: 'INCOME_STATEMENT',
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

const getBalanceSheet = async (req,res) => {
  const { ticker } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: 'BALANCE_SHEET',
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

const getCashFlow = async (req,res) => {
  const { ticker } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: 'CASH_FLOW',
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

const getEarnings = async (req,res) => {
  const { ticker } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: 'EARNINGS',
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

const getCompanyOverview = async (req,res) => {
  const { ticker } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: 'OVERVIEW',
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