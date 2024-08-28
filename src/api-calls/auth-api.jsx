// Authentication API calls

import axios from "axios";
import authUrl from "./api-config"; // Import API_URL from api-config.jsx

// User Registration http://localhost:4000/auth/register
const registerUser = async (userData) => {
  try {
    const response = await axios.get(`${authUrl}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error Registering User:", error);
    throw error; // Handle errors more explicitly
  }
};

// User Login http://localhost:4000/auth/login
const loginUser = async (loginData) => {
  try {
    const response = await axios.get(`${authUrl}/login`, loginData);
    return response.data;
  } catch (error) {
    console.error("Error login User:", error);
    throw error; // Handle errors more explicitly
  }
};

// User Logout http://localhost:4000/auth/logout
const logoutUser = async () => {
  try {
    const response = await axios.get(`${authUrl}/logout`);
    return response.data;
  } catch (error) {
    console.error("Error Logout User:", error);
    throw error; // Handle errors more explicitly
  }
};

export default {registerUser, loginUser, logoutUser}