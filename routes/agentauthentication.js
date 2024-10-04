const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";
const connection = require("../dbconnection");
const mongoose = require("mongoose");
const Agent = require("../models/agentModel");

/**
 * @swagger
 * components:
 *   schemas:
 *     Agent:
 *       type: object
 *       required:
 *         - agentEmail
 *         - agentPassword
 *         - agentAgency
 *         - agentWorkStation
 *         - agentName
 *       properties:
 *         agentEmail:
 *           type: string
 *           description: The email of the agent
 *         agentPassword:
 *           type: string
 *           description: The password of the agent
 *         agentAgency:
 *           type: string
 *           description: The agency the agent works for
 *         agentWorkStation:
 *           type: string
 *           description: The agent's workstation
 *         agentName:
 *           type: string
 *           description: The name of the agent
 */

/**
 * @swagger
 * /addAgents/agentRegister:
 *   post:
 *     summary: Register a new agent
 *     tags: [Agent]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Agent'
 *     responses:
 *       201:
 *         description: Agent added successfully
 *       400:
 *         description: Agent already exists
 *       500:
 *         description: Internal server error
*/

Router.post("/agentRegister", async (req, res) => {
  try {
    const { agentEmail, agentPassword, agentAgency,agentWorkStation,agentName } = req.body;

    const existingAgent= await Agent.findOne({agentEmail});

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



/**
 * @swagger
 * /addAgents/agentLogin:
 *   post:
 *     summary: Log in as an agent
 *     tags: [Agent]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               agentEmail:
 *                 type: string
 *               agentPassword:
 *                 type: string
 *               agentAgency:
 *                 type: string
 *     responses:
 *       200:
 *         description: Logged in successfully
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */


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
      .json({ message: "Logged in successfully",token});
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /addAgents/agents:
 *   get:
 *     summary: Get all agents
 *     tags: [Agent]
 *     responses:
 *       200:
 *         description: A list of agents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Agent'
 *       500:
 *         description: Internal server error
 */

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


/**
 * @swagger
 * /addAgents/agents/{id}:
 *   get:
 *     summary: Get an agent by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The agent ID
 *     responses:
 *       200:
 *         description: The agent data
 *       404:
 *         description: Agent not found
 *       500:
 *         description: Internal server error
 */

Router.get('/agents/:id', async (req, res) => {
  try {
    const { id } = req.params;
   
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


/**
 * @swagger
 * /addAgents/UpdateAgent/{id}:
 *   put:
 *     summary: Update an agent by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The agent ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Agent'
 *     responses:
 *       200:
 *         description: Agent updated successfully
 *       404:
 *         description: Agent not found
 *       500:
 *         description: Internal server error
 */

Router.put("/UpdateAgent/:id", async (req, res) => {
  
  const { id } = req.params;
  const { agentEmail, agentPassword, agentAgency,agentWorkStation,agentName } = req.body;
  const updateData={ agentEmail, agentPassword, agentAgency,agentWorkStation,agentName };
  try {
    
    const  checkAgentExists= await Agent.findById(id);
    if(!checkAgentExists){
      res.send(401).send("no such agent found");
    }

    const updatedAgent = await Agent.findByIdAndUpdate(
      id,
      { $set: updateData }, 
      { new: true } 
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


/**
 * @swagger
 * /addAgents/deleteAgent/{id}:
 *   delete:
 *     summary: Delete an agent by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The agent ID
 *     responses:
 *       200:
 *         description: Agent deleted successfully
 *       404:
 *         description: Agent not found
 *       500:
 *         description: Internal server error
 */


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
