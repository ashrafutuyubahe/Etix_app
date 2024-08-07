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
    const { agentEmail, agentPassword, agentAgency,agentWorkStation,agentName } = req.body;

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
      agentWorkStation,
      agentName
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


// Fetch all agents with all fields
Router.get("/agents", async (req, res) => {
  try {
    const agents = await Agent.find({});
       if(!agents){
                return res.status(401).send("failed to fetch agents");
       }
    res.status(200).json({agents});
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get agent by ID
Router.get('/agents/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Ensure the agent data includes the password
    const agent = await Agent.findById(id).select('+agentPassword');
    
    if (!agent) {
      return res.status(404).send("Agent not found");
    }
    
    res.status(200).json({ agent });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Update an agent's details by ID
Router.put("/UpdateAgent/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // Get the updates from the request body

  try {
    // Find and update the agent document with the provided fields
    const updatedAgent = await Agent.findByIdAndUpdate(
      id,
      { $set: updates }, // Use $set to apply only the fields provided in the request body
      { new: true } // Return the updated document
    );

    if (updatedAgent) {
      res.status(200).json({ message: "Agent updated successfully", updatedAgent });
    } else {
      res.status(404).json({ error: "Agent not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});



// Delete an agent by ID
Router.delete("/deleteAgent/:id", async (req, res) => {
const { id } = req.params;

  try {
    const result = await Agent.findByIdAndDelete(id);

    if (result) {
      res.status(200).json({ message: "Agent deleted successfully" });
    } else {
      res.status(404).json({ error: "Agent not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = Router;
