const express = require("express");
const Router = express.Router();

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
  
  
  
  Router.post("/send-email", async (req, res) => {
    const { to, subject, text } = req.body;
  
    const result = await sendEmail(to, subject, text);
    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(500).json({ error: result.error });
    }  
  });  

  module.exports= Router;