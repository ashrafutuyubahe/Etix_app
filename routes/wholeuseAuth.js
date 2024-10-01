const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const Router = express.Router();
const User = require("../models/users");


/**
 * @swagger
 * /userRegister:
 *   post:
 *     tags:
 *       - User Authentication
 *     summary: User Registration
 *     description: Registers a new user and hashes the password before saving.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 30
 *                 example: John Doe
 *               userEmail:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               userPassword:
 *                 type: string
 *                 minLength: 6
 *                 example: your_password
 *               userPhoneNumber:
 *                 type: string
 *                 minLength: 13
 *                 example: +1234567890123
 *     responses:
 *       201:
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *       400:
 *         description: Invalid input or user already exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: User already exists. please Register with other credentials
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


const userSchema = joi.object({
  userName: joi.string().min(3).max(30).required(),
  userEmail: joi.string().email().required(),
  userPassword: joi.string().min(6).required(),
  userPhoneNumber: joi.string().min(13).required(),
});

Router.post("/userRegister", async (req, res) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const { userName, userEmail, userPassword, userPhoneNumber } = req.body;

    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res
        .status(400)
        .json({
          error: "User already exists. please Register with other credentials",
        });
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const newUser = new User({
      userName,
      userEmail,
      userPassword: hashedPassword,
      userPhoneNumber,
    });

    const saveUser = await newUser.save();

    if (saveUser) {
      return res.status(201).json({ message: "User registered successfully" });
    }
    return res.status(404).json({ message: "User registration failed" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = Router;
