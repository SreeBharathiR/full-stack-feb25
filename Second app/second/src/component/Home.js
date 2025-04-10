import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const Home = () => {
  const id = "qws-vsrb-grq";
  const secondMeetId = "abc-ghy-huug";
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  // fetch('https://fakestoreapi.com/products/1')
  // .then(res=>res.json())
  // .then(json=>console.log(json))

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch("https://fakestoreapi.com/products/1");
  //     const result = await res.json();
  //     setData(result);
  //   } catch (e) {
  //     console.log("error during fetching ", e);
  //   }
  // };

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (e) {
      console.log("error during fetching ", e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      Home
      <div>
        <Link to={`/${id}`}>Meeting Link</Link>
        <Link to={`/${secondMeetId}`}>Second meet</Link>
        <br></br>
        <br></br>
        {data?.map((value) => (
          <p>{value ? value.title : "loading..."}</p>
        ))}
        <br></br>
        <br></br>
        <button onClick={() => navigate("/about")}>About</button>
      </div>
    </div>
  );
};

export default Home;
