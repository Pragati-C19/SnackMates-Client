// Authentication API's hook

import { useState, useEffect } from 'react';
import authApi from '../api-calls/auth-api';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const registerUser = async (userData) => {
    try {
      const response = await authApi.registerUser(userData);
      return response.data;
    } catch (error) {
      console.error("Error Registering User:", error);
      throw error;
    }
  };

  const loginUser = async (loginData) => {
    try {
      const response = await authApi.loginUser(loginData)
      localStorage.setItem('authId', response.userId);
      localStorage.setItem('authToken', response.accessToken);
      console.log("useAuth | loginUser response : ", response)
      console.log("useAuth | loginUser response : ", isLoggedIn)
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error Logging In User:", error);
      throw error;
    }
  };

  const logoutUser = async () => {
    try {
      await authApi.logoutUser();
      localStorage.removeItem('authId');
      localStorage.removeItem('authToken');
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error Logging Out User:", error);
      throw error;
    }
  };

  return {
    isLoggedIn,
    registerUser,
    loginUser,
    logoutUser,
  };
};

export default useAuth;
