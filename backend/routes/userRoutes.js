const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controller/userController");
const router = express.Router();

//create user
router.post("/register", registerController);

//get all users
router.get("/all-users", getAllUsers);

//login
router.post("/login", loginController);

module.exports = router;
