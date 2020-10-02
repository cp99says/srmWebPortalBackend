const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv/config");
const reg_model = require("../registrationModel/registration_model");

app.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const a = new reg_model({
    campus: req.body.campus,
    school: req.body.school,
    department: req.body.department,
    email: req.body.email,
    password: hashedPassword,
    role:req.body.role
  });

  try {
    const data = await a.save();
    res.status(201).json(data);
  } catch (err) {
    res.send(err);
  }
});

app.post("/login", async (req, res) => {
  if (!req.body.email || !req.body.password)
    res.status(400).json({
      status: "failure",
      message: "please enter email and password",
    });

  try {
    const a = await reg_model.findOne({ email: req.body.email });    
    if (a == null)
      res.status(404).json({
        status: "failure",
        message: "email not found",
      });

    const validPassword = await bcrypt.compare(req.body.password, a.password);
    if (!validPassword)
      res.status(403).json({
        status: "failure",
        message: "invalid password",
      });

    const token = jwt.sign(
      {
        _id: a._id,
        campus: a.campus,
        school: a.school,
        department: a.department,
        email: a.email,
        role:a.role
      },
      process.env.TOKEN_SECRET
    );
    res.header("auth-token", token).send(token);
  } catch (err) {
    res.send(err)
  }
});

//app.patch('/')

module.exports = app;
