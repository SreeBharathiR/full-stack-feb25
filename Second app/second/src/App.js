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

function App() {
  const [mode, setMode] = useState("light");
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/:id" element={<Meeting />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
