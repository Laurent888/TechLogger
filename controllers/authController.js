const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Wrong credential, try again"
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    // CREATE TOKEN
    const payload = {
      user: {
        id: user._id
      }
    };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    res.status(200).json({
      message: "Log in successful",
      user,
      token
    });
  } else {
    res.status(400).json({
      message: "Wrong credential, try again"
    });
  }
};

exports.loadUser = async (req, res) => {
  const user = await UserModel.findById(req.user.id);

  if (!user) {
    return res.status(400).json({
      error: "No user found"
    });
  }

  res.status(200).json({
    status: "Succes",
    user
  });
};
