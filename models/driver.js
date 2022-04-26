const mongoose = require('mongoose');

module.exports = mongoose.model('Driver', new mongoose.Schema({
  username: String,
  password: String,
}, { collection : 'driver' }));