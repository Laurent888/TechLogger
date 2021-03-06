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
  createdBy: {
    type: String,
    required: [true, "Created by required"]
  },
  dueDate: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "open"
  },
  assignee: {
    type: String,
    required: true
  }
});

const Log = mongoose.model("log", logSchema);

module.exports = Log;
