const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const server = express();

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log("DB Connected!");
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected!");
    server.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  } catch (e) {
    console.log(e);
  }
};
DBConnection();

server.get("/", (req, res) => {
  return res.send("Hello, What you want?");
});

server.get("/mainrecipe", (req, res) => {
  return res.status(200).json({
    message: "Successfully!!",
    receipe: "Biriyani",
  });
});
