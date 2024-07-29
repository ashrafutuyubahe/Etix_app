import axios from 'axios';

const API_URL = 'http://192.168.43.76:2000'; 

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/userRegister`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


