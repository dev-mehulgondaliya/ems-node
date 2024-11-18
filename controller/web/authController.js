const asyncHandler = require('../../utils/asyncHandler'); // Import asyncHandler
const authService = require('../../services/authService');
const { successResponse, failureResponse } = require("../../utils/responseFunction");


const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body,'user');
  if (result.success) {
    successResponse(res, { message: result.message, data: result.data, statusCode: result.statusCode });
  } else {
    failureResponse(res, { message: result.message, error: result.error, statusCode: result.statusCode });
  }
});

const signup = asyncHandler(async (req, res) => {
  
  const result = await authService.signup(req.body, 'user');
  if (result.success) {
    successResponse(res, { message: result.message, data: result.data, statusCode: result.statusCode });
  } else {
    failureResponse(res, { message: result.message, error: result.error, statusCode: result.statusCode });
  }
});


module.exports = {
  login,
  signup
};
