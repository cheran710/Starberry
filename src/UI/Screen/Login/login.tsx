import React, { useState } from 'react';
import './login.scss';
import LoginHandler from '../../../FunctionHandle/login';

const Login: React.FC = () => {
  
  const LoginValue = LoginHandler()

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={LoginValue.handleLogin} noValidate>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={LoginValue.username}
            onChange={(e) => LoginValue.setUsername(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={LoginValue.password}
            onChange={(e) => LoginValue.setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        {LoginValue.fielderror && <p className="error">{LoginValue.fielderror}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
