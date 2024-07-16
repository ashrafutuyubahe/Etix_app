
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Router = express.Router();
const Admin = require("../models/admin");
const connection= require('../dbconnection');
const mongoose= require('mongoose');
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";



Router.post("/adminLogin", async (req, res) => {
    try {
      const { adminEmail, adminPassword } = req.body;
  
      const admin = await Admin.findOne({ adminEmail });
  
      if (!admin) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
  
      const validPassword = await bcrypt.compare(
        adminPassword,
        admin.adminPassword
      );
      if (!validPassword) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
  
      const token = jwt.sign({ adminId: admin._id }, SECRET_KEY, {
        expiresIn: "1h",
      });
  
      res
        .header("Authorization", "Bearer " + token)
        .json({ message: "Logged in successfully" });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  module.exports= Router;