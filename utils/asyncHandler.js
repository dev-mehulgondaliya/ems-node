const { failureResponse } = require("./responseFunction");

// Error Handler for Async Routes
const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next); // Run the function passed to it
    } catch (err) {
      console.error(`[Error]: ${err.message}`); // Log the error for debugging
      
      // Specific error handling based on error type
      let statusCode = 500;
      let message = 'Server Error';
      
      if (err.name === 'ValidationError') {
        statusCode = 400;
        message = 'Validation Error';
      } else if (err.name === 'CastError') {
        statusCode = 400;
        message = 'Invalid ID format';
      } else if (err.code === 11000) {
        statusCode = 409;
        message = 'Duplicate key error';
      }

      // Return a failure response
      failureResponse(res, { message, error: err.message, statusCode });
    }
  };
};

module.exports = asyncHandler;
