const UserModel = require("../models/userModel");

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Wrong credential, try again"
    });
  }
  if (user.password === password) {
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
