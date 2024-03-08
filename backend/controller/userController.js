const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

//create user register
exports.registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //validation
    if (!username || !email || !password)
      return res.status(400).send({
        success: false,
        message: "plese fill all fields",
      });
    const existingUse = await userModel.findOne({ email });
    if (existingUse)
      return res.status(401).send({
        success: false,
        message: "User already exists",
      });

    const hashPassword = await bcrypt.hash(password, 10);

    //save user
    const user = new userModel({ username, email, password: hashPassword });
    await user.save();
    return res.status(200).send({
      success: true,
      message: "new user created",
      user,
    });
  } catch (err) {
    console.log("Error in registration controller " + err);
    return res.status(500).send({
      success: false,
      message: "error in reg callback",
      err,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      userCount: users.length,
      success: true,
      message: "all users data",
      users,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in get all users",
      error,
    });
  }
};

exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "please provide email and password",
      });
    }
    //checking the user is exist or not
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "email is not registerd",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid username or password",
      });
    }
    return res.status(200).send({
      success: true,
      message: "login successfull",
      user,
    });
  } catch (error) {
    return res.status(200).send({
      success: false,
      message: "email no registred",
    });
  }
};
