const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    unique: [true, "This username already exists"],
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
