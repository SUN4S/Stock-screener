const axios = require('axios');
require('dotenv').config();

const getEndpoint = async (req,res) => {
  const { keywords } = req.params;
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?`, {
      params: {
        function: 'SYMBOL_SEARCH',
        keywords: keywords,
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
  getEndpoint
}