const User = require('../model/userModel');
const { verifyToken } = require('../utils/jwtUtility');
const { failureResponse } = require('../utils/responseFunction');

// Middleware to protect routes
const protect = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('JWT ', ''); // Extract token from 'Authorization' header

  if (!token) {
    return failureResponse(res, { message: 'No token provided', statusCode: 403 });
  }

  try {
    // Verify the token using the public key
    const decoded = verifyToken(token);

    // Attach the decoded user information to the request object

    const getUser = await User.findById(decoded.userId)
    req.user = getUser;

    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    return failureResponse(res, { message: 'Invalid or expired token', statusCode: 403 });
  }
};

module.exports = protect;
