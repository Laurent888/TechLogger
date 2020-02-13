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
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  dueDte: {
    type: Date
  },
  open: {
    type: Boolean,
    default: true
  },
  assignee: {
    type: String
  }
});

const Log = mongoose.model("log", logSchema);

module.exports = Log;
