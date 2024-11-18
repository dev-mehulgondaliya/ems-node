const asyncHandler = require('../../utils/asyncHandler'); // Import asyncHandler
const eventService = require('../../services/eventService');
const { successResponse, failureResponse } = require("../../utils/responseFunction");

// Create Event
const createEvent = asyncHandler(async (req, res) => {
  const result = await eventService.createEvent(req.body);
  if (result.success) {
    successResponse(res, { message: result.message, data: result.data, statusCode: result.statusCode });
  } else {
    failureResponse(res, { message: result.message, error: result.error, statusCode: result.statusCode });
  }
});

// Get Event List
const getEventList = asyncHandler(async (req, res) => {
  const result = await eventService.getEventList();
  if (result.success) {
    successResponse(res, { message: result.message, data: result.data, statusCode: result.statusCode });
  } else {
    failureResponse(res, { message: result.message, error: result.error, statusCode: result.statusCode });
  }
});

// Update Event
const updateEvent = asyncHandler(async (req, res) => {
  const result = await eventService.updateEvent(req.body, req.params.id);
  if (result.success) {
    successResponse(res, { message: result.message, data: result.data, statusCode: result.statusCode });
  } else {
    failureResponse(res, { message: result.message, error: result.error, statusCode: result.statusCode });
  }
});

// Delete Event
const deleteEvent = asyncHandler(async (req, res) => {
  const result = await eventService.deleteEvent(req.params.id);
  if (result.success) {
    successResponse(res, { message: result.message, data: result.data, statusCode: result.statusCode });
  } else {
    failureResponse(res, { message: result.message, error: result.error, statusCode: result.statusCode });
  }
});

module.exports = {
  createEvent,
  getEventList,
  updateEvent,
  deleteEvent,
};
