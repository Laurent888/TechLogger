const express = require("express");
const logController = require("../controllers/logController");

const logRouter = express.Router();

logRouter
  .route("/")
  .get(logController.getAllLogs)
  .post(logController.createLog)
  .delete(logController.deleteLog)
  .patch(logController.updateLog);

module.exports = logRouter;
