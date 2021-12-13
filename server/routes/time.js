const express = require('express');
const router = express.Router();

const { getInterday, getInterdayExtended, getDailyAdjusted, getWeeklyAdjusted, getMonthlyAdjusted } = require('../controllers/stockTimeSeries/time');

router.route('/interday/:ticker/:interval').get(getInterday);
router.route('/interdayextended/:ticker/:interval/:slice').get(getInterdayExtended);
router.route('/dailyadjusted/:ticker').get(getDailyAdjusted);
router.route('/weeklyadjusted/:ticker').get(getWeeklyAdjusted);
router.route('/monthlyadjusted/:ticker').get(getMonthlyAdjusted);

module.exports = router;