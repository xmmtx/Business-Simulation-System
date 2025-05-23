const express = require('express');
const router = express.Router();
const { submitDecision } = require('../controllers/decisionController');

router.post('/submit', submitDecision);

module.exports = router;
