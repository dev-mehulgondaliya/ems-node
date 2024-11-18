const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],  // Ensures that the email is always provided
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'], // Email format validation
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      required: [true, 'Role is required'],
      enum: ['admin', 'user'],  // Example role validation
    },
    createdAt: {
      type: Date,
      default: Date.now  // Automatically set the created date to the current date/time
    },
    updatedAt: {
      type: Date,
      default: Date.now  // Automatically set the updated date to the current date/time
    }
  },
  {
    timestamps: true, // This will automatically add 'createdAt' and 'updatedAt' fields
  }
);

// Hash the password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();  // Skip password hashing if password isn't modified
  }

  try {
    const salt = await bcrypt.genSalt(10);  // Generate salt
    this.password = await bcrypt.hash(this.password, salt);  // Hash the password
    next();  // Continue with the save process
  } catch (err) {
    return next(err);  // Pass any errors to the next middleware
  }
});

// Method to compare passwords
userSchema.methods.matchPassword = async function(enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);  // Compare hashed password
  } catch (err) {
    throw new Error('Password comparison failed');
  }
};

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
