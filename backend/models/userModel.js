const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email field cannot be empty"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    blogs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestaps: true }
);

const userModel = mongoose.model("Userr", userSchema);

module.exports = userModel;
