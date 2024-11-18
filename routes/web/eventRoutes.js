const express = require('express');
const router = express.Router();
const  eventController = require('../../controller/web/eventController');
const protect = require('../../middleware/protect');

// Define your routes here
router.get('/list', eventController.getEventList)

// Correct export syntax for CommonJS
module.exports = router;
