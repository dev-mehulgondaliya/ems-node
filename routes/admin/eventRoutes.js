const express = require('express');
const router = express.Router();
const  eventController = require('../../controller/admin/eventController');
const validate = require('../../middleware/validate');
const { eventValidation } = require('../../validation/eventValidation');
const protect = require('../../middleware/protect');

// Define your routes here
router.post('/create',validate(eventValidation),protect, eventController.createEvent)
router.get('/list', protect, eventController.getEventList)
router.put('/update/:id',protect, eventController.updateEvent)
router.delete('/delete/:id',protect, eventController.deleteEvent)

// Correct export syntax for CommonJS
module.exports = router;
