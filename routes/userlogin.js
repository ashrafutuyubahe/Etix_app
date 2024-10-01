const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const User = require("../models/users");
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";
/**
 * @swagger
 * /userlogin:
 *   post:
 *     tags:
 *       - User Authentication
 *     summary: User Login
 *     description: Authenticates a user and returns a JWT token if successful.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userEmail:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               userPassword:
 *                 type: string
 *                 format: password
 *                 example: your_password
 *     responses:
 *       200:
 *         description: Logged in successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Logged in successfully
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Invalid email or password.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid email or password
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Internal server error
 */

/**
 * @swagger
 * /validateToken:
 *   get:
 *     tags:
 *       - User Authentication
 *     summary: Validate Token
 *     description: Checks if the provided JWT token is valid.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token is valid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Token is valid
 *                 user:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                       format: uuid
 *                       example: 60d1eab5f4c556001c4f2c60
 *       401:
 *         description: No token provided or token is invalid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid token
 */


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




Router.get('/validateToken', (req, res) => {
  
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

   
    res.json({ message: 'Token is valid', user: decoded });
  });
});


module.exports = Router;
