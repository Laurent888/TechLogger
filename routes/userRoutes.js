const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.route("/").post(userController.createNewUser);

module.exports = userRouter;
