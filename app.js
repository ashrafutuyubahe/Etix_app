require("dotenv").config();
const express = require("express");
const joi = require("joi");
const path = require('path');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const connection = require("./dbconnection");
const User = require("./models/users");
const Admin = require("./models/admin");
const authenticateToken = require("./middlewares/userAuth");
const wholeUserAuth = require("./routes/wholeuseAuth");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";
const  sendSMS= require('./msgconfig');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
const nodemailer = require('nodemailer');
const initiateAirtelMoneyPayment = require('./airtelpay');

//email sending logic
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:"ashraftuyubahe001@gmail.com",
    pass:"mbpy qfhl vsmj twf"
  }
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: "ashraftuyubahe001@gmail.com",
    to: to,
    subject: subject,
    text: text
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent: ' + info.response };
  } catch (error) {
    return { success: false, error: 'Error sending email: ' + error };
  }
};

app.post('/send-email', async (req, res) => {
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
app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/dash', (req, res) => {
  res.render('dashboard');
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/login');
});

app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});


app.use('/user', wholeUserAuth);
app.use('/', wholeUserAuth);
app.use('/user/send-message/',sendSMS)








app.use("/user", wholeUserAuth);
app.use("/user/login", wholeUserAuth);

//admin authenticaton

const adminSchema = joi.object({
  adminName: joi.string().min(3).max(30).required(),
  adminEmail: joi.string().email().required(),
  adminPassword: joi.string().min(6).required(),
});

app.post("/adminRegister", async (req, res) => {
  const { error } = adminSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const { adminName, adminEmail, adminPassword: adminPassword } = req.body;

    const existingAdmin = await Admin.findOne({ adminEmail });
    if (existingAdmin) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Create new user
    const newAdmin = new Admin({
      adminName,
      adminEmail,
      adminPassword: hashedPassword,
    });

    if (await newAdmin.save())
      return res.status(201).json({ message: "Admin registered successfully" });
    return res.status(404).json({ message: "Admin registration failed" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/adminLogin", async (req, res) => {
  try {
    const { adminEmail, adminPassword } = req.body;

    const admin = await Admin.findOne({ adminEmail });

    if (!admin) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(
      adminPassword,
      admin.adminPassword
    );
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ adminId: admin._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res
      .header("Authorization", "Bearer " + token)
      .json({ message: "Logged in successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/userDashboard", authenticateToken, (req, res) => {
  res
    .status(200)
    .json({ message: "This is a protected route", user: req.user });
});

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});

//airtel payment integration
app.post('/pay', async (req, res) => {
  const { phoneNumber, amount } = req.body;
  try {
    await initiateAirtelMoneyPayment(phoneNumber, amount);
    res.status(200).send('Payment initiated successfully');
  } catch (error) {
    res.status(500).send('Payment initiation failed');
  }
});

app.post('/pay', async (req, res) => {
  const { phoneNumber, amount } = req.body;
  try {
    await initiateAirtelMoneyPayment(phoneNumber, amount);
    res.status(200).send('Payment initiated successfully');
  } catch (error) {
    res.status(500).send('Payment initiation failed');
  }
});

app.post('/airtel-money-webhook', (req, res) => {
  const paymentStatus = req.body;
  console.log('Payment status received:', paymentStatus);
  alert(paymentStatus)
  res.sendStatus(200);
});
