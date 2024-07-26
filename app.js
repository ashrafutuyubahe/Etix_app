require("dotenv").config();
const express = require("express");
const joi = require("joi");
const connection = require("./dbconnection");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/users");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const userlogin = require("./routes/userlogin");
const driverLogin = require("./routes/Driverauth");
const Driver = require("./models/driverModel");
const authenticateToken = require("./middlewares/userAuth");
const wholeUserAuth = require("./routes/wholeuseAuth");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";
const sendSMS = require("./msgconfig");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
const nodemailer = require("nodemailer");
const CLIENT_SECRET_ID = "804330";
const CLIENT_ID = "78dfb2e0-ddf3-4366-b7b5-cafff4739f56";
const axios = require("axios");
const Ticket = require("./models/ticketsModel");
const BoughtTicket = require("./models/boughtTicketModel");
const { v4: uuidv4 } = require("uuid");

const allowedOrigins = [
  "http://localhost:19006",
  "exp://192.168.43.76:8081",
    "exp://192.168.43.76:8082"
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

//email sending logic
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ashraftuyubahe001@gmail.com",
    pass: "mbpy qfhl vsmj twf",
  },
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: "ashraftuyubahe001@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent: " + info.response };
  } catch (error) {
    return { success: false, error: "Error sending email: " + error };
  }
};

app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  const result = await sendEmail(to, subject, text);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(500).json({ error: result.error });
  }
});

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:2000/dash",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      // Find or create user in your database
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

// Routes
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

app.use("/user", wholeUserAuth);
app.use("/userAuth", userlogin);
app.use("/driverAuth", driverLogin);

app.use("/user/send-message/", sendSMS);

//admin authenticaton

const driverSchema = joi.object({
  driverName: joi.string().min(3).max(30).required(),
  driverPassword: joi.string().required(),
   driverCar: joi.string().required(),
});

app.post("/AddDrivers", async (req, res) => {
  const { error } = driverSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const { driverName, driverPassword,driverCar } = req.body;

    const existingDriver = await Driver.findOne({driverName});
    if (existingDriver) {
      return res.status(400).json({ error: "Driver with that email already exists" });
    }

    const hashedPassword = await bcrypt.hash(driverPassword, 10);

    const newDriver = new Driver({
      driverName,
      driverPassword:hashedPassword,
      driverCar,
    });

    if (await newDriver.save())
      return res.status(201).json({ message: "Driver has been added successfully" });
    return res.status(404).json({ message: "failed to add new Driver" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/userDashboard", authenticateToken, (req, res) => {
  res
    .status(200)
    .json({ message: "This is a protected route", user: req.user });
});

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

// Function to initiate payment
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

app.post("/addTickets", async (req, res) => {
  const { origin, destination, departureTime, agency, price } = req.body;

  if (!origin || !destination || !departureTime || !agency || !price) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newTicket = new Ticket({
      origin,
      destination,
      departureTime,
      agency,
      price,
    });

    await newTicket.save();
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
    !agency
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const ticketId = uuidv4();

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
  });

  const qrData = {
    ticketId: newTicket.ticketId,
    userName: newTicket.userName,
    paymentStatus: newTicket.paymentStatus,
  };

  const qrString = JSON.stringify(qrData);

  try {
    newTicket.qrCode = await QRCode.toDataURL(qrString);

    const savedTicket = await newTicket.save();

    if (!savedTicket) {
      return res
        .status(500)
        .json({ error: "Failed to save your bought ticket" });
    }

    res.status(201).json(newTicket);
  } catch (err) {
    console.error("Error generating QR code or saving ticket:", err);
    res.status(500).json({ error: "Failed to generate ticket" });
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
      agency
    } = req.body;

   
    if (!ticketId || !userName || !origin || !destination || !price || !departureTime || !arrivalTime) {
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
      agency
    });

    
    await newTicket.save();

    
    res.status(201).json({ message: 'Ticket added successfully', ticket: newTicket });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
