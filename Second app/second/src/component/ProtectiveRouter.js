import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectiveRouter = ({ children }) => {
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  console.log("console");
  return children;
};

export default ProtectiveRouter;
