const express = require('express');
const router = express.Router();

const headlinesControllers = require('../controllers/headlines-controllers');

router.get('/', headlinesControllers.getHeadlines);
module.exports = router;
