const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter
  .route("/")
  .post(userController.createNewUser)
  .get(userController.getAllUsers);

module.exports = userRouter;
