const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  academy: {
    type: String,
    required: true
  },
  
}, { timestamps: true });

module.exports = mongoose.model('course', courseSchema);