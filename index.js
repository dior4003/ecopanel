const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
require("dotenv").config()

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

app.use(express.static(path.resolve("./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/build/index.html"));
});
app.listen(process.env.PORT, () => {
  console.log("server started");
});
