const express = require("express");

const { auth } = require("../middleware/authMiddleware");
const logController = require("../controllers/logController");

const logRouter = express.Router();

logRouter
  .route("/")
  .get(logController.getAllLogs)
  .post(logController.createLog)
  .delete(logController.deleteLog)
  .put(logController.updateLog);

module.exports = logRouter;
