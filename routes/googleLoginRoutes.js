const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";
const express = require("express");
const Router= express.Router();




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