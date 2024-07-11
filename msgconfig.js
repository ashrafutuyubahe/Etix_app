const express= require('express');
const Router = express.Router();
const axios= require('axios');

//message logic
const sendSMS = async (phone, message) => {
    try {
      const response = await axios.post('https://textbelt.com/text', {
        phone: phone,
        message: message,
        key: 'textbelt',
      });
  
      if (response.data.success) {
        return { success: true, message: 'Message sent successfully.' };
      } else {
        return { success: false, error: response.data.error };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  
  Router.post('/send-sms', async (req, res) => {
    const { to, text } = req.body;
  
    const result = await sendSMS(to, text);
    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(500).json({ error: result.error });
    }
  });

  module.exports= Router;