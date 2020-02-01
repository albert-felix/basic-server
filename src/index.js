const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Home Page");
});

app.get("/profile", (request, response) => {
  response.send("Profile Page");
});

const server = app.listen("8888", () => {
  // console.log("Server Running on Port: " + server.address().port + ".");
  console.log(`Server Running on Port: ${server.address().port}.`);
});
