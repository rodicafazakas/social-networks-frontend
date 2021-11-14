import React from "react";
import Header from "../components/Header/Header";
import SignIn from "../components/SignIn/SignIn";
import "./Home.css";

const Home = () => {
  return (
    <div className = "homepage">
      <Header />
      <SignIn />
    </div>
  )
}

export default Home;