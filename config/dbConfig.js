// dbConfig.js
const mongoose = require('mongoose');
const config = require('./config'); // Ensure you're using the correct config file

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Build the MongoDB URI correctly
    const dbURI = `mongodb://${config.DB.HOST}:${config.DB.PORT}/${config.DB.NAME}`; // Correct format for MongoDB URI


    // Connect to MongoDB
    await mongoose.connect(dbURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure if the DB connection fails
  }
};

module.exports = connectDB;
