const express = require("express");

const server = express();

server.listen(3001, () => {
  console.log("Server is running");
});

server.get("/", (req, res) => {
  return res.send("Hello, What you want?");
});

server.get("/mainrecipe", (req, res) => {
  return res.status(200).json({
    message: "Successfully!!",
    receipe: "Biriyani",
  });
});
