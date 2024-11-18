const mongoose = require('mongoose');

// Define the Event schema
const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: [true, 'Event name is required'],  // Ensures that the event name is always provided
      maxlength: [100, 'Event name should not exceed 100 characters']
    },
    eventDate: {
      type: Date,
      required: [true, 'Event date is required'],  // Ensures that the event date is always provided
      validate: {
        validator: function(value) {
          return value > Date.now();  // Ensures the event date is in the future
        },
        message: 'Event date must be in the future'
      }
    },
    location: {
      type: String,
      required: [true, 'Event location is required'],
    },
    description: {
      type: String,
      required: [true, 'Event description is required'],
      maxlength: [300, 'Description should not exceed 300 characters']
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

// Create the Event model from the schema
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
