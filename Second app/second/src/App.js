import logo from "./logo.svg";
import "./App.css";
import Reducer from "./component/Reducer";
import Ref from "./component/Ref";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import Home from "./component/Home";
import About from "./component/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./component/ErrorPage";
import Meeting from "./component/Meeting";
import Layout from "./component/Layout";
import { AuthProvider } from "./context/AuthContext";
import Login from "./component/Login";
import ProtectiveRouter from "./component/ProtectiveRouter";

function App() {
  const [mode, setMode] = useState("light");
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectiveRouter>
                <Layout />
              </ProtectiveRouter>
            }
          >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
