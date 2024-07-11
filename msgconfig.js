// sendSms.js
require('dotenv').config();
const twilio = require('twilio');

const accountSid = 'ACbe5da0a4de57d9e888203e9ba204258a';
const authToken = '0e192b96d0459f01e97683edb73c9bcd';
const client = twilio(accountSid, authToken);

const sendSms = (to, body) => {
  client.messages
    .create({
      body: body,
      to: to, // Text this number
      from: '+15017122661', // From a valid Twilio number
    })
    .then((message) => console.log(`Message sent: ${message.sid}`))
    .catch((error) => console.error(error));
};

module.exports = sendSms;
