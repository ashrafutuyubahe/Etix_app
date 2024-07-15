

const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const joi = require("joi");
const Router = express.Router();
const User = require("../models/users");
require("dotenv").config();
const mongoose = require("mongoose");
const connection= require('../dbconnection');




Router.post("/user", async (req, res) => {
    console.log(req.body);
    try {
      const { userEmail, userPassword } = req.body;
      const user = await User.findOne({userEmail});
  
      if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
  
      const validPassword = await bcrypt.compare(userPassword, User.userPassword);
      if (!validPassword) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
  
      const token = jwt.sign({ userId: User._id }, SECRET_KEY, {
        expiresIn: "1h",
      });
  
      res
        .header("Authorization", "Bearer " + token)
        .json({ message: "Logged in successfully" });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  module.exports=Router;


  