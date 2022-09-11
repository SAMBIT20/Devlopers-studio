import React from "react";
import { Link } from "react-router-dom";
import { namstejs, react } from "../config/data";
import "./home.css";
const Home = () => {
  return (
    <div className="home-page">
      <Link to={"/tutorials"} state={{ data: namstejs, path: "namaste-js" }}>
        Nmase Js
      </Link>
      <br />
      <Link to={"/tutorials"} state={{ data: react }}>
        samaste Js
      </Link>
    </div>
  );
};

export default Home;
