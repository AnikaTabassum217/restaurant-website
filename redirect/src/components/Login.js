import React from "react";

import { useNavigate } from 'react-router-dom' ;
const Login = () => {
    const navigate = useNavigate();

  return (
    <>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button onClick={() => { navigate("/profile") ;}}>Login</button>
    </>
  );
};

export default Login;
