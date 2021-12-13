const express = require('express');
const router = express.Router();

const { getEndpoint } = require('../controllers/searchEndpoint/endpoint');

router.route('/endpoint/:keywords').get(getEndpoint);

module.exports = router;