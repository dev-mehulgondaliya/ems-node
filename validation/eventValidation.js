const Yup = require('yup');  // Use require in CommonJS


const eventValidation = Yup.object().shape({
    eventName: Yup.string().required('Event name is required'),
    eventDate: Yup.date().required('Event time is required'),
    location: Yup.string().required('Location is required'),
    description: Yup.string().required('Description is required'),
  });

  module.exports = {
    eventValidation
}