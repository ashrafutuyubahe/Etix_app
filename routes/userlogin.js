const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const User = require("../models/users");
const connection = require("../dbconnection");
const mongoose = require("mongoose");
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

  Router.post("/userlogin", async (req, res) => {
    console.log(req.body);
    try {
      const { userEmail, userPassword } = req.body;

      const user = await User.findOne({ userEmail });

      if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
      }

      const validPassword = await bcrypt.compare(userPassword, user.userPassword);
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

module.exports = Router;
