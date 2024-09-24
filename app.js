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
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const cors = require("cors");

//origin config
const express = require("express");
const app = express();
const allowedOrigins = [
  "http://localhost:19006",
  "exp://192.168.43.76:8081",
    "exp://192.168.43.76:8082",
    "http://localhost:5173"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg =
        "The CORS policy for this site does not allow access from the specified origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
};
app.use(cors(corsOptions));

//other config
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", wholeUserAuth);
app.use("/userAuth", userlogin);
app.use("/driverAuth", driverLogin);

app.use("/user/send-message/", sendSMS);
app.use('/admin',TicketSchedule);
app.use('/tickeschedule/find',TicketSchedule);
app.use("/uploadTicketScheduleFile",ticketScheduleUpload);
app.use('/api/seats/',findAvailableSeats);
app.use("/adminAuth/",AdminAuthentication);
app.use("/addAgents/",AgentAuthentication);
app.use("/getReportDownload/",DownloadReport);




//Social Login Logic(Google login)
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:2000/dash",
      scope: ["profile", "email"],
    },  
    async (accessToken, refreshToken, profile, done) => {
      
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }  
      const newUser = new User({
        googleId: profile.id,
        userName: profile.displayName,
        userEmail: profile.emails[0].value,
      });  
      await newUser.save();
      done(null, newUser);
    }  
  )  
);  

passport.serializeUser((user, done) => {
  done(null, user.id);
});  

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});  

//google login endpoints
app.get("/", (req, res) => {
  res.render("landing");
});  

app.get("/login", (req, res) => {
  res.render("login");
});  

app.get("/dash", (req, res) => {
  res.render("dashboard");
});  

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);  

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/login");
  }  
);  

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }  
    res.redirect("/");
  });  
});  




//driver authenticaton
const driverSchema = joi.object({
  driverName: joi.string().min(3).max(30).required(),
  driverPassword: joi.string().required(),
   driverCar: joi.string().required(),
   driverAgency:joi.string().required()
});

