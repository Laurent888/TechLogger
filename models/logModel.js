const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date,
    default: Date.now
  },
  open: {
    type: Boolean,
    default: true
  },
  assignee: {
    type: String,
    required: true
  }
});

const Log = mongoose.model("log", logSchema);

module.exports = Log;
