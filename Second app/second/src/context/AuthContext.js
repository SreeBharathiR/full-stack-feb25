import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleLogot = () => {
    setIsLogin(false);
  };
  return (
    <AuthContext.Provider value={{ isLogin, handleLogin, handleLogot }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
