const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

app.use(express.static(path.resolve("./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/build/index.html"));
  console.log(path.resolve("./client/build/index.html"));
});
app.get("/hello", (req, res) => {
  res.send("hello");
});
app.listen(5000, () => {
  console.log("server started");
});
