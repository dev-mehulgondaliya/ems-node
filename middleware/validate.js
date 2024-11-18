const validate = (schema, dataKey = 'body') => async (req, res, next) => {
  try {
    // Validate the specified data (body, query, params)
    await schema.validate(req[dataKey], { abortEarly: false }); // abortEarly: false ensures all errors are returned
    next(); // If validation passes, move to the next middleware/route handler
  } catch (error) {
    // If validation fails, return the validation error
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: error.errors, // Display all error messages
    });
  }
};

module.exports = validate;
