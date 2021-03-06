const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/userModel");

exports.createNewUser = async (req, res) => {
  const { userName, email, password } = req.body;

  // CHECK IF FIELDS ARE NOT EMPTY
  if (userName === "" || email === "" || password === "") {
    return res.status(400).json({
      error: "One of the field is empty"
    });
  }

  try {
    // Encrypt the password
    const salt = await bcrypt.genSalt(12);
    const encryptPassword = await bcrypt.hash(password, salt);

    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        error: "This email is already used."
      });
    }

    user = new UserModel({
      userName,
      email,
      password: encryptPassword
    });

    await user.save();

    // Create Token
    const payload = {
      user: {
        id: user._id
      }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    res.status(200).json({
      message: "User successfully created",
      user,
      token
    });
  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find().select("-password");
    res.status(200).json({
      message: "All users fetched",
      data: allUsers
    });
  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
};
