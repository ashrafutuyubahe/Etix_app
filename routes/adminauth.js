// routes/adminRoutes.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";
const Admin = require("../models/adminModel");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management
 */

/**
 * @swagger
 * /adminRegister:
 *   post:
 *     summary: Register a new admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               adminEmail:
 *                 type: string
 *                 format: email
 *               adminPassword:
 *                 type: string
 *               adminAgency:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin registered successfully
 *       400:
 *         description: Admin already exists
 *       500:
 *         description: Internal server error
 */
Router.post("/adminRegister", async (req, res) => {
  try {
    const { adminEmail, adminPassword, adminAgency } = req.body;

    const existingadmin = await Admin.findOne({ adminEmail });

    if (existingadmin) {
      return res.status(400).json({
        error: "Admin already exists. Please register with other credentials.",
      });
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    const newAdmin = new Admin({
      adminEmail,
      adminPassword: hashedPassword,
      adminAgency,
    });

    const saveAdmin = await newAdmin.save();

    if (saveAdmin) {
      return res.status(201).json({ message: "Admin registered successfully" });
    }
    return res.status(404).json({ message: "Admin registration failed" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /adminLogin:
 *   post:
 *     summary: Login an admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               adminEmail:
 *                 type: string
 *                 format: email
 *               adminPassword:
 *                 type: string
 *               adminAgency:
 *                 type: string
 *     responses:
 *       200:
 *         description: Logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid Email, Agency, or Password
 *       500:
 *         description: Internal server error
 */
Router.post("/adminLogin", async (req, res) => {
  try {
    const { adminEmail, adminPassword, adminAgency } = req.body;

    if (!adminEmail || !adminPassword || !adminAgency) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const AdminInstance = await Admin.findOne({ adminEmail });

    if (!AdminInstance) {
      return res.status(400).json({ error: "Invalid Email, Agency, or Password." });
    }

    const validPassword = await bcrypt.compare(adminPassword, AdminInstance.adminPassword);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid Email, Agency, or Password" });
    }

    const token = jwt.sign({ adminId: AdminInstance._id }, SECRET_KEY, { expiresIn: "4h" });

    res.json({ message: "Logged in successfully", token });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Logout an admin
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logged out successfully
 *       400:
 *         description: No token provided
 */
Router.post("/logout", (req, res) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (token) {
    blacklist.add(token);
    res.json({ message: "Logged out successfully" });
  } else {
    res.status(400).json({ error: "No token provided" });
  }
});

/**
 * @swagger
 * /verifyToken:
 *   post:
 *     summary: Verify the provided token
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token is valid
 *       401:
 *         description: No token provided or token is invalid or expired
 */
Router.post("/verifyToken", (req, res) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, SECRET_KEY, (err) => {
    if (err) {
      return res.status(401).json({ error: "Token is invalid or expired" });
    }
    res.status(200).json({ message: "Token is valid" });
  });
});

module.exports = Router;
