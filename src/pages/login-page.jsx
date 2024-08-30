import React, { useState } from "react";
import logo1 from '../imgs/logo1.jpg';
import authApi from '../api-calls/auth-api'; 
import { useNavigate } from "react-router-dom";
import LoginForm from "../componets/login-form";

function AuthPage({setIsLoggedIn}) {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailID, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log('isLogin in loginpage:', isLogin); // Debugging line

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      const loginData = { userName, password };
      try {
        const response = await authApi.loginUser(loginData);
        console.log("response : ",response); // Debugging line
        localStorage.setItem('userId', response.userId); // Store user ID in localStorage
        console.log("response.userID : ", response.userId)
        localStorage.setItem("authToken", response.accessToken);
        console.log("response.accessToken : ",response.accessToken)
        navigate("/"); 
      } catch (error) {
        setError("Login failed. Please try again.");
        console.error("Login failed:", error);
      }
      setIsLoggedIn(true);
    } else {
      // Register logic
      const userData = { emailID, userName, password };
      try {
        await authApi.registerUser(userData);
        setIsLogin(true);
      } catch (error) {
        setError("Registration failed. Please try again.");
        console.error("Registration failed:", error);
      }
    }
  };

  return (
    <LoginForm
      isLogin={isLogin}
      emailID={emailID}
      setEmail={setEmail}
      userName={userName}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      error={error}
      handleSubmit={handleSubmit}
      setIsLogin={setIsLogin}
      logo1={logo1}
    />
  );
}

export default AuthPage;
