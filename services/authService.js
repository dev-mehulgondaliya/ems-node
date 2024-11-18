const User = require("../model/userModel");
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (userId, role) => {
  const payload = { userId, role };  // The payload typically includes user information
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });  // Secret & expiration time
};

// Login
const login = async (data, role) => {
console.log('✌️role --->', role);
  try {
    const { email, password } = data;
    const user = await User.findOne({ email, role });  // Find the user by email

    if (!user) {
      return { success: false, message: "Email not found", statusCode: 404 };
    }

    const isMatch = await user.matchPassword(password);  // Compare entered password with stored hash

    if (!isMatch) {
      return { success: false, message: "Incorrect password", statusCode: 400 };
    }

    const token = generateToken(user._id, user.role);

    const responseData = {
      user,
      token
    };

    return { success: true, message: "Login successful", data: responseData, statusCode: 200 };
  } catch (error) {
    console.error(`[Login Error]: ${error.message}`);
    return { success: false, message: "Login error", error: error.message, statusCode: 500 };
  }
};

// Signup
const signup = async (data, role) => {
  try {
    const { email, password } = data;

    // Check if email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return { success: false, message: "Email already registered", statusCode: 409 };  // 409 Conflict
    }

    const queryData = {
      email,
      password,  // The password will be hashed automatically using the pre-save hook
      role,
    };

    const user = await User.create(queryData);  // Create the user
    return { success: true, message: "User registered successfully", data: user, statusCode: 201 };
  } catch (error) {
    console.error(`[Signup Error]: ${error.message}`);
    return { success: false, message: "Error registering user", error: error.message, statusCode: 500 };  // 500 Server Error
  }
};

module.exports = {
  login,
  signup
};
