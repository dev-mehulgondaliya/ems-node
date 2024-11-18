const Event = require("../model/eventModel");

// Create Event
const createEvent = async (data) => {
  try {
    const { eventName, eventDate, location, description } = data;
    const queryData = { eventName, eventDate, location, description };

    const event = await Event.create(queryData);

    return { success: true, message: "Event created successfully", data: event, statusCode: 201 };
  } catch (error) {
    console.error(`[Create Event Error]: ${error.message}`);
    return { success: false, message: "Error creating event", error: error.message, statusCode: 500 };
  }
};

// Get Event List
const getEventList = async () => {
  try {
    const events = await Event.find();

    if (!events.length) {
      return { success: false, message: "No events found", statusCode: 404 };
    }

    return { success: true, message: "Events retrieved successfully", data: events, statusCode: 200 };
  } catch (error) {
    console.error(`[Get Events Error]: ${error.message}`);
    return { success: false, message: "Error fetching events", error: error.message, statusCode: 500 };
  }
};

// Update Event
const updateEvent = async (data, id) => {
  try {
    const { eventName, eventDate, location, description } = data;
    const updateQuery = { $set: { eventName, eventDate, location, description } };

    const updatedEvent = await Event.findByIdAndUpdate(id, updateQuery, { new: true });

    if (!updatedEvent) {
      return { success: false, message: "Event not found", statusCode: 404 };
    }

    return { success: true, message: "Event updated successfully", data: updatedEvent, statusCode: 200 };
  } catch (error) {
    console.error(`[Update Event Error]: ${error.message}`);
    return { success: false, message: "Error updating event", error: error.message, statusCode: 500 };
  }
};

// Delete Event
const deleteEvent = async (id) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return { success: false, message: "Event not found", statusCode: 404 };
    }

    return { success: true, message: "Event deleted successfully", data: deletedEvent, statusCode: 200 };
  } catch (error) {
    console.error(`[Delete Event Error]: ${error.message}`);
    return { success: false, message: "Error deleting event", error: error.message, statusCode: 500 };
  }
};

module.exports = {
  createEvent,
  getEventList,
  updateEvent,
  deleteEvent,
};
