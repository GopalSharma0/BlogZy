const express = require("express");

const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
//coonection
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

//port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `server is running on ${process.env.DEV_MODE} port on${PORT}`.bgWhite.bgBlue
  );
});
