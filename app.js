require('dotenv').config();
const express = require('express');
const joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const connection = require('./dbconnection');
const User = require('./models/users'); 
const Admin= require('./models/admin');
const authenticateToken =require('./middlewares/userAuth');
const wholeUserAuth= require('./routes/wholeseAuth');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.user('/user/register',wholeUserAuth);
app.use('/user/login',wholeUserAuth)

//admin authenticaton

const adminSchema = joi.object({
  userName: joi.string().min(3).max(30).required(),
  userEmail: joi.string().email().required(),
  userPassword: joi.string().min(6).required()
});


app.post('/adminRegister', async (req, res) => {
  const { error } = adminSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const { adminName, adminEmail, adminPassword: adminPassword } = req.body;

    
    const existingAdmin = await Admin.findOne({ userEmail });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Create new user
    const newAdmin= new Admin({
      adminName,
      adminEmail,
      adminPassword: hashedPassword
    });

   if(   await newAdmin.save())   return  res.status(201).json({ message: 'Admin registered successfully' });
    
      return  res.status(404).json({ message: 'Admin registration failed' });
   
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/login', async (req, res) => {
  // const { userEmail, userPassword } = req.body;

  try {
    const {userEmail,userPassword}=req.body;

    const user = await User.findOne({ userEmail });

    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const validPassword = await bcrypt.compare(userPassword, user.userPassword);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });

    res.header('Authorization', 'Bearer ' + token).json({ message: 'Logged in successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.get('/userDashboard', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'This is a protected route', user: req.user });
});




app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});

