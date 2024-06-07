
const express = require('express');
const router = express.Router();
const { getLeaderboard } = require('../controllers/statsController');

router.get('/leaderboard', getLeaderboard);

module.exports = router;
