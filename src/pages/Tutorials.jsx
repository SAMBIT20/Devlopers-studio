import React from "react";
import { useContext } from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import { ThemeContext } from "../App";

const Tutorials = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div>
      <section className={isDark ? "" : "light-background"}>
        <Header />
        <Post />
      </section>
    </div>
  );
};

export default Tutorials;
