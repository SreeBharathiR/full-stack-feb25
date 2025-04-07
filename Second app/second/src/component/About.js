import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      About
      {/* <a href="/">Back to Home</a> */}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default About;
