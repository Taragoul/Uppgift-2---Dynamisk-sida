import React from "react";
import AboutMe from "../components/AboutMe";
import ContactInfo from "../components/ContactInfo";
import "../assets/styles/Home.css";

const Home = () => (
  <div className="home-content">
    <AboutMe />
    <ContactInfo />
  </div>
);

export default Home;