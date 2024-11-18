const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

// Load the private and public keys from PEM files
const privateKey = fs.readFileSync(path.join(__dirname, '../key/private.pem'), 'utf8');
const publicKey = fs.readFileSync(path.join(__dirname, '../key/public.pem'), 'utf8');

// Generate JWT token
const generateToken = (userId, role) => {
  const payload = {
    userId,
    role,
  };

  // Sign the JWT using the private key and RS256 algorithm
  return jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
    expiresIn: '1h', // Set the expiration time (optional)
  });
};

// Verify JWT token
const verifyToken = (token) => {
  try {
    // Verify the JWT using the public key and RS256 algorithm
    return jwt.verify(token, publicKey);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

module.exports = { generateToken, verifyToken };
