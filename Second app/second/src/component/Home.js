import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const id = "qws-vsrb-grq";
  const secondMeetId = "abc-ghy-huug";
  const navigate = useNavigate();

  return (
    <div>
      Home
      <div>
        <Link to={`/${id}`}>Meeting Link</Link>
        <Link to={`/${secondMeetId}`}>Second meet</Link>
        <br></br>
        <br></br>
        <button onClick={() => navigate("/about")}>About</button>
      </div>
    </div>
  );
};

export default Home;
