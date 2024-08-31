import React, { useState } from "react";
import logo1 from '../imgs/logo1.jpg';
import { useNavigate } from "react-router-dom";
import LoginForm from "../componets/login-form";
import useAuth from "../hooks/use-auth";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailID, setEmail] = useState("");
  const [error, setError] = useState("");
  const { registerUser, loginUser} = useAuth()
  const navigate = useNavigate();

  // console.log('isLogin in loginpage:', isLogin); // Debugging line

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      const loginData = { userName, password };
      try {
        await loginUser(loginData);
        navigate("/"); 
      } catch (error) {
        setError("Login failed. Please try again.");
      }
    } else {
      // Register logic
      const userData = { emailID, userName, password };
      try {
        await registerUser(userData);
        setIsLogin(true);
      } catch (error) {
        setError("Registration failed. Please try again.");
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
