import React from "react";
import "./home.css";
import Header from "../components/Header";
import Hero from "../components/home/Hero";
import LearningCard from "../components/home/LearningCard";
const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <LearningCard />
    </div>
  );
};

export default Home;
