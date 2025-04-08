import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  return (
    <div>
      Login
      <button onClick={handleLogin}>Login</button>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Login;
