// src/components/Login.js

import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: username,password: password }),
      });
      if (!response.ok) {
        throw new Error("Invalid username or password. Please try again.");
      }
      const data = await response.json()
      console.log("Login successful:", data);
      if(data.jwt) {
        localStorage.setItem('info',JSON.stringify(data) )
      }
      navigate('/')
      // Redirect or do something else after successful login
    } catch (error) {
      setError("Tài khoản hoặc mật khẩu không đúng");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            className="form-control"
            type="text"
            value={username}
            onFocus={()=> setError('')}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onFocus={()=> setError('')}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error-msg">{error}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
