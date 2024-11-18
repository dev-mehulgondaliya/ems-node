// config.js
require('dotenv').config();  // Load environment variables from .env file

const config = {
    PORT: process.env.PORT || 4747, // Fallback to 4747 if PORT is not set
    DB: {
        HOST: process.env.HOST_NAME || 'localhost', // Default to 'localhost' if not set
        PORT: process.env.DBPORT || 27017, // Default to 27017 (MongoDB default port) if not set
        NAME: process.env.DBNAME || 'my_database', // Provide a default DB name if not set
    },
    JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key', // Use a fallback secret key for JWT
};

module.exports = config;
