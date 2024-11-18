// app.js
const express = require('express');
const cors = require('cors');
const { config } = require('./config/config'); // Ensure your config is correctly imported
require('dotenv').config(); // Load environment variables from .env file
const connectDB = require('./config/dbConfig'); // Import the connectDB function

// Create the Express app
const app = express();

// Connect to MongoDB (only need to call this once)
connectDB()

app.use(express.json())


// Use CORS middleware with options
app.use(cors());

// Import routes
const allRoutes = require('./routes/index');

// Use routes
app.use('/', allRoutes);

// Example route
app.post('/ping', (req, res) => {
  res.send('pong');
});

// Start the server
const PORT = process.env.PORT || config.PORT || 4747;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
