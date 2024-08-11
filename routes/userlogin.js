const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const User = require("../models/users");
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

    
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    
    res.json({
      message: "Logged in successfully",
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});



// Middleware to validate the token
Router.get('/validateToken', (req, res) => {
  // Extract token from the Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token has expired' });
      } else {
        return res.status(401).json({ error: 'Invalid token' });
      }
    }

    // Token is valid
    res.json({ message: 'Token is valid', user: decoded });
  });
});


module.exports = Router;
