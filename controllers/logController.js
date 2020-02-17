const Log = require("../models/logModel");

exports.getAllLogs = async (req, res) => {
  try {
    const allLogs = await Log.find();
    res.status(200).json({
      data: allLogs
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

exports.createLog = async (req, res) => {
  console.log(req.body);
  try {
    const newLog = new Log(req.body);

    await newLog.save();

    res.status(200).json({
      message: "Log created successfully",
      data: newLog
    });
  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
};
exports.deleteLog = async (req, res) => {
  try {
    const id = req.body.id;
    await Log.findByIdAndDelete(id);
    res.status(200).json({
      message: "Log deleted successfully"
    });
  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
};

exports.updateLog = async (req, res) => {
  try {
    const updatedLog = req.body;
    const data = await Log.findByIdAndUpdate(updatedLog.id, updatedLog, {
      new: true
    });
    res.status(200).json({
      message: "Log updated successfully",
      data: data
    });
  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
};
