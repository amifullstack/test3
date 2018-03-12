const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
  title: String,
  description: String,
  dueadate: String,
  status: String,
});

// Export model
module.exports = mongoose.model('Todo', Todo);