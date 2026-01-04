const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/", function (req, res) {
  res.send("Got a post request");
});

app.delete("/", function (req, res) {
  res.send("Got a delete request");
});

let respond;
app.get(
  "/example/a",
  function (req, res, next) {
    respond = "the response will be sent by the next function...";
    next();
  },
  function (req, res) {
    res.send(respond + "\nHello from a!");
  }
);

app.listen(port);
