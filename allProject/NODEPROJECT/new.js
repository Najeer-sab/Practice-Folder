const mongoose = require("mongoose");
let formidable = require("express-formidable");

const express = require("express");
const app = express();

mongoose .connect("mongodb://0.0.0.0:27017/newdata")
  .then(() => console.log("database is connected"))
  .catch(() => console.log("database is connected"));

const sechma = mongoose.Schema({
  name: String,
  email: String,
  password: Number
});
let data = mongoose.model("std", sechma);

app.post("/", formidable(), function (req, res) {
  const { name, email, password } = req.fields;
  if (!(name && email && password)) {
    res.status(400).send("fill all data");
  } else {
    data.create({
      name: req.fields.name,
      email: req.fields.email,
      password: req.fields.password,
    });
    res.status(200).send("database created");

  }
});

app.listen(3010, () => console.log("connected"));
