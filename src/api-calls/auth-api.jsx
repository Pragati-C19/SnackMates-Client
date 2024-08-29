// Authentication API calls

import axios from "axios";
import snackmates_base_url from './api-config'; // Import base_url from api-config.jsx

// User Registration http://localhost:4000/auth/register
const registerUser = async (userData) => {
  const url = `${snackmates_base_url}/auth/register`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.post(url, userData);
    return response.data;
  } catch (error) {
    console.error("Error Registering User:", error);
    throw error; // Handle errors more explicitly
  }
};

// User Login http://localhost:4000/auth/login
const loginUser = async (loginData) => {
  const url = `${snackmates_base_url}/auth/login`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.post(url, loginData);
    return response.data;
  } catch (error) {
    console.error("Error login User:", error);
    throw error; // Handle errors more explicitly
  }
};

// User Logout http://localhost:4000/auth/logout
const logoutUser = async () => {
  const url = `${snackmates_base_url}/auth/logout`;
  console.log(url)
  console.log(snackmates_base_url)
  try {
    const response = await axios.post(url);
    return response.data;
  } catch (error) {
    console.error("Error Logout User:", error);
    throw error; // Handle errors more explicitly
  }
};

export default {registerUser, loginUser, logoutUser}