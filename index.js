const express = require("express");
const mongoose = require("mongoose");
const User=require('./Models/User')
const CryptoJS = require("crypto-js");
require("dotenv").config();
const Authrouter = require("./routes/Authrouter");
const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connecton Successful"))
  .catch((err) => {
    console.log(err);
  });
app.use("/api/v1/auth", Authrouter);
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});












