const express = require('express');
const app = express();
const fundamentals = require('./routes/fundamentals');
const stockTime = require('./routes/time');
const endpoint = require('./routes/endpoint');

require('dotenv').config();
// middleware
app.use(express.json());

// routes
app.get('/hello', (req,res) => {
  res.send("<h1>hello World<h1>");
})

app.use('/api/v1/fundamentals', fundamentals);
app.use('/api/v1/stocktime', stockTime);
app.use('/api/v1/search', endpoint);

const port = 3030;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})