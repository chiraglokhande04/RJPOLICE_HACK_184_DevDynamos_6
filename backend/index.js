const express = require("express");
const app = express();
const userRouter = require("./Routes/Camera");
const { connectMongoDb } = require("./connection");
const cors = require("cors");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("dotenv").config();

//connection
connectMongoDb();

//routes
app.use("/api/user/camdetails", userRouter);
app.get("/", (req, res) => {
  res.send("Home Page");
});

//listening to the req
app.listen(process.env.PORT || 8000, () => {
  console.log(`server has started at port ${process.env.PORT}`);
});