app.post("/AddDrivers", async (req, res) => {
  const { error } = driverSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const { driverName, driverPassword, driverCar, driverAgency } = req.body;

   
    const existingDriver = await Driver.findOne({ driverName, driverCar });
    if (existingDriver) {
      return res.status(400).json({ error: "Driver with that name and car already exists" });
    }
 
    const hashedPassword = await bcrypt.hash(driverPassword, 10);
    
    const newDriver = new Driver({
      driverName,
      driverPassword: hashedPassword,
      driverCar,
      driverAgency
    });

    
    await newDriver.save();

    return res.status(201).json({ message: "Driver has been added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/userDashboard", authenticateToken, (req, res) => {
  res
    .status(200)
    .json({ message: "This is a protected route", user: req.user });
});



//payment implementation logic
const getAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://openapi.airtel.africa/auth/oauth2/token",
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET_ID,
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

app.post("/pay", async (req, res) => {
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

app.post("/airtel-money-webhook", (req, res) => {
  const paymentStatus = req.body;
  console.log("Payment status received:", paymentStatus);

  res.sendStatus(200);
});


//test payments
app.post("/handlePayment", (req, res) => {

  res.json({paymentStatus:"successful"});
  
});


//Ticket endpoints
app.post("/addTickets", async (req, res) => {
  const { origin, destination, departureTime,arrivalTime, agency, price,driverName ,driverCarPlate} = req.body;
  console.log(req.body)
  if (!origin || !destination || !departureTime || !agency || !price || !arrivalTime || !driverName ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newTicket = new Ticket({
      origin,
      destination,
      departureTime,
      arrivalTime,
      driverName,
      driverCarPlate,
      agency,
      price,
    });

     const findTicketsExists= await Ticket.findOne({
      origin,
      destination,
      departureTime,
      arrivalTime,
      driverCarPlate,
      agency,
      price
      
    })

    if(findTicketsExists){
       return res.status(401).send(" there is a similar ticket please add different ticket")
    }


      if( !await newTicket.save()){
        res.status(401).json({ error: "  failed  to save Ticket" });
      }
    res.status(201).json({ message: "Ticket added successfully" });
  } catch (error) {
    console.error("Error adding ticket:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/findTickets", async (req, res) => {
  const { origin, destination, agency } = req.body;
  
  if (!origin || !destination || !agency) {
    return res
      .status(400)
      .json({ error: "Origin, destination, and agency are required" });
  }
  
  try {
    const tickets = await Ticket.find({ origin, destination, agency });
    if (tickets.length === 0) {
      return res.status(404).json({
        message: "No tickets found for the specified route and agency",
      });
    }
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/getYourBoughtTicket", async (req, res) => {
  const {
    userName,
    origin,
    destination,
    price,
    departureTime,
    arrivalTime,
    vehicleNumber,
    paymentStatus,
    agency,
  } = req.body;

  if (
    !userName ||
    !origin ||
    !destination ||
    !price ||
    !departureTime ||
    !arrivalTime ||
    !vehicleNumber ||
    !paymentStatus ||
    !agency
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const ticketId = uuidv4();

  try {
   
    const schedule = await TicketScheduleModel.findOne({ carPlate: vehicleNumber });

    if (!schedule) {
      return res.status(404).json({ error: "No driver found for the provided vehicle number" });
    }

 
    const newTicket = new BoughtTicket({
      ticketId,
      userName,
      origin,
      destination,
      price,
      departureTime,
      arrivalTime,
      vehicleNumber,
      agency,
      paymentStatus,
      driverName: schedule.driverName, 
    });

    const qrData = {
      ticketId: newTicket.ticketId,
      userName: newTicket.userName,
      paymentStatus: newTicket.paymentStatus,
    };

    const qrString = JSON.stringify(qrData);

   
    newTicket.qrCode = await QRCode.toDataURL(qrString);

    
    const savedTicket = await newTicket.save();

    if (!savedTicket) {
      return res.status(500).json({ error: "Failed to save your bought ticket" });
    }

    res.status(201).json({
      newTicket,
      qrCode: newTicket.qrCode, 
    });
  } catch (err) {
    console.error("Error generating QR code or saving ticket:", err);
    res.status(500).json({ error: "Failed to generate ticket" });
  }
});


  app.post('/addBoughtTickets', async (req, res) => {
    try {
      const {
        ticketId,
        userName,
        origin,
        destination,
        price,
        departureTime,
        arrivalTime,
        paymentStatus,
        qrCode,
        vehicleNumber,
        driverName,
        agency
      } = req.body;
      
      
      if (!ticketId || !userName || !origin || !destination || !price || !departureTime || !arrivalTime || !driverName) {
        return res.status(400).json({ error: 'All required fields must be provided' });
      }
  
      
      const newTicket = new BoughtTicket({
        ticketId,
        userName,
        origin,
        destination,
        price,
        departureTime,
        arrivalTime,
        paymentStatus: paymentStatus || 'pending', 
        qrCode,
        vehicleNumber,
        driverName,
        agency
      });
      
      
      await newTicket.save();
      
      
      res.status(201).json({ message: 'Ticket added successfully', ticket: newTicket });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });





//scanning endpoints
const QRCode = require("qrcode");
app.get("/getQRcode", async (req, res) => {
  try {
    const dataObject = req.body;
    
    const dataString = JSON.stringify(dataObject);
    const qrCodeUrl = await QRCode.toDataURL(dataString);
    
    res.send(`<img src="${qrCodeUrl}" alt="QR Code">`);
  } catch (err) {
    res.status(500).send("Error generating QR code");
  }
});
app.post('/scanTicket', async (req, res) => {
  try {
    const { ticketId, userName, paymentStatus} = req.body;


    if (!ticketId || !userName || !paymentStatus) {
      return res.status(400).json({ error: 'All fields are required' });
    }


    const ticket = await BoughtTicket.findOne({ ticketId, userName });

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }


    if (ticket.paymentStatus !== paymentStatus) {
      return res.status(400).json({ error: 'Ticket payment status does not match' });
    }

    
    res.status(200).json({
      message: 'Ticket is valid and paid',
   });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
