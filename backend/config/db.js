const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongoDB databse`.bgMagenta.white);
  } catch (err) {
    console.log("MongoDB connection error".bgRed.white);
  }
};

module.exports = connectDB;
