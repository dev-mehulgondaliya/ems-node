// utils/responseHandler.js

// Success Response Handler
const successResponse = (res, { message, data = null, statusCode = 200 }) => {
    res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  };
  
  // Failure Response Handler
  const failureResponse = (res, { message, error = null, statusCode = 400 }) => {
    res.status(statusCode).json({
      success: false,
      message,
      error: message,
    });
  };
  
  module.exports = { successResponse, failureResponse };
  