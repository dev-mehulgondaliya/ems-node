const express = require('express');
const router = express.Router();
const eventRoutes = require('./eventRoutes')
const authRoutes = require('./authRoutes')

// Define your routes here
router.use('/event', eventRoutes)
router.use('/auth', authRoutes)

// Correct export syntax for CommonJS
module.exports = router;
