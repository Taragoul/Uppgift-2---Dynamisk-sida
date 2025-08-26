import React from "react";
import "../assets/styles/Banner.css";
import ProfilePic from "./ProfilePic";

const Banner = () => (
    <div className="banner">
        <div className="profile-pic-overlay">
            <ProfilePic />
        </div>
    </div>
);
export default Banner;