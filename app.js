//file imports
const userlogin = require("./routes/userlogin");
const driverLogin = require("./routes/Driverauth");
const ticketScheduleUpload = require('./routes/ticketscheduleUpload');
const TicketSchedule= require('./routes/ticketSchedule');
const TicketScheduleModel= require('./models/scheduleModel')
const Driver = require("./models/driverModel");
const authenticateToken = require("./middlewares/userAuth");
const Ticket = require("./models/ticketsModel");
const BoughtTicket = require("./models/boughtTicketModel");
const wholeUserAuth = require("./routes/wholeuseAuth");
const ticketRoutes= require("./routes/ticketRoutes");
const findAvailableSeats= require("./routes/ticketSchedule");
const AdminAuthentication= require("./routes/adminauth");
const DownloadReport= require("./routes/downloadReport");
const AgentAuthentication= require("./routes/agentauthentication");
const User = require("./models/users");
const connection = require("./dbconnection");
const sendSMS = require("./msgconfig");
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";


//dependency imports
const joi = require("joi");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const axios = require("axios");
const nodemailer = require("nodemailer");
const cors = require("cors");
const QRCode = require("qrcode");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

//origin config
const express = require("express");
const app = express();
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

//other config
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));




//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", wholeUserAuth);
app.use("/userAuth", userlogin);
app.use("/driverAuth", driverLogin);
app.use("/driverRoutes",driverLogin);

app.use("/user/send-message/", sendSMS);
app.use('/admin',TicketSchedule);
app.use('/tickeschedule/find',TicketSchedule);
app.use('/tickeschedule/addSchedule',TicketSchedule);
app.use('/tickeschedule/getSchedules',TicketSchedule);
app.use('/tickeschedule/delSched',TicketSchedule);

app.use("/ticketsRoutes/addTicks/",ticketRoutes);
app.use("/ticketsRoutes/addBoughtTicks/",ticketRoutes);
app.use("/ticketsRoutes/findTicks",ticketRoutes);
app.use("/ticketsRoutes/getYourBoughtTicks",ticketRoutes);
app.use("/ticketsRoutes/getQrCode",ticketRoutes);
app.use("/ticketsRoutes/scanTicks",ticketRoutes);


app.use("/uploadTicketScheduleFile",ticketScheduleUpload);
app.use('/api/seats/',findAvailableSeats);
app.use("/adminAuth/",AdminAuthentication);
app.use("/addAgents/",AgentAuthentication);
app.use("/getReportDownload/",DownloadReport);



app.get("/userDashboard", authenticateToken, (req, res) => {
  res
    .status(200)
    .json({ message: "This is a protected route", user: req.user });
});
 


app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
