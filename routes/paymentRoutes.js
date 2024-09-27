
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Router = express.Router();
require("dotenv").config();


//payment implementation logic
const getAccessToken = async () => {
    try {
      const response = await axios.post(
        "https://openapi.airtel.africa/auth/oauth2/token",
        {
          client_id:process.env.CLIENT_ID,
          client_secret:process.env.CLIENT_SECRET_ID,
          grant_type: "client_credentials",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.access_token;
    } catch (error) {
      console.error(
        "Failed to get access token:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };
  
  
  const initiateAirtelMoneyPayment = async (
    phoneNumber,
    amount,
    companyAccount
  ) => {
    try {
      const accessToken = await getAccessToken();
      const response = await axios.post(
        "https://openapi.airtel.africa/merchant/v1/payments/",
        {
          reference: "unique_transaction_reference",
          subscriber: {
            country: "RWA",
            currency: "RWF",
            msisdn: phoneNumber,
          },
          transaction: {
            amount: amount,
            country: "RWA",
            currency: "RWF",
          },
          companyAccount: companyAccount,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Payment successful:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Payment failed:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };
  
  Router.post("/pay", async (req, res) => {
    const { phoneNumber, amount, companyAccount } = req.body;
    try {
      const paymentResponse = await initiateAirtelMoneyPayment(
        phoneNumber,
        amount,
        companyAccount
      );
      res.status(200).json(paymentResponse);
    } catch (error) {
      res.status(500).send("Payment initiation failed");
    }
  });
  
  Router.post("/airtel-money-webhook", (req, res) => {
    const paymentStatus = req.body;
    console.log("Payment status received:", paymentStatus);
  
    res.sendStatus(200);
  });
  
  
  //test payments
  Router.post("/handlePayment", (req, res) => {
  
    res.json({paymentStatus:"successful"});
    
  });

  module.exports= Router;
  
  