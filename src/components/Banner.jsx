import React from "react";
import "../assets/styles/Banner.css";
import ProfilePic from "./ProfilePic";

const Banner = () => (
    <div className="banner">
        <div className="profile-pic-overlay">
            <ProfilePic />
            <div className="profile-text"><h2>Zak Troy</h2></div>
                        <div className="profile-text">Future Fullstack Developer</div>

        </div>
    </div>
);
export default Banner;