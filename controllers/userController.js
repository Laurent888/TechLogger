const UserModel = require("../models/userModel");

exports.createNewUser = async (req, res) => {
  const { userName, email, password } = req.body;

  if (userName === "" || email === "" || password === "") {
    return res.status(400).json({
      error: "One of the field is empty"
    });
  }

  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        error: "This email is already used."
      });
    }

    user = new UserModel({
      userName,
      email,
      password
    });

    await user.save();

    res.status(200).json({
      message: "User successfully created",
      data: user
    });
  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
};
