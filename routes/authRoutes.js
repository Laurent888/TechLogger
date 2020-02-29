const express = require("express");
const authRouter = express.Router();

const authController = require("../controllers/authController");
const { auth } = require("../middleware/authMiddleware");

authRouter
  .route("/")
  .post(authController.loginUser)
  .get(auth, authController.loadUser);

module.exports = authRouter;
