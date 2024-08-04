const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";
const connection = require("../dbconnection");
const mongoose = require("mongoose");
const Agent = require("../models/agentModel");

Router.post("/agentRegister", async (req, res) => {
  try {
    const { agentEmail, agentPassword, agentAgency,agentWorkStation } = req.body;

    const existingAgent= await Agent.findOne({agentEmail  });

    if (existingAgent) {
      return res.status(400).json({
        error: "agent already exists. please Register with other credentials",
      });
    }

    const hashedPassword = await bcrypt.hash(agentPassword, 10);

    const newAgent = new Agent({
       agentEmail,
       agentPassword: hashedPassword,
      agentAgency,
      agentWorkStation
    });

    const saveAgent = await newAgent.save();

    if (saveAgent) {
      return res.status(201).json({ message: "Agent added successfully" });
    }
    return res.status(404).json({ message: "Agent registration failed" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

Router.post("/agentLogin", async (req, res) => {
  try {
    const { agentEmail, agentPassword, agentAgency } = req.body;

    if (!agentEmail || !agentPassword || !agentAgency) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const AgentInstance = await Agent.findOne({agentEmail});

    if (!AgentInstance) {
      return res
        .status(400)
        .json({ error: "Invalid Email, Agency, or Password" });
    }

    const validPassword = await bcrypt.compare(
      agentPassword,
      AgentInstance.agentPassword
    );
    if (!validPassword) {
      return res
        .status(400)
        .json({ error: "Invalid Email,agency, or Password" });
    }

    const token = jwt.sign({ agentId: AgentInstance._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res
      .header("Authorization", "Bearer " + token)
      .json({ message: "Logged in successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = Router;
