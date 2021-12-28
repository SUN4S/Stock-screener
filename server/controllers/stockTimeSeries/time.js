const axios = require('axios');
const csv = require('csv-express');
const csvtojson = require('csvtojson');
require('dotenv').config();

const getInterday = async (req,res) => {
  const { ticker } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: ticker,
        interval: '5min', // 1min, 5min, 15min, 30min, 60min
        outputsize: 'full', // compact(100 data points), full (full length interday 1-2months)
        apikey: process.env.ALPHA_VANTAGE_API
      },
      headers: {
        'User-Agent': 'request'
      }
    });   
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({msg: error});
  } 
}

const getInterdayExtended = async (req,res) => {
  const { ticker, interval, slice } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: 'TIME_SERIES_INTRADAY_EXTENDED',
        symbol: ticker,
        interval: interval, // 1min, 5min, 15min, 30min, 60min
        slice: slice, // slice is divided into 24 slices and represents 2years of data
        apikey: process.env.ALPHA_VANTAGE_API
      },
      headers: {
        'User-Agent': 'request'
      }
    });
    csvtojson()
      .fromString(response.data)
      .then((data) => {
        res.status(201).json({data: data});
      })
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: error});
  } 
}

const getDailyAdjusted = async (req,res) => {
  const { ticker } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: ticker,
        outputsize: 'compact', // compact(100 data points), full (full length interday 1-2months) 
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

const getWeeklyAdjusted = async (req,res) => {
  const { ticker } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: 'TIME_SERIES_WEEKLY_ADJUSTED',
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

const getMonthlyAdjusted = async (req,res) => {
  const { ticker } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: 'TIME_SERIES_MONTHLY_ADJUSTED',
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


module.exports = {
  getInterday,
  getInterdayExtended,
  getDailyAdjusted,
  getWeeklyAdjusted,
  getMonthlyAdjusted
}