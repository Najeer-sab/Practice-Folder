require("dotenv").config();
const express = require("express");

let formidable = require("express-formidable");
let bcrypt = require("bcrypt");

require("./config/database");
const student = require("./model/user");
const app = express();

const PORT = process.env.API_PORT;

// aceess the enviroment file

app.post("/register", formidable(), async function (req, res) {
  let { firstName, LastName, email, password } = req.fields;

  if (!(firstName && LastName && email && password)) {
    res.status(400).send("provide all the  inputs");
  } else {
    // let enc_crypt = await bcrypt.hash(password, 10);
    if (await student.findOne({ email })) {
      res.send("alreasy exits");
    } else {
      let user = await student.create({
        firstName: req.fields.firstName,
        LastName: req.fields.LastName,
        email: req.fields.email,
        password: req.fields.password,
      });
    }

    res.status(200).send("database created");
  }

  console.log(req.fields);
});

app.listen(PORT, () => console.log(`project is running at PORT ${PORT} port`));
