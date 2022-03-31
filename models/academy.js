const mongoose = require('mongoose');

const academySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
  
  
}, { timestamps: true });

module.exports = mongoose.model('academy', academySchema);