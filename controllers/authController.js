const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Wrong credential, try again"
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch);

  if (isMatch) {
    res.status(200).json({
      message: "Log in successful",
      data: user
    });
  } else {
    res.status(400).json({
      message: "Wrong credential, try again"
    });
  }
};
