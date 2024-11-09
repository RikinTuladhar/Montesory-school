const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  parentName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    },
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^98\d{8}$/.test(v); // assuming a 10-digit format
      },
      message: props => `${props.value} is not a valid phone number!`
    },
  },
  comments: {
    type: String,
    trim: true,
    maxlength: 500, // Optional comment field
  },
  enquiryDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Pending', 'Contacted', 'Enrolled', 'Not Interested'],
    default: 'Pending',
  }
});

module.exports = mongoose.model('Enquiry', enquirySchema);
