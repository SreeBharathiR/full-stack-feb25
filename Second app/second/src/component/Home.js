import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const id = "qws-vsrb-grq";
  const secondMeetId = "abc-ghy-huug";
  return (
    <div>
      Home
      <div>
        <Link to={`/${id}`}>Meeting Link</Link>
        <Link to={`/${secondMeetId}`}>Second meet</Link>
      </div>
    </div>
  );
};

export default Home;
