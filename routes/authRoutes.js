const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.route("/").post(authController.loginUser);

module.exports = authRouter;
