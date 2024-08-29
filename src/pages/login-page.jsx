import React, { useState } from "react";
import logo1 from '../imgs/logo1.jpg';
import authApi from '../api-calls/auth-api'; 
import { useNavigate } from "react-router-dom";
import LoginForm from "../componets/login-form";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailID, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      const loginData = { userName, password };
      try {
        const response = await authApi.loginUser(loginData);
        localStorage.setItem("authToken", response.token);
        navigate("/"); 
      } catch (error) {
        setError("Login failed. Please try again.");
        console.error("Login failed:", error);
      }
    } else {
      // Register logic
      const userData = { emailID, userName, password };
      try {
        await authApi.registerUser(userData);
        navigate("/"); 
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
