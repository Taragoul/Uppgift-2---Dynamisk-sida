import React from "react";
import cvData from "../assets/cv.json";
import "../assets/styles/MyCV.css";

const MyCV = () => (
  <div className="cv-container">
    <h2>My CV</h2>
    {cvData.map((item, idx) => (
      <div className="cv-entry" key={idx}>
        <h3>{item.name}</h3>
        <div className="cv-time">{item.time}</div>
        <div>{item.description}</div>
      </div>
    ))}
  </div>
);

export default MyCV;