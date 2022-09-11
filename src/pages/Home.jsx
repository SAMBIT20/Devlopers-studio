import React from "react";
import { Link } from "react-router-dom";
import { namstejs, react } from "../config/data";
import "./home.css";
import Header from "../components/Header"
const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Link to={"/tutorials"} state={{ data: namstejs, path: "namaste-js" }}>
        Namaste Javascript Notes 🚀
      </Link>
      <br />
      <Link to={"/tutorials"} state={{ data: react }}>
        React Interview Questions ⚛️
      </Link>
    </div>
  );
};

export default Home;
