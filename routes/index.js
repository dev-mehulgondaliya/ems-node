const express = require('express');
const router = express.Router();
const webRoutes = require('./web/index')
const adminRoutes = require('./admin/index')

// Define your routes here
router.use('/admin', adminRoutes)
router.use('/web', webRoutes)

// Correct export syntax for CommonJS
module.exports = router;
