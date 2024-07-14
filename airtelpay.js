const CLIENT_SECRET_ID= "492483";
const CLIENT_ID="01a05fef-aeab-4624-bf9f-0e616ec5250f";
const axios = require('axios');


const getAccessToken = async () => {
    try {
      const response = await axios.post('https://api.airtel.com/oauth/token', {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET_ID,
        grant_type: 'client_credentials'
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data.access_token;
    } catch (error) {
      console.error('Failed to get access token:', error.response ? error.response.data : error.message);
      throw error;
    }
  };
  
  const initiateAirtelMoneyPayment = async (phoneNumber, amount, companyAccount) => {
    try {
      const accessToken = await getAccessToken();
      const response = await axios.post('https://api.airtel.com/payment', {
        phoneNumber: phoneNumber,
        amount: amount,
        companyAccount: companyAccount 
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
  
      console.log('Payment successful:', response.data);
      return response.data;
    } catch (error) {
      console.error('Payment failed:', error.response ? error.response.data : error.message);
      throw error;
    }
  };
  
  module.exports = initiateAirtelMoneyPayment;
  